import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import ServiceTimeline from "@/components/sections/ServiceTimeline";
import CTABanner from "@/components/sections/CTABanner";
import Ourlatestwork from "@/components/sections/Ourlatestwork"

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
  },
  twitter: {
    title: `${title} | Kommon Canvas`,
    description,
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-1 flex-col bg-black font-sans">
      <PageHero
        titleWhite=""
        title={
          <>
            <span className="text-white">We Turn </span>
            <span className="text-red-600">Great Design</span>
            <span className="text-white"> Into</span>
            <br />
            <span className="text-white">Unforgettable Brand Experiences</span>
          </>
        }
      />

      {/* Full-width banner photo */}
      <div className="relative aspect-[21/9] w-full overflow-hidden sm:aspect-[3/1]">
        <Image
          src="https://aditechinfo.com/kommoncanvas/projects/services-header.png"
          alt="Kommon Canvas packaging design in the wild"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
      </div>

      {/* Services intro */}
      <section className="bg-black px-4 pb-5 pt-10 sm:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
            Our Services
          </h2>
          <div className="mt-4 flex h-1 w-24 overflow-hidden rounded-full">
            <span className="w-1/2 bg-[#ff0000]" />
            <span className="w-1/2 bg-white" />
          </div>
          <p className="mt-8 text-xl  leading-relaxed text-neutral-300 sm:text-2xl">
            Strategy, design &amp; creativity that make<br /> your brand stand
            apart
          </p>
        </div>
      </section>
      <ServiceTimeline />
      <Ourlatestwork/>
      <CTABanner />
    </div>
  );
}
