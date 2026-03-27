import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";
import { getSettings } from "@/action/setting";
import { applyForcedRobots, seoToMetadata } from "./components/seoToMetadata";
import Script from "next/script";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

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
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://jagritnokwal.com/#person",
    name: "Jagrit Nokwal",
    url: "https://jagritnokwal.com",
    image: "https://jagritnokwal.com/profile.jpg",
    jobTitle: "Software Engineer",
    sameAs: [
      "https://github.com/YOUR_USERNAME",
      "https://linkedin.com/in/YOUR_USERNAME",
      "https://twitter.com/YOUR_USERNAME",
    ],
    knowsAbout: [
      "Flutter",
      "Golang",
      "AWS",
      "Docker",
      "React",
      "Next.js",
      "JavaScript",
      "System Design",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://jagritnokwal.com/#website",
    url: "https://jagritnokwal.com",
    name: "Jagrit Nokwal Portfolio",
    publisher: {
      "@id": "https://jagritnokwal.com/#person",
    },
  };
  return (
    <html lang="en">
      <head>
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body
        className={`bg-black ${inter.variable} ${calSans.variable} ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined} antialiased font-inter`}
      >
        {children}
      </body>
    </html>
  );
}
