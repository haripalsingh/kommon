"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import ServicesMegaMenu from "@/components/layout/ServicesMegaMenu";
import MobileServicesMenu from "@/components/layout/MobileServicesMenu";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
   { name: "Contact", href: "/contact" },
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
  // Desktop mega menu (hover) + mobile accordion for Services
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  // Route change hone par menus band kar do
  useEffect(() => {
    setMegaOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    if (open) {
      setRendered(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      const t = setTimeout(() => {
        setRendered(false);
        setMobileServicesOpen(false);
      }, 350);
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
              src="/logo.svg"
              alt="Kommon Canvas"
              width={180}
              height={39}
               className="w-[100px] h-auto sm:w-[180px]"
              priority
            />
          </Link>

          {/* Desktop nav — centered */}
          <nav className="hidden flex-1 items-center justify-center gap-9 lg:flex">
            {navLinks.map((link) =>
              link.name === "Services" ? (
                <div
                  key={link.href}
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                  onFocus={() => setMegaOpen(true)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) setMegaOpen(false);
                  }}
                  // py-3 -my-3: hover area thoda bada taaki menu tak jaate hue band na ho
                  className="-my-8 py-8"
                >
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    aria-haspopup="true"
                    aria-expanded={megaOpen}
                    className={`text-[18px] font-normal tracking-wide transition-colors ${
                      megaOpen ? "text-[#ff0000]" : "text-white hover:text-[#ff0000]"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {megaOpen && <ServicesMegaMenu onNavigate={() => setMegaOpen(false)} />}
                </div>
              ) : (
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
              )
            )}
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
              className="fixed inset-x-0 top-0 z-50 max-h-dvh origin-top overflow-y-auto overscroll-contain border-b border-white/10 bg-neutral-950/98 pb-8 pt-28 shadow-2xl backdrop-blur-xl transition-all duration-350 ease-out lg:hidden"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0) scaleY(1)" : "translateY(-8px) scaleY(0.98)",
              }}
            >
              <Container className="flex flex-col gap-1">
                {navLinks.map((link, i) =>
                  link.name === "Services" ? (
                    <div
                      key={link.href}
                      className="border-b border-white/5 transition-all duration-300 ease-out"
                      style={{
                        opacity: open ? 1 : 0,
                        transform: open ? "translateX(0)" : "translateX(-16px)",
                        transitionDelay: open ? `${100 + i * 60}ms` : "0ms",
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        aria-expanded={mobileServicesOpen}
                        className={`flex w-full items-center justify-between py-4 text-2xl font-bold uppercase tracking-wide ${
                          isActive(link.href) ? "text-[#ff0000]" : "text-white"
                        }`}
                      >
                        <span>{link.name}</span>
                        <span
                          className={`text-lg transition-transform duration-300 ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        >
                          &#9662;
                        </span>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                          mobileServicesOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="min-h-0 overflow-hidden">
                          <MobileServicesMenu onNavigate={() => setOpen(false)} />
                        </div>
                      </div>
                    </div>
                  ) : (
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
                  )
                )}

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