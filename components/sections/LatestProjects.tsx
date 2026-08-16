import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

// "Our Work" homepage teaser — a full-bleed, finite (non-looping) horizontal
// scroll of real project shots, linking through to the full /work page.
const featuredSlugs = [
  "millet-matters",
  "wild-orchard",
  "one-tree",
  "swap",
  "vaaradhi-farms",
  "gola-galore",
  "loam",
];
const featured = featuredSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is NonNullable<typeof project> => Boolean(project));

export default function LatestProjects() {
  return (
    <section className="bg-black py-16 sm:py-20">
      {/* Heading + "view more" link stay inside the normal content width */}
      <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-4 px-4 sm:px-8">
        <div>
          <h2 className="text-4xl font-bold uppercase tracking-tight text-white sm:text-6xl">
            Our Work
          </h2>
        </div>
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-red-600 sm:text-base"
        >
          View More Projects
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Full-width, edge-to-edge scroll strip — finite (no looping, unlike
          the marquee in ProductScroll), drag/swipe from left to right. */}
      <div className="mt-12 w-full overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max snap-x snap-mandatory gap-4 px-4 sm:gap-6 sm:px-8">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group relative aspect-[3/4] w-44 shrink-0 snap-start overflow-hidden rounded-2xl bg-neutral-900 sm:w-64 lg:w-80"
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 256px, 176px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-300">
                  {project.category}
                </p>
                <p className="mt-1 text-lg font-bold leading-tight text-white">
                  {project.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
