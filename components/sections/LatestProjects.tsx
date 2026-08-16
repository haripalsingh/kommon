import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug } from "@/lib/projects";

const featuredSlugs = ["millet-matters", "wild-orchard", "swap", "gola-galore"];
const projects = featuredSlugs
  .map((slug) => getProjectBySlug(slug))
  .filter((project): project is NonNullable<typeof project> => Boolean(project));

export default function LatestProjects() {
  return (
    <section className="bg-black px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold uppercase tracking-tight sm:text-6xl">
            <span className="text-red-600">Latest</span>{" "}
            <span className="text-white">Projects</span>
          </h2>
          <div className="mt-4 flex h-1 w-24 overflow-hidden rounded-full">
            <span className="w-1/2 bg-red-600" />
            <span className="w-1/2 bg-white" />
          </div>
        </div>

        {/* Grid of 4 projects — image on top, caption always visible below */}
        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group flex flex-col gap-5"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-900">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-5 right-5 flex h-11 w-11 shrink-0 -translate-y-1 items-center justify-center rounded-full bg-red-600 text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
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

              {/* Caption — always visible, shown after (below) the image */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-red-600">
                  {project.category}
                </p>
                <p className="mt-1 text-xl font-bold text-white transition-colors group-hover:text-neutral-200 sm:text-2xl">
                  {project.name}
                </p>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-400">
                  {project.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View all projects */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-base text-neutral-300 transition-colors hover:text-white sm:text-lg"
          >
            View All My Projects
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
          </Link>
        </div>
      </div>
    </section>
  );
}
