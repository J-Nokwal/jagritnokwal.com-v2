import { getClient } from "@/sanity/lib/client";
import { settingsQuery } from "@/sanity/lib/queries";
import { SettingsQueryResult } from "@/sanity/types";
import { cacheTag } from "next/cache";

export async function getSettings(): Promise<SettingsQueryResult> {
  "use cache";
  cacheTag("settings");
  const client = getClient();
  return client.fetch(settingsQuery);
}