import { getSettings } from "@/action/setting";
import { applyForcedRobots, seoToMetadata } from "../components/seoToMetadata";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
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
    ...seoToMetadata(settings?.seo),
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