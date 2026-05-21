import { NextRequest, NextResponse } from "next/server";
import redis, { keys } from "@/lib/redis";

// Smallest valid transparent GIF (26 bytes)
const PIXEL = Buffer.from(
  "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  "base64"
);

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  if (token) {
    try {
      const exists = await redis.exists(keys.token(token));

      if (exists) {
        const event = {
          openedAt: new Date().toISOString(),
          ip: req.headers.get("x-forwarded-for") ?? req.headers.get("x-real-ip") ?? "unknown",
          userAgent: req.headers.get("user-agent") ?? "unknown",
          // Add any other fields you want to capture here
        };

        // Prepend to list so newest events come first
        await redis.lpush(keys.events(token), JSON.stringify(event));

        // Increment open counter on the token hash
        await redis.hincrby(keys.token(token), "opens", 1);
      }
    } catch (err) {
      // Silently fail — never break email delivery over tracking
      console.error("[/api/email/track]", err);
    }
  }

  // Always return the pixel regardless of what happened above
  return new NextResponse(PIXEL, {
    status: 200,
    headers: {
      "Content-Type": "image/gif",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
}