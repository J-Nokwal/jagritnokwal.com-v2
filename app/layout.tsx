import type { Metadata } from "next";
import {  Inter } from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import Analytics from "./components/Analytics";

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
      "https://github.com/J-Nokwal",
      "https://linkedin.com/in/jagrit-nokwal",
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
        <Analytics />
        {children}
      </body>
    </html>
  );
}
