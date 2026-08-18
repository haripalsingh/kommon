import Image from "next/image";
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

      {/* Infinite scrolling row of product images — full-bleed, plain sliding, no edge fade */}
      <div className="relative mt-14 w-full overflow-hidden">
        <div className="flex w-max animate-[marquee_50s_linear_infinite] items-stretch gap-6 sm:gap-8">
          {loopProjects.map((project, i) => (
            <div
              key={`${project.slug}-${i}`}
              className="relative aspect-[4/3] w-64 shrink-0 overflow-hidden rounded-2xl bg-neutral-900 sm:w-80"
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(min-width: 640px) 320px, 256px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}