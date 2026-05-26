import { getSettings } from "@/action/setting";
import { applyForcedRobots, seoToMetadata } from "../components/seoToMetadata";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  const sanityMeta = seoToMetadata(settings?.seo);
  const resolvedTitle =
    typeof sanityMeta.title === "string" ? sanityMeta.title : "Jagrit Nokwal";

  const defaultSeo: Metadata = {
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
        { url: "/icon1.png", sizes: "48x48", type: "image/png" },
        { url: "/icon2.png", sizes: "96x96", type: "image/png" },
      ],
      apple: "/apple-icon.png",
    },
    metadataBase: new URL("https://www.jagritnokwal.com"),
    ...sanityMeta,
    title: {
      default: resolvedTitle,
      template: "%s | Jagrit Nokwal",
    },
  };
  return applyForcedRobots(defaultSeo, settings?.forcedRobots);
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    children
  );
}