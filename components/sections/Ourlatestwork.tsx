"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { projects } from "@/lib/projects";

// "Our Work" teaser for the services page — heading + "View More Projects"
// link on top, a horizontally scrollable, auto-advancing row of project
// cards below. Shows all projects, looping left to right every 2s.
const featured = projects;

const Ourlatestwork = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const id = setInterval(() => {
      if (pausedRef.current) return;

      const card = scroller.firstElementChild as HTMLElement | null;
      if (!card) return;

      const gap = parseFloat(window.getComputedStyle(scroller).columnGap || "0");
      const step = card.getBoundingClientRect().width + gap;
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;
      const atEnd = scroller.scrollLeft >= maxScroll - 1;

      scroller.scrollTo({
        left: atEnd ? 0 : scroller.scrollLeft + step,
        behavior: "smooth",
      });
    }, 2000);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="overflow-hidden bg-black ">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Heading row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-6xl">
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
      </div>

      {/* Full-bleed, edge-to-edge horizontally scrolling row of project cards.
          Auto-advances one card every 2s, loops back to the start at the end,
          and pauses while the user's pointer is over it. */}
      <div
        ref={scrollerRef}
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
        onTouchStart={() => (pausedRef.current = true)}
        onTouchEnd={() => (pausedRef.current = false)}
        className="mt-10 flex w-full snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-8 sm:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {featured.map((project) => (
          <div
            key={project.slug}
            className="group relative aspect-square w-64 shrink-0 snap-start overflow-hidden rounded-3xl bg-neutral-900 sm:w-72"
          >
            <Image
              src={project.imagess}
             // alt={project.name}
              fill
              sizes="(min-width: 640px) 288px, 256px"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-xs font-semibold uppercase tracking-wide text-red-500">
                {project.category}
              </p>
              <p className="mt-1 text-lg font-bold text-white">{project.name}</p>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ourlatestwork;
