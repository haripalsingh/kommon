"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger the entrance animation on the next frame after mount.
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (

    <section className="relative flex flex-col items-center overflow-hidden px-4 pb-0 md:pb-20 pt-0 sm:px-8 header">
      {/* Ambient glow behind the headline/photo */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[60vw] w-[60vw] max-h-[600px] max-w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff0000]/20 blur-[100px]"
        style={{ animation: "glow-pulse 6s ease-in-out infinite" }}
      />

      {/* Content — aligned to the same max-w-7xl box as the header/nav */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center ">
        {/* Headline */}
        <h1 className="relative z-0 w-full select-none text-center font-normal uppercase leading-[0.82] tracking-tight mt-16">
          <span
            className="block text-[13vw] text-white transition-all duration-700 ease-out sm:text-[9vw] lg:text-[7.5rem]"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateX(0)" : "translateX(-60px)",
            }}
          >
            Creative
          </span>
          <span
            className="block text-[19vw] font-extrabold text-red-600 transition-all duration-700 ease-out sm:text-[13.5vw] lg:text-[11.5rem]"
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
          className="pointer-events-none relative z-10 -mt-[13vw] w-[42vw] max-w-[420px] transition-all duration-700 ease-out sm:-mt-[9vw] sm:w-[26vw]"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "scale(1)" : "scale(0.85)",
            transitionDelay: "260ms",
          }}
        >
          <div style={{ animation: mounted ? "float-y 5s ease-in-out infinite" : "none" }}>
            <Image
              src="/girl-element.png"
              alt="Hi, I am Khushi Tyagi, Founder of Kommon Canvas"
              width={1000}
              height={987}
              priority
              className="h-auto w-full drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>

        {/* Bottom row: description + CTA */}
        <div className="relative z-20 mt-4 flex w-full flex-col items-center justify-between gap-8 sm:mt-2 sm:flex-row sm:items-end">
          <p
            className="max-w-full text-center text-[18px] md:text-[30px] leading-normal text-neutral-300 transition-all duration-700 ease-out sm:max-w-2/4 sm:text-left"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(24px)",
              transitionDelay: "420ms",
            }}
          >
        We build bold identities, <br/>
<span className="text-[#FF0000]">packaging</span> & <span className="text-[#FF0000]">digital experiences &nbsp;</span> 
for<br/> 
brands that want to stand out.
          </p>

          <Link
            href="/work"
            className="group inline-flex shrink-0 items-center gap-2 self-center rounded-md bg-white px-6 py-4 text-sm font-bold uppercase tracking-wide text-[#070505] transition-all duration-700 ease-out hover:scale-105 hover:bg-white sm:self-end"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(24px)",
              transitionDelay: "540ms",
            }}
          >
            View a Projects
           
          </Link>
        </div>
      </div>
    </section>
  );
}
