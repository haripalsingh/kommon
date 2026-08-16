"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Service = {
  step: string;
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    step: "01",
    title: "Brand Strategy",
    description:
      "We uncover your brand's purpose, positioning, and audience, then turn that clarity into a roadmap the rest of the design builds on.",
    image: "/projects/pro-img05.png",
  },
  {
    step: "02",
    title: "Brand Identity",
    description:
      "We build distinctive brand identities that bring your vision to life through strategy, design, and a consistent visual language.",
    image: "/projects/pro-img10.png",
  },
  {
    step: "03",
    title: "Packaging Design",
    description:
      "We create packaging that catches attention, communicates value, and turns every product into a memorable brand experience.",
    image: "/projects/pro-img11.png",
  },
  {
    step: "04",
    title: "Digital Experience",
    description:
      "We design scroll-stopping digital content that keeps your brand consistent, engaging, and visually relevant across every platform.",
    image: "/projects/pro-img08.png",
  },
];

const ServiceTimeline = () => {
  const [active, setActive] = useState(0);
  const [indicator, setIndicator] = useState({ top: 0, height: 0 });
  const listContainerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Slide the red indicator to sit alongside whichever item is active,
  // measuring real DOM heights so it works regardless of description length.
  useLayoutEffect(() => {
    const measure = () => {
      const btn = itemRefs.current[active];
      if (btn) {
        setIndicator({ top: btn.offsetTop, height: btn.offsetHeight });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  // Scrollspy: the numbered list scrolls inside its own box (see the
  // .services-scroll thin red scrollbar), and whichever item sits in a
  // band near the top of that box becomes active — same idea as the
  // reference layout, driven by scrolling the list rather than hover.
  useEffect(() => {
    const container = listContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = itemRefs.current.findIndex((el) => el === entry.target);
          if (index !== -1) setActive(index);
        });
      },
      {
        root: container,
        rootMargin: "-10% 0px -70% 0px",
        threshold: 0,
      }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const activeService = services[active];

  return (
    <section className="bg-black px-4 py-20 sm:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Numbered list — scrolls inside its own box; the item near the
            top drives the red track + the preview on the right. */}
        <div
          ref={listContainerRef}
          className="services-scroll h-[480px] overflow-y-auto pr-4 sm:h-[560px]"
        >
          <div className="flex gap-6 sm:gap-8">
            <div className="relative w-1 shrink-0 rounded-full bg-white/15">
              <span
                className="absolute inset-x-0 rounded-full bg-red-600 transition-[top,height] duration-500 ease-out"
                style={{ top: indicator.top, height: indicator.height }}
              />
            </div>

            <div className="flex flex-1 flex-col gap-10 sm:gap-12">
              {services.map((service, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={service.title}
                    ref={(el) => {
                      itemRefs.current[i] = el;
                    }}
                    type="button"
                    onClick={() => {
                      setActive(i);
                      itemRefs.current[i]?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    className="flex flex-col items-start rounded-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                  >
                    <span
                      className={`text-3xl font-black transition-colors duration-300 sm:text-4xl ${
                        isActive ? "text-red-600" : "text-white/35"
                      }`}
                    >
                      {service.step}
                    </span>
                    <h3
                      className={`mt-1 text-xl font-bold transition-colors duration-300 sm:text-2xl ${
                        isActive ? "text-white" : "text-white/60"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`mt-2 max-w-md text-sm leading-relaxed transition-colors duration-300 sm:text-base ${
                        isActive ? "text-neutral-300" : "text-neutral-500"
                      }`}
                    >
                      {service.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom buffer so the last item can still scroll up into the
              active band near the top of the box. */}
          <div aria-hidden className="h-32" />
        </div>

        {/* Sticky preview panel */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="block text-5xl font-black leading-none text-red-600 sm:text-6xl">
            {activeService.step}
          </span>
          <h3 className="mt-2 text-3xl font-extrabold uppercase tracking-tight text-red-600 sm:text-4xl">
            {activeService.title}
          </h3>

          <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-neutral-800">
            {services.map((service, i) => (
              <Image
                key={service.title}
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className={`object-cover transition-opacity duration-500 ease-out ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTimeline;
