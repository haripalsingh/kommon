import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import Container from "@/components/layout/Container";

// "Our Work" teaser for the services page — heading + "View More Projects"
// link on top, a continuously moving marquee row of project cards below.
// The row glides right-to-left forever via a CSS animation (same
// translateX(0) -> -50% technique as the header ticker, with the card
// list duplicated so the loop is seamless), and pauses on hover.
const featured = projects;

const Ourlatestwork = () => {
  return (
    <section className="overflow-hidden bg-black md:pt-24 pt-10 pb-10">
      <Container>
        {/* Heading row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
            Our Work
          </h2>
          <Link
            href="/work"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-red-600 sm:text-base"
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
      </Container>

      {/* Full-bleed, edge-to-edge marquee of project cards — moves
          continuously right to left and loops seamlessly (two identical
          card groups side by side, animated from translateX(0) to
          -50%, so the second group takes the first's place exactly when
          it scrolls off). Pauses while the pointer is over it. */}
      <div className="group/marquee mt-10 w-full overflow-hidden">
        <div className="flex w-max animate-[marquee_50s_linear_infinite] gap-6 px-4 group-hover/marquee:[animation-play-state:paused] sm:gap-8 sm:px-8">
          {[0, 1].map((dup) => (
            <div
              key={dup}
              className="flex shrink-0 gap-6 sm:gap-8"
              aria-hidden={dup === 1 ? true : undefined}
            >
              {featured.map((project) => (
                <div
                  key={`${dup}-${project.slug}`}
                  className="group relative aspect-square w-64 shrink-0 overflow-hidden rounded-3xl bg-neutral-900 sm:w-72"
                >
                  <Image
                    src={project.imagess}
                    alt={project.name}
                    fill
                    sizes="(min-width: 640px) 288px, 256px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ourlatestwork;
