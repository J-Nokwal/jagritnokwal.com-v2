"use server";

export async function triggerDeploy(): Promise<{ ok: boolean; error?: string }> {
  const hookUrl = process.env.VERCEL_DEPLOY_HOOK_URL;

  if (!hookUrl) {
    return { ok: false, error: "Deploy hook is not configured on the server." };
  }

  const res = await fetch(hookUrl, { method: "POST" });

  if (!res.ok) {
    return { ok: false, error: `Hook responded with status ${res.status}.` };
  }

  return { ok: true };
}
