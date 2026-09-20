import type { Metadata } from "next";

// app/services/page.tsx is a client component ("use client"), so it cannot export
// metadata itself. Without this layout the page had no title/description of its
// own and inherited the homepage canonical ("/").
const title = "Services";
const description =
  "Brand strategy, brand identity, packaging design, and digital experience services from Kommon Canvas.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    title: `${title} | Kommon Canvas`,
    description,
    url: "/services",
    images: [{ url: "/projects/tea.webp", alt: "Kommon Canvas packaging design" }],
  },
  twitter: {
    title: `${title} | Kommon Canvas`,
    description,
    images: ["/projects/tea.webp"],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
