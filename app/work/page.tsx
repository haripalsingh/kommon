import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { projects } from "@/lib/projects";

const title = "Our Work";
const description =
  "Browse packaging, brand identity, and digital design projects by Kommon Canvas.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work" },
  openGraph: {
    title: `${title} | Kommon Canvas`,
    description,
    url: "/work",
  },
  twitter: {
    title: `${title} | Kommon Canvas`,
    description,
  },
};

export default function WorkPage() {
  return (
    <div className="flex flex-1 flex-col bg-black font-sans">
      <PageHero
        eyebrow="Our Work"
        titleWhite="Selected"
        titleRed="Projects."
        description="A look at the brands, packaging systems, and digital experiences we've helped bring from concept to shelf."
      />

      <section className="bg-black px-4 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-900"
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-3 items-end justify-between gap-3 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-neutral-300">
                    {project.category}
                  </p>
                  <p className="mt-1 text-xl font-bold text-white">
                    {project.name}
                  </p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
