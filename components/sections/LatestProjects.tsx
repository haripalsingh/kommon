import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import Container from "@/components/layout/Container";

const featuredSlugs = ["tmug", "golki", "clump-maxx", "kam-fool"];
const featured = featuredSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is NonNullable<typeof project> => Boolean(project));

// Project Card Component with Hover Arrow Effect
function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-neutral-900">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
          
        />
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
      </div>
      <p className="mt-4 text-xl font-bold text-white sm:text-2xl">{project.name}</p>
      <p className="mt-1 text-sm text-neutral-400 sm:text-base">{project.summary}</p>
    </Link>
  );
}

export default function LatestProjects() {
  return (
    <section className="bg-black pb-10 md:pb-16">
      <Container>
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-white sm:text-5xl">
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
            <ProjectCard key={project.slug} project={project} />
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
      </Container>
    </section>
  );
}