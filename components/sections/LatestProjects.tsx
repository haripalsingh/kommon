import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

// "Our Work" homepage teaser — a fixed 2x2 grid of featured project shots
// (matching the "Latest Projects" layout), linking through to the full
// /work page. "View More Projects" sits centered below the grid.
const featuredSlugs = ["tmug", "sugar-whisk", "gola-gully", "golki"];
const featured = featuredSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is NonNullable<typeof project> => Boolean(project));

export default function LatestProjects() {
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold uppercase tracking-tight text-white sm:text-6xl">
           Latest Projects
          </h2>
           <div className="mt-4 flex h-1 w-24 overflow-hidden rounded-full mx-auto">
            <span className="w-1/2 bg-[#ff0000]" />
            <span className="w-1/2 bg-white" />
          </div>
        </div>

        {/* Fixed 2x2 grid of featured projects */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {featured.map((project) => (
            <Link key={project.slug} href={`/work/${project.slug}`} className="group block">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-900">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-xl font-bold text-white sm:text-2xl">{project.name}</p>
              <p className="mt-1 text-sm text-neutral-400 sm:text-base">{project.summary}</p>
            </Link>
          ))}
        </div>

        {/* View More Projects — centered below the grid */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-red-600 sm:text-base"
          >
            View All Projects
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
      </div>
    </section>
  );
}
