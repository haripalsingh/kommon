import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTABanner from "@/components/sections/CTABanner";
import { projects, getProjectBySlug } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.name} | Kommon Canvas`,
      description: project.summary,
      url: `/work/${project.slug}`,
      images: [{ url: project.image, width: 1200, height: 900, alt: project.name }],
    },
    twitter: {
      title: `${project.name} | Kommon Canvas`,
      description: project.summary,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="flex flex-1 flex-col bg-black font-sans">
      <section className="px-4 pb-10 pt-16 sm:px-8 sm:pt-24">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-neutral-400 transition-colors hover:text-white"
          >
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
              <path d="m15 18-6-6 6-6" />
            </svg>
            All Projects
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            {project.category}
          </p>
          <h1 className="mt-4 text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-7xl">
            {project.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
            {project.summary}
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem]">
          <Image
            src={project.image}
            alt={project.name}
            width={1600}
            height={1200}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </section>

      <section className="bg-black px-4 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <h2 className="text-2xl font-extrabold text-white">
              About the project
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-300">
              {project.description}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-white/10 bg-neutral-800/90 p-6">
              <p className="text-sm text-neutral-400">Client</p>
              <p className="mt-1 text-lg font-bold text-white">
                {project.client}
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-neutral-800/90 p-6">
              <p className="text-sm text-neutral-400">Year</p>
              <p className="mt-1 text-lg font-bold text-white">
                {project.year}
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-neutral-800/90 p-6">
              <p className="text-sm text-neutral-400">Services</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-white/30 px-3 py-1.5 text-xs font-semibold text-white"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="bg-black px-4 pb-4 sm:px-8">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-10">
          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex items-center justify-between gap-4"
          >
            <div>
              <p className="text-sm text-neutral-400">Next project</p>
              <p className="mt-1 text-2xl font-extrabold text-white transition-colors group-hover:text-red-600 sm:text-3xl">
                {nextProject.name}
              </p>
            </div>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-600 text-white transition-transform group-hover:translate-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
