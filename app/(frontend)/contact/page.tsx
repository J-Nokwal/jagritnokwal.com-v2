import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../../components/nav";
import { Card } from "../../components/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Jagrit Nokwal for freelance work, collaborations, or project inquiries.",
  openGraph: {
    title: "Contact | Jagrit Nokwal",
    description:
      "Get in touch with Jagrit Nokwal for freelance work, collaborations, or project inquiries.",
    url: "https://www.jagritnokwal.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Jagrit Nokwal",
    description:
      "Get in touch with Jagrit Nokwal for freelance work, collaborations, or project inquiries.",
  },
  alternates: {
    canonical: "https://www.jagritnokwal.com/contact",
  },
};

const socials = [
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/jagrit-nokwal",
    label: "LinkedIn",
    handle: "jagrit-nokwal",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:jagritnokwal9@gmail.com",
    label: "Email",
    handle: "jagritnokwal9@gmail.com",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/J-Nokwal",
    label: "Github",
    handle: "J-Nokwal",
  },
];

export default async function Page() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://jagritnokwal.com/contact#contact",
    url: "https://jagritnokwal.com/contact",
    name: "Contact Jagrit Nokwal",
    description:
      "Get in touch with Jagrit Nokwal for freelance work, collaborations, or project inquiries.",
    about: {
      "@id": "https://jagritnokwal.com/#person",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://jagritnokwal.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: "https://jagritnokwal.com/contact",
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <main className="bg-linear-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
        <Navigation />
        <div className="flex justify-center items-center mx-auto px-4 min-h-screen container">
          <div className="gap-8 lg:gap-16 grid grid-cols-1 sm:grid-cols-3 mx-auto mt-32 sm:mt-0 w-full">
            {socials.map((s) => (
              <Card key={s.href}>
                <Link
                  href={s.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="group relative flex flex-col items-center gap-4 md:gap-8 p-4 md:p-16 md:py-24 lg:pb-48 duration-700"
                >
                  <span
                    className="absolute bg-linear-to-b from-zinc-500 via-zinc-500/50 to-transparent w-px h-2/3"
                    aria-hidden="true"
                  />
                  <span className="z-10 relative flex justify-center items-center bg-zinc-900 group-hover:bg-zinc-900 drop-shadow-orange border border-zinc-500 group-hover:border-zinc-200 rounded-full w-12 h-12 text-zinc-200 group-hover:text-white text-sm duration-1000">
                    {s.icon}
                  </span>{" "}
                  <div className="z-10 flex flex-col items-center">
                    <span className="font-display font-medium text-zinc-200 group-hover:text-white lg:text-xl xl:text-3xl duration-150">
                      {s.handle}
                    </span>
                    <span className="mt-4 text-zinc-400 group-hover:text-zinc-200 text-sm text-center duration-1000">
                      {s.label}
                    </span>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
