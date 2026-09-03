"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/layout/Container";

// Real tool icons from public/logos, rather than hand-drawn letter badges —
// keeps this list in sync with whatever's actually dropped in that folder.
const tools = [
  { label: "Photoshop", src: "https://aditechinfo.com/kommoncanvas/logos/ps.png" },
  { label: "Illustrator", src: "https://aditechinfo.com/kommoncanvas/logos/ai.png" },
  { label: "CorelDRAW", src: "https://aditechinfo.com/kommoncanvas/logos/cdr.png" },
  { label: "XD", src: "https://aditechinfo.com/kommoncanvas/logos/xd.png" },
  { label: "InDesign", src: "https://aditechinfo.com/kommoncanvas/logos/id.png" },
  { label: "Figma", src: "https://aditechinfo.com/kommoncanvas/logos/figma.png" },
];

type Service = {
  title: string;
  description: string;
  variant: "dark" | "red" | "outline";
  tags: string[];
};

const services: Service[] = [
  {
    title: "Brand Strategy",
    description:
      "A clear strategic foundation that defines your brand's purpose, positioning, audience, and direction.",
    variant: "dark",
    tags: [
      "Brand Purpose",
      "Target Audience",
      "Business Goals",
      "Brand Positioning",
      "Market Research",
      "Visual Direction",
    ],
  },
  {
    title: "Brand Identity",
    description:
      "A distinctive visual identity that gives your brand a consistent, recognizable, and memorable presence.",
    variant: "red",
    tags: [
      "Logo Design",
      "Typography",
      "Color System",
      "Brand Guidelines",
      "Visual Language",
      "Brand Assets",
    ],
  },
  {
    title: "Packaging Design",
    description:
      "Packaging that combines creativity, functionality, and brand storytelling to make your product stand out.",
    variant: "outline",
    tags: [
      "Packaging Concept",
      "Dieline Design",
      "Label Design",
      "Print Design",
      "Material Selection",
      "3D Mockups",
    ],
  },
  {
    title: "Digital Experience",
    description:
      "Digital experiences designed to connect with your audience through intuitive, engaging, and impactful design.",
    variant: "dark",
    tags: [
      "UI/UX Design",
      "Web Design",
      "Social Media",
      "Digital Campaigns",
      "User Experience",
      "Motion Design",
    ],
  },
];

// Fixed resting rotation per card — cards land in nearly the same spot, so
// the alternating tilt is what makes the card behind peek out at the edges.
const restRotation = [-4, 5, -5, 6];
// Extra rotation added while a card is still travelling in, on top of its
// resting angle, for a "dealt from the deck" settle.
const entryRotation = [0, -16, 16, -16];

// Scroll distance (px) devoted to the 3 card transitions while pinned.
const SCROLL_BUFFER_PX = 2200;

// Below this breakpoint (tablet/mobile) the pinned scroll-jack animation is
// disabled entirely and cards render as a normal static stack instead.
const DESKTOP_BREAKPOINT = "(min-width: 1024px)";

function variantClasses(variant: Service["variant"]) {
  return variant === "red"
    ? "border-red-400/30 bg-[#ff0000]"
    : variant === "outline"
      ? "border-red-500/70 bg-neutral-900"
      : "border-white/10 bg-neutral-800/90";
}

export default function WhatWeHelp() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [wrapperHeight, setWrapperHeight] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Track viewport: only run the pinned scroll animation on desktop/lg+.
  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_BREAKPOINT);
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  // Size the wrapper to exactly (sticky content height + scroll buffer), so
  // the sticky element — which is only as tall as its own content, not a
  // full viewport — has no leftover height to drag across the screen once
  // it un-pins. Desktop only.
  useEffect(() => {
    if (!isDesktop) return;

    const measure = () => {
      if (stickyRef.current) {
        setWrapperHeight(stickyRef.current.offsetHeight + SCROLL_BUFFER_PX);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [isDesktop]);

  // Scroll-linked progress: the section pins (sticky) while the cards slide
  // in one by one; once the last card settles, the pin releases and normal
  // page scrolling continues immediately — the "fixed end" of the interaction.
  // Desktop only.
  useEffect(() => {
    if (!isDesktop) return;

    let ticking = false;

    const compute = () => {
      const el = wrapperRef.current;
      const sticky = stickyRef.current;
      if (el && sticky) {
        const rect = el.getBoundingClientRect();
        const scrollable = Math.max(rect.height - sticky.offsetHeight, 1);
        const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
        setProgress(scrolled / scrollable);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(compute);
      }
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isDesktop]);

  // Card 0 is settled from the start; cards 1..n-1 slide in across the
  // remaining scroll distance, each getting an equal slice of it.
  const animatedCount = services.length - 1;
  const slice = 1 / animatedCount;

  return (
    <section
      ref={wrapperRef}
      className="relative bg-black"
      style={
        isDesktop
          ? { height: wrapperHeight ? `${wrapperHeight}px` : "100vh" }
          : undefined
      }
    >
      <div
        ref={stickyRef}
        className={`flex items-center py-5 sm:py-24 ${
          isDesktop ? "sticky top-20" : ""
        }`}
      >
        <Container className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left column */}
          <div>
            <h2 className="text-5xl  leading-[0.95] tracking-tight sm:text-6xl text-center md:text-left">
              <span className="block text-white">What We Help</span>
              <span className="block font-extrabold text-red-600">You Shape&hellip;</span>
            </h2>

            <p className="mt-12 text-neutral-400 text-center md:text-left">
              Tools that we use
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3 md:justify-start text-center md:text-left">
              {tools.map((tool) => (
                <div
                  key={tool.label}
                  className="flex md:h-16 h-10 md:w-16 w-10 shrink-0 items-center justify-center rounded-2xl border-2 border-white/60 bg-white/5"
                >
                  <Image
                    src={tool.src}
                    alt={tool.label}
                    width={40}
                    height={40}
                    className="md:h-8 h-5 w-5 md:w-8 object-contain"
                    loading="lazy"
  decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          {isDesktop ? (
            // Desktop: scroll-driven card-swap stack
            <div className="relative mx-auto h-[560px] w-full max-w-xl sm:h-[100px]">
              {services.map((service, i) => {
                const local =
                  i === 0
                    ? 1
                    : Math.min(Math.max((progress - (i - 1) * slice) / slice, 0), 1);
                // Ease so the settle feels like it decelerates into place.
                const eased = 1 - Math.pow(1 - local, 3);
                const translateY = (1 - eased) * 480;
                const rotate =
                  restRotation[i] + entryRotation[i] * (1 - eased);
                const opacity = i === 0 ? 1 : Math.min(local * 2, 1);

                return (
                  <div
                    key={service.title}
                    className={`absolute inset-x-0 top-0 rounded-[2rem] border p-8 shadow-2xl backdrop-blur sm:p-10 ${variantClasses(service.variant)}`}
                    style={{
                      zIndex: i,
                      opacity,
                      transform: `translateY(${translateY}px) rotate(${rotate}deg)`,
                      transition: "opacity 0.15s linear",
                    }}
                  >
                    <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
                      {service.title}
                    </h3>
                    <p
                      className={`mt-4 leading-relaxed ${
                        service.variant === "red" ? "text-red-50" : "text-neutral-300"
                      }`}
                    >
                      {service.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3 border-t border-white/30 pt-6">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/40 px-4 py-2 text-xs  md:text-sm font-semibold text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            // Mobile/Tablet: normal static stacked cards, no scroll-jacking
            <div className="flex flex-col gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className={`rounded-[2rem] border p-8 shadow-2xl backdrop-blur sm:p-10 ${variantClasses(service.variant)}`}
                >
                  <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
                    {service.title}
                  </h3>
                  <p
                    className={`mt-4 leading-relaxed ${
                      service.variant === "red" ? "text-red-50" : "text-neutral-300"
                    }`}
                  >
                    {service.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3 border-t border-white/30 pt-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/40 px-2 py-2 text-xs  md:text-sm  font-semibold text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </div>
    </section>
  );
}