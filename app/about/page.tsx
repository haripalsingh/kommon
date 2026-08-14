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
        eyebrow="About Us"
        titleWhite="Who We"
        titleRed="Are."
        description="Kommon Canvas is a packaging and brand design studio helping businesses grow through strategic branding, creative design, and visual experiences that people remember."
      />

      {/* Founder */}
      <section className="bg-black px-4 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-[2.5rem]">
            <Image
              src="/our-story.png"
              alt="Khushi Tyagi, Founder of Kommon Canvas"
              width={2048}
              height={1603}
              className="h-full w-full object-cover grayscale"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
              Our Story
            </p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Hi, I&rsquo;m Khushi Tyagi,
              <br />
              Founder of Kommon Canvas.
            </h2>
            <p className="mt-6 leading-relaxed text-neutral-300">
              Kommon Canvas started with a simple belief: great products
              deserve packaging and branding that actually gets noticed on
              the shelf. What began as a small design practice has grown
              into a full-service studio helping founders and growing
              brands turn early-stage ideas into shelf-ready, unforgettable
              visual identities.
            </p>
            <p className="mt-4 leading-relaxed text-neutral-300">
              From strategy to final print files, we work as an extension of
              your team — combining creative instinct with a process built
              for speed, so your brand goes from concept to creation without
              losing momentum.
            </p>
          </div>
        </div>
      </section>
      {/* Stats */}
      <section className="bg-black px-4 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 rounded-[2.5rem] border border-white/10 bg-neutral-800/60 p-10 sm:p-14 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-extrabold text-red-600 sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-neutral-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
