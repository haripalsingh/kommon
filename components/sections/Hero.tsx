"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";

const doodles = [
  { src: "https://aditechinfo.com/kommoncanvas/logos/watermark06.svg", className: "left-[6%] top-[0%] w-20 sm:w-50", rotate: "5deg" },
  { src: "https://aditechinfo.com/kommoncanvas/logos/watermark01.svg", className: "right-[8%] top-[4%] w-16 sm:w-40", rotate: "6deg" },
  { src: "https://aditechinfo.com/kommoncanvas/logos/watermark05.svg", className: "left-[15%] top-[50%] w-16 sm:w-50", rotate: "4deg" },
  { src: "https://aditechinfo.com/kommoncanvas/logos/watermark02.svg", className: "right-[10%] top-[40%] w-16 sm:w-40", rotate: "5deg" },
  { src: "https://aditechinfo.com/kommoncanvas/logos/watermark03.svg", className: "right-[25%] bottom-[15%] w-24 sm:w-50", rotate: "-3deg" },
];

function BackgroundDoodles({ mounted }: { mounted: boolean }) {
  return (
    // Watermarks: hidden on mobile + tablet, only visible from lg (desktop) up
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
      {doodles.map((d, i) => (
        <div
          key={i}
          className={`absolute ${d.className} transition-all duration-1000 ease-out`}
          style={{
            opacity: mounted ? 1 : 0,
            transform: `rotate(${d.rotate}) scale(${mounted ? 1 : 0.9})`,
            transitionDelay: `${300 + i * 100}ms`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={d.src} alt="" className="h-auto w-full" loading="lazy"
  decoding="async"/>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative flex flex-col items-center overflow-hidden pb-0 md:pb-0 pt-0 header">
      {/* Watermark doodle logos */}
      <BackgroundDoodles mounted={mounted} />

      {/* Ambient glow behind the headline/photo */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[60vw] w-[60vw] max-h-[600px] max-w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff0000]/20 blur-[100px]"
        style={{ animation: "glow-pulse 6s ease-in-out infinite" }}
      />

      <Container className="flex flex-col items-center">
        {/* Headline */}
        <h1 className="relative z-0 w-full select-none text-center font-normal uppercase leading-[0.82] tracking-tight mt-4">
          <span
            className="block text-[13vw] text-white transition-all duration-700 ease-out sm:text-[10vw] md:text-[9vw] lg:text-[7.5rem]"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateX(0)" : "translateX(-60px)",
            }}
          >
            Creative
          </span>
          <span
            className="block text-[19vw] font-extrabold text-red-600 transition-all duration-700 ease-out sm:text-[15vw] md:text-[13.5vw] lg:text-[11.5rem]"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateX(0)" : "translateX(60px)",
              transitionDelay: "120ms",
            }}
          >
            Agency
          </span>
        </h1>

        {/* Founder photo, overlapping the headline */}
        <div
          className="pointer-events-none relative z-10 -mt-[15vw] w-[48vw] max-w-[280px] transition-all duration-700 ease-out sm:-mt-[10vw] sm:w-[32vw] sm:max-w-[340px] md:-mt-[6vw] md:w-[27vw] md:max-w-[420px]"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "scale(1)" : "scale(0.85)",
            transitionDelay: "260ms",
          }}
        >
          <div style={{ animation: mounted ? "float-y 5s ease-in-out infinite" : "none" }}>
            <Image
              src="https://aditechinfo.com/kommoncanvas/girl-element.webp"
              alt="Hi, I am Khushi Tyagi, Founder of Kommon Canvas"
              width={1000}
              height={987}
              priority
              className="h-auto w-full drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>

        {/* Bottom row: description + CTA */}
        <div className="relative z-20 top-[-5px] flex w-full flex-col items-center justify-between gap-6 px-2 sm:top-[-80px] sm:mt-2 sm:flex-row sm:items-end sm:gap-8 md:top-[-120px]">
          <p
            className="max-w-sm text-center text-[15px] leading-normal text-neutral-300 transition-all duration-700 ease-out sm:max-w-2/4 sm:text-left sm:text-[17px] md:max-w-md md:text-[20px]"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(24px)",
              transitionDelay: "420ms",
            }}
          >
            We build bold identities, <br />
            <span className="text-[#FF0000]">packaging</span> & <span className="text-[#FF0000]">digital experiences &nbsp;</span>
            <br /> for
            brands that want to stand out.
          </p>

          <Link
            href="/work"
            className="group inline-flex shrink-0 items-center gap-2 self-center rounded-md bg-white px-5 py-3 text-xs font-bold uppercase tracking-wide text-[#070505] transition-all duration-700 ease-out hover:scale-105 hover:text-white hover:bg-[#ff0000] sm:self-auto sm:px-6 sm:py-4 sm:text-sm"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(24px)",
              transitionDelay: "540ms",
            }}
          >
            View a Projects
          </Link>
        </div>
      </Container>
    </section>
  );
}