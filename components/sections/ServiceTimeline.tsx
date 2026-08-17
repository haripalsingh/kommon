"use client";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description:
      "We build distinctive brand identities that bring your vision to life through strategy, design, and a consistent visual language.",
    image: "https://aditechinfo.com/kommoncanvas/projects/brand-identity.png",
  },
  {
    number: "02",
    title: "Packaging Design",
    description:
      "We create packaging that catches attention, communicates value, and turns every product into a memorable brand experience.",
    image: "https://aditechinfo.com/kommoncanvas/projects/packaging-design.png",
  },
  {
    number: "03",
    title: "Creative Partnership",
    description:
      "We design scroll-stopping digital content that keeps your brand consistent, engaging, and visually relevant across every platform.",
    image: "https://aditechinfo.com/kommoncanvas/projects/creative-partnership.png",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const lockedRef = useRef(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const section = sectionRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();

      // Only activate when section is visible
      const sectionVisible =
        rect.top <= window.innerHeight * 0.5 &&
        rect.bottom >= window.innerHeight * 0.5;

      if (!sectionVisible) return;

      // Stop normal page scrolling
      e.preventDefault();

      if (lockedRef.current) return;

      lockedRef.current = true;

      if (e.deltaY > 0) {
        // Scroll down
        setActiveIndex((current) =>
          Math.min(current + 1, services.length - 1)
        );
      } else {
        // Scroll up
        setActiveIndex((current) =>
          Math.max(current - 1, 0)
        );
      }

      // Prevent changing multiple slides from one wheel movement
      setTimeout(() => {
        lockedRef.current = false;
      }, 650);
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const activeService = services[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="flex min-h-screen items-center bg-[#050505] text-white"
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">

          {/* LEFT */}
          <div className="relative">

            {/* Progress bar */}
            <div className="absolute left-0 top-0 h-full w-3 rounded-full bg-[#d9d9d9]">
              <div
                className="w-full rounded-full bg-[#ff0808] transition-all duration-700 ease-out"
                style={{
                  height: `${((activeIndex + 1) / services.length) * 100}%`,
                }}
              />
            </div>

            <div className="space-y-8 pl-12">

              {services.map((service, index) => (
                <div
                  key={service.number}
                  className="min-h-[150px] flex items-center"
                >
                  <div>

                    <div
                      className={`text-5xl font-bold leading-none transition-all duration-500 ${
                        activeIndex === index
                          ? "text-[#ff0808]"
                          : "text-[#d9d9d9]"
                      }`}
                    >
                      {service.number}
                    </div>

                    <h3
                      className={`mt-2 text-2xl font-bold transition-all duration-500 ${
                        activeIndex === index
                          ? "text-white"
                          : "text-[#d9d9d9]"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`mt-2 max-w-[450px] text-base leading-6 transition-all duration-500 ${
                        activeIndex === index
                          ? "text-white"
                          : "text-[#999]"
                      }`}
                    >
                      {service.description}
                    </p>

                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-center">

            <div
              key={activeService.number}
              className="animate-[fadeIn_.5s_ease]"
            >
              <div className="text-[72px] font-bold leading-none tracking-[-4px] text-[#ff0808]">
                {activeService.number}
              </div>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#ff0808] md:text-[38px]">
                {activeService.title}
              </h2>

              <div className="relative mt-5 aspect-[1.3/1] w-full max-w-[470px] overflow-hidden rounded-[20px] bg-[#d9d9d9]">
                {services.map((service, index) => (
                  <img
                    key={service.number}
                    src={service.image}
                    alt={service.title}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                      activeIndex === index
                        ? "scale-100 opacity-100"
                        : "scale-105 opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}