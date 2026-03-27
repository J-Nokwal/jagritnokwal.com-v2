"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
function getVisitorId() {
  let id = localStorage.getItem("visitorId");
  if (!id) {
    id = crypto.randomUUID().substring(0, 6).toUpperCase(); // create a new one
    localStorage.setItem("visitorId", id);
  }
  return id;
}

export default function Analytics() {
  useEffect(() => {
    if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_CLARITY_ID) {
      Clarity.init(process.env.NEXT_PUBLIC_CLARITY_ID);
      const visitorId = getVisitorId();
      Clarity.identify(visitorId); // use your own stable visitor id
    }
  }, []);

  return (
    <>
      <SpeedInsights />
      <VercelAnalytics />
    </>
  );
}
