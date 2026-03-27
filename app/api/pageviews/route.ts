import {
  getMultipleProjectPageviews,
  updateProjectPageviews,
} from "../../../action/project";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const secret = req.headers.get("x-admin-secret");

    const origin = req.headers.get("origin");

    if (!origin?.includes("jagritnokwal.com") && process.env.NODE_ENV != "development") {
      return new Response("Unauthorized", { status: 401 ,headers: {
        "Content-Type": "application/json",
        "reason": "Invalid origin",
      },});
    }
    if (!secret || secret !== process.env.NEXT_PUBLIC_ADMIN_SECRET) {
      return new Response("Unauthorized", { status: 401 ,headers: {
        "Content-Type": "application/json",
        "reason": "Invalid secret",
      }},);
    }
    // Batch fetch
    if (body.type === "getMany") {
      const data = await getMultipleProjectPageviews(body.slugs);
      return Response.json({ data });
    }

    // Update
    if (body.type === "update") {
      await updateProjectPageviews(body.slug, body.views);
      return Response.json({ success: true });
    }

    return Response.json({ error: "Invalid request type" }, { status: 400 });
  } catch (e) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
