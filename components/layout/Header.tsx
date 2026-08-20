"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  // { name: "Contact", href: "/contact" },
];

const tickerItems = [
  "Packaging Design",
  "Social Media Management",
  "Brand Identity",
  "Social Media Design",
  "Print Design",
];

const TICKER_REPEATS = 6;
const tickerGroup = Array.from({ length: TICKER_REPEATS }, () => tickerItems).flat();

export default function Header() {
  const [open, setOpen] = useState(false);
  // Controls whether the mobile panel is in the DOM at all — kept mounted
  // slightly longer than `open` so the closing transition can play out
  // instead of the panel just vanishing.
  const [rendered, setRendered] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    if (open) {
      setRendered(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      const t = setTimeout(() => setRendered(false), 350);
      return () => clearTimeout(t);
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full bg-black ">
      {/* Scrolling ticker strip */}
      <div className="overflow-hidden bg-[#ff0000]">
        <div className="flex w-max animate-[marquee_144s_linear_infinite] items-center py-2 text-white">
          {[0, 1].map((dup) => (
            <div
              key={dup}
              className="flex shrink-0 items-center"
              aria-hidden={dup === 1 ? true : undefined}
            >
              {tickerGroup.map((item, i) => (
                <span
                  key={`${dup}-${i}`}
                  className="flex items-center whitespace-nowrap text-sm font-normal  tracking-wide text-white"
                >
                  {item}
                  <span className="mx-4 text-white/80">I</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="py-5">
        <Container className="flex items-center justify-between gap-4">
          {/* Logo — pinned left */}
          <Link href="/" className="relative z-[60] flex flex-1 items-center">
            <Image
              src="https://aditechinfo.com/kommoncanvas/logo.svg"
              alt="Kommon Canvas"
              width={180}
              height={39}
              priority
            />
          </Link>

          {/* Desktop nav — centered */}
          <nav className="hidden flex-1 items-center justify-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`text-[18px] font-normal  tracking-wide transition-colors ${
                  isActive(link.href) ? "text-white" : "text-white hover:text-[#ff0000]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Book a call + mobile toggle — pinned right */}
          <div className="flex flex-1 items-center justify-end gap-3">
            <Link
              href="/contact"
              className="hidden shrink-0 rounded-md bg-[#ff0000] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-500 sm:inline-block"
            >
              Book a Call
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="relative z-[60] flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors lg:hidden"
            >
              {/* Animated hamburger -> X, built from two bars that rotate/merge instead of icon-swap */}
              <span className="relative flex h-4 w-5 flex-col justify-between">
                <span
                  className="block h-[2px] w-full origin-center rounded-full bg-white transition-all duration-300 ease-out"
                  style={{
                    transform: open ? "translateY(7px) rotate(45deg)" : "none",
                  }}
                />
                <span
                  className="block h-[2px] w-full rounded-full bg-white transition-all duration-300 ease-out"
                  style={{
                    opacity: open ? 0 : 1,
                    transform: open ? "scaleX(0)" : "scaleX(1)",
                  }}
                />
                <span
                  className="block h-[2px] w-full origin-center rounded-full bg-white transition-all duration-300 ease-out"
                  style={{
                    transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
                  }}
                />
              </span>
            </button>
          </div>
        </Container>

        {/* Mobile nav overlay + panel */}
        {rendered && (
          <>
            {/* Backdrop */}
            <div
              aria-hidden
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ease-out lg:hidden"
              style={{ opacity: open ? 1 : 0 }}
            />

            {/* Panel */}
            <div
              className="fixed inset-x-0 top-0 z-50 origin-top border-b border-white/10 bg-neutral-950/98 pb-8 pt-28 shadow-2xl backdrop-blur-xl transition-all duration-350 ease-out lg:hidden"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0) scaleY(1)" : "translateY(-8px) scaleY(0.98)",
              }}
            >
              <Container className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`group flex items-center justify-between border-b border-white/5 py-4 text-2xl font-bold uppercase tracking-wide transition-all duration-300 ease-out ${
                      isActive(link.href) ? "text-[#ff0000]" : "text-white"
                    }`}
                    style={{
                      opacity: open ? 1 : 0,
                      transform: open ? "translateX(0)" : "translateX(-16px)",
                      transitionDelay: open ? `${100 + i * 60}ms` : "0ms",
                    }}
                  >
                    <span>{link.name}</span>
                    <span
                      className={`text-lg transition-all duration-300 ${
                        isActive(link.href)
                          ? "translate-x-0 text-[#ff0000] opacity-100"
                          : "-translate-x-1 text-white/40 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                    >
                      &rarr;
                    </span>
                  </Link>
                ))}

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-6 rounded-full bg-[#ff0000] px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 ease-out hover:bg-red-500"
                  style={{
                    opacity: open ? 1 : 0,
                    transform: open ? "translateY(0)" : "translateY(12px)",
                    transitionDelay: open ? `${100 + navLinks.length * 60}ms` : "0ms",
                  }}
                >
                  Book a Call
                </Link>
              </Container>
            </div>
          </>
        )}
      </div>
    </header>
  );
}