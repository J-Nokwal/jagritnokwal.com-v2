import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();
export default redis;

// ── Key helpers (one place to change if schema evolves) ──
export const keys = {
  token: (token: string) => `emailTracker:token:${token}`,
  events: (token: string) => `emailTracker:events:${token}`,
};
