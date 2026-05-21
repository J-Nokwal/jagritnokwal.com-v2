import { NextResponse } from "next/server";
import redis, { keys } from "@/lib/redis";

export async function GET() {
  try {
    // Cryptographically random token — no extra package needed
    const token = crypto.randomUUID();

    // Store token metadata as a Redis hash
    await redis.hset(keys.token(token), {
      createdAt: new Date().toISOString(),
      opens: 0,
    });

    // Optional TTL: expire token after 90 days (remove if you want forever)
    await redis.expire(keys.token(token), 60 * 60 * 24 * 90);

    return NextResponse.json({ token });
  } catch (err) {
    console.error("[/api/email/token]", err);
    return NextResponse.json(
      { error: "Failed to generate token" },
      { status: 500 }
    );
  }
}