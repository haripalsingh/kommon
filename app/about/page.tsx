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


            {/* Full-width banner photo */}
            <div className="relative aspect-[21/9] w-full overflow-hidden sm:aspect-[3/1]">
              <Image
                src="/projects/about-us.png"
                alt="Kommon Canvas packaging design in the wild"
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />
            </div>

      {/* Concept. Clarity. Character. Craft. Creation. */}
      <section className="bg-black px-4 pb-24 pt-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-800/60" />

          <div>
            <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Concept. Clarity.
              <br />
              Character. Craft. Creation.
            </h2>
            <p className="mt-6 leading-relaxed text-neutral-300">
              At Kommon Canvas, we turn ideas into distinctive brand
              experiences through strategy, creativity, and thoughtful
              design. From concept to execution, every detail is crafted
              with purpose — creating identities that feel authentic,
              communicate clearly, and leave a lasting impression.
            </p>
          </div>
        </div>
      </section>

   
  

      <CTABanner />
    </div>
  );
}
