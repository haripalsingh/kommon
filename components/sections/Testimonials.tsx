"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Exceptional creativity and flawless execution! They delivered a complete packaging design system across our entire product range, ahead of schedule.",
    name: "Priya Verma",
    role: "Product Lead, Innovate Labs",
  },
  {
    quote:
      "Highly professional service! The new packaging design and brand positioning completely refreshed how customers see us on the shelf.",
    name: "Karan Patel",
    role: "CEO, Nexa Packaging",
  },
  {
    quote:
      "The team understood our product from day one and designed packaging that truly stands out on the shelf. Every detail, from the die-line to the finish, was thoughtfully crafted.",
    name: "Arjun Mehta",
    role: "Founder, Pixel Foods",
  },
  {
    quote:
      "Working with Kommon Canvas was effortless from the first call to the final print run. Our packaging finally looks as good as our product tastes.",
    name: "Rhea Kapoor",
    role: "Co-founder, Wild Orchard",
  },
  {
    quote:
      "They took a vague brief and turned it into a brand identity that actually feels like us. Communication and turnaround were spot on throughout.",
    name: "Aditya Rao",
    role: "Marketing Head, Vamshi Farms",
  },
  {
    quote:
      "From concept to shelf, every round of feedback was handled quickly and thoughtfully. Easily the smoothest packaging project we've run.",
    name: "Simran Kaur",
    role: "Brand Manager, Swap Beverages",
  },
];

function useItemsPerView() {
  const [items, setItems] = useState(3);

  useEffect(() => {
    const narrow = window.matchMedia("(max-width: 639px)");
    const medium = window.matchMedia("(min-width: 640px) and (max-width: 1023px)");

    const update = () => setItems(narrow.matches ? 1 : medium.matches ? 2 : 3);
    update();

    narrow.addEventListener("change", update);
    medium.addEventListener("change", update);
    return () => {
      narrow.removeEventListener("change", update);
      medium.removeEventListener("change", update);
    };
  }, []);

  return items;
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
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
      {direction === "left" ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
    </svg>
  );
}

export default function Testimonials() {
  const itemsPerView = useItemsPerView();
  const maxIndex = Math.max(testimonials.length - itemsPerView, 0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const goPrev = () => setIndex((i) => Math.max(i - 1, 0));
  const goNext = () => setIndex((i) => Math.min(i + 1, maxIndex));

  return (
    <section className="bg-black py-20 px-4 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold uppercase tracking-tight sm:text-6xl">
            <span className="text-red-600">Voices of</span>{" "}
            <span className="text-white">Our Clients</span>
          </h2>
          <div className="mt-4 flex h-1 w-24 overflow-hidden rounded-full">
            <span className="w-1/2 bg-red-600" />
            <span className="w-1/2 bg-white" />
          </div>
        </div>

        {/* Slider: 3 cards visible, sliding left/right */}
        <div className="mt-14 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * (100 / itemsPerView)}%)` }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="shrink-0 px-3"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-neutral-800/90 p-8">
                  <div>
                    <span className="text-5xl font-serif leading-none text-neutral-500">
                      &ldquo;
                    </span>
                    <p className="mt-4 text-lg leading-relaxed text-neutral-200">
                      {t.quote}
                    </p>
                    <span className="mt-2 block text-right font-serif text-5xl leading-none text-neutral-500">
                      &rdquo;
                    </span>
                  </div>

                  <div className="mt-8">
                    <p className="font-bold text-white">
                      <span className="mr-2 text-neutral-400">&mdash;</span>
                      {t.name}
                    </p>
                    <p className="mt-1 text-sm text-neutral-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={goPrev}
            disabled={index === 0}
            aria-label="Previous testimonials"
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/30 text-white transition-colors hover:border-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/30"
          >
            <ArrowIcon direction="left" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-red-600" : "w-2.5 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            disabled={index === maxIndex}
            aria-label="Next testimonials"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white transition-colors hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-red-600"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
}
