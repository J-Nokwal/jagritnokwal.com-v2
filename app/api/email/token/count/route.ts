import { NextRequest, NextResponse } from "next/server";
import redis, { keys } from "@/lib/redis";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.json(
      { error: "token query param is required" },
      { status: 400 }
    );
  }

  try {
    // Check token exists
    const exists = await redis.exists(keys.token(token));
    if (!exists) {
      return NextResponse.json({ error: "Token not found" }, { status: 404 });
    }

    // Fetch all open events (Redis list, newest first)
    const events = await redis.lrange(keys.events(token), 0, -1);

    return NextResponse.json(events); // bare array — matches what Apps Script expects
  } catch (err) {
    console.error("[/api/email/token/count]", err);
    return NextResponse.json(
      { error: "Failed to fetch count data" },
      { status: 500 }
    );
  }
}