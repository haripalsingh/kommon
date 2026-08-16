import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";

const title = "About Us";
const description =
  "Meet Kommon Canvas — a packaging and brand design studio taking ideas from concept to creation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `${title} | Kommon Canvas`,
    description,
    url: "/about",
    images: [{ url: "/our-story.png", width: 1200, height: 940, alt: "Khushi Tyagi, Founder of Kommon Canvas" }],
  },
  twitter: {
    title: `${title} | Kommon Canvas`,
    description,
    images: ["/our-story.png"],
  },
};

const stats = [
  { value: "90+", label: "Happy Clients" },
  { value: "100+", label: "Projects Delivered" },
  { value: "5+", label: "Years of Experience" },
  { value: "10+", label: "Industries Served" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col bg-black font-sans">
      <PageHero
        titleWhite=""
        title={
          <>
            <span className="text-white">From </span>
            <span className="text-red-600">Ideas</span>
            <span className="text-white"> To </span>
            <span className="text-red-600">Identity</span>
            <span className="text-white">, We Make</span>
            <br />
            <span className="text-white">Brands Worth Remembering.</span>
          </>
        }
      />

    
     

      <CTABanner />
    </div>
  );
}
