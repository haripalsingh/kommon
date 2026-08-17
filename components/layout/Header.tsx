"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

// The marquee works by rendering two identical "groups" side by side and
// animating translateX(0 -> -50%), so the second group seamlessly takes
// the first group's place when the loop restarts. That only stays
// seamless if each group is wider than the viewport — otherwise, on wide
// screens, the animation runs out of content near the end of the cycle
// and a blank gap shows before it loops. Repeating the item list several
// times inside a single group keeps that group comfortably wider than
// any real screen, so the loop never runs dry.
const TICKER_REPEATS = 6;
const tickerGroup = Array.from({ length: TICKER_REPEATS }, () => tickerItems).flat();

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 w-full bg-black">
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

      <div className="px-4 py-5 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          {/* Logo — pinned left */}
          <Link href="/" className="flex flex-1 items-center">
            <Image
              src="/kommoncanvas-w-logo.png"
              alt="Kommon Canvas"
              width={280}
              height={89}
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
                className={`text-[24px] font-normal  tracking-wide transition-colors ${
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
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white lg:hidden"
            >
              {open ? (
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
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
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav panel */}
        {open && (
          <div className="mx-auto mt-2 flex max-w-7xl flex-col gap-1 rounded-3xl border border-white/10 bg-neutral-900/95 p-4 backdrop-blur lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wide ${
                  isActive(link.href) ? "bg-white/10 text-white" : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[#ff0000] px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white"
            >
              Book a Call
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
