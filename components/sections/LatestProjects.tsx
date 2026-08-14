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

        {/* Grid of 4 projects */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
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
                sizes="(min-width: 640px) 50vw, 100vw"
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
      </div>
    </section>
  );
}
