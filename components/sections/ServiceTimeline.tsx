"use client";
import Image from "next/image";

import { useEffect, useState } from "react";

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

  // Autoplay: cycle through services automatically, looping back to the start.
  // Restarts whenever activeIndex changes (autoplay tick or manual click),
  // so a click resets the timer instead of jumping right away.
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const activeService = services[activeIndex];

  return (
    <section className="flex items-center bg-[#050505] text-white mt-10 md:mt-16">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">

          {/* LEFT */}
          <div className="relative">

            {/* Single continuous bar, divided into equal segments.
                Default gray; only the active service's segment turns red. */}
            <div className="absolute left-0 top-0 flex h-full w-3 flex-col overflow-hidden rounded-full bg-[#d9d9d9]">
              {services.map((service, index) => (
                <div
                  key={service.number}
                  className={`flex-1 transition-colors duration-500 ${
                    activeIndex === index ? "bg-[#ff0808]" : "bg-transparent"
                  }`}
                />
              ))}
            </div>

            <div className="space-y-8 pl-12">

              {services.map((service, index) => (
                <div
                  key={service.number}
                  onClick={() => setActiveIndex(index)}
                  className="flex min-h-[150px] cursor-pointer items-center"
                >
                  <div>

                    <div
                      className={`text-4xl font-bold leading-none transition-all duration-500 ${
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

                    {activeIndex === index && (
                      <p className="mt-2 max-w-[450px] text-base leading-6 text-white transition-all duration-500 animate-[fadeIn_.5s_ease]">
                        {service.description}
                      </p>
                    )}

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