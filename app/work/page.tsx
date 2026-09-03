import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import Container from "@/components/layout/Container";
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
        titleWhite=""
        title={
          <>
            <span className="text-white">Where </span>
            <span className="text-red-600">Creative Thinking</span>
            <br />
            <span className="text-white">Becomes Brand Power</span>
          </>
        }
      />

      <section className="bg-black md:pb-24 pb-5">
        <Container className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14">
          {projects.map((project) => {
            const isLast = project.comingSoon;

            const cardContent = (
              <>
                <div className="relative aspect-square overflow-hidden rounded-3xl bg-neutral-900">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className={`object-cover transition-transform duration-500 ease-out ${
                      isLast ? "grayscale" : "group-hover:scale-105"
                    }`}
                  />

                  {isLast ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                      <span className="rounded-full border border-white/30 bg-black/60 px-5 py-2 text-sm font-bold uppercase tracking-wider text-white sm:text-base">
                        Coming Soon
                      </span>
                    </div>
                  ) : (
                    <>
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="absolute bottom-5 right-5 flex h-11 w-11 shrink-0 -translate-y-1 items-center justify-center rounded-full bg-[#ff0000] text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
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
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </span>
                    </>
                  )}
                </div>

                {/* Caption — always visible, shown after (below) the image */}
                <div>
                  <p className="mt-1 text-xl font-bold text-white transition-colors group-hover:text-neutral-200 sm:text-2xl">
                    {project.name}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-400">
                    {isLast ? "Coming soon" : project.summary}
                  </p>
                </div>
              </>
            );

            if (isLast) {
              return (
                <div
                  key={project.slug}
                  className="group flex cursor-not-allowed flex-col gap-5"
                  aria-disabled="true"
                >
                  {cardContent}
                </div>
              );
            }

            return (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group flex flex-col gap-5"
              >
                {cardContent}
              </Link>
            );
          })}
        </Container>
      </section>

      <CTABanner />
    </div>
  );
}