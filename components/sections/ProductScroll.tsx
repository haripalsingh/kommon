import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

// Duplicate the list so the marquee loop (translateX 0 -> -50%) is seamless.
const loopProjects = [...projects, ...projects];

export default function ProductScroll() {
  return (
    <section className="overflow-hidden bg-black pt-0 pb-16 sm:pb-20">
      {/* <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold uppercase tracking-tight sm:text-6xl">
            <span className="text-white">Our</span>{" "}
            <span className="text-red-600">Products</span>
          </h2>
          <div className="mt-4 flex h-1 w-24 overflow-hidden rounded-full">
            <span className="w-1/2 bg-[#ff0000]" />
            <span className="w-1/2 bg-white" />
          </div>
        </div>
      </div> */}

      {/* Infinite scrolling row of product images — full-bleed, fades at the edges */}
      <div className="relative mt-14 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex w-max animate-[marquee_50s_linear_infinite] items-stretch gap-6 hover:[animation-play-state:paused] sm:gap-8">
          {loopProjects.map((project, i) => (
            <Link
              key={`${project.slug}-${i}`}
              href={`/work/${project.slug}`}
              className="group relative aspect-[4/3] w-64 shrink-0 overflow-hidden rounded-2xl bg-neutral-900 sm:w-80"
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(min-width: 640px) 320px, 256px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-300">
                  {project.category}
                </p>
                <p className="mt-1 text-lg font-bold text-white">
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
