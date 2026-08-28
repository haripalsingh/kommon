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
  const gallery = project.images?.length ? project.images : [project.image];

  return (
    <div className="flex flex-1 flex-col bg-black font-sans">
      {/* Centered hero — name, tagline, accent divider */}
      <section className="flex flex-col items-center px-4 pb-10 pt-14 text-center sm:px-8 sm:pt-20">
        <Link
          href="/work"
          className="mb-8 inline-flex items-center gap-2 self-start text-sm font-semibold uppercase tracking-wide text-neutral-400 transition-colors hover:text-white sm:self-center"
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

        <h1 className="text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl">
          {project.name}
        </h1>
        <p className="mt-4 text-lg text-neutral-300 sm:text-xl">{project.tagline}</p>

        <div className="mt-6 flex h-[3px] w-24 overflow-hidden rounded-full">
          <span className="h-full w-1/2 bg-[#ff0000]" />
          <span className="h-full w-1/2 bg-white/30" />
        </div>
      </section>

      {/* Full image sequence — one after another, full width, no gaps */}
      <section className="bg-black">
        <div className="flex w-full flex-col">
          {gallery.map((src, index) => (
            <div key={src} className="block w-full overflow-hidden bg-neutral-900 leading-none">
              <Image
                src={src}
                alt={`${project.name} — image ${index + 1}`}
                width={1600}
                height={1200}
                sizes="100vw"
                className="block h-auto w-full object-cover"
                style={{ width: "100%" }}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </section>

   

      {/* Next project */}
      <section className="bg-black px-4 pb-4 sm:px-8">
        <div className="mx-auto max-w-5xl border-t border-white/10 pt-10">
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
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ff0000] text-white transition-transform group-hover:translate-x-1">
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
