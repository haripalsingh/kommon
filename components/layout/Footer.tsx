import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { FaLinkedin } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
   { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/kommoncanvas/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Behance",
    href: "https://www.facebook.com/p/Kommon-Canvas-61593065804694/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="currentColor"
      >
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.003 10.125 11.927v-8.432H7.078v-3.495h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.973h-1.514c-1.491 0-1.956.931-1.956 1.887v2.264h3.328l-.532 3.495h-2.796V24C19.612 23.076 24 18.092 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kommoncanvas/",
    icon: (
     <FaLinkedin className="h-5 w-5" />
    ),
  },
  {
  label: "Pinterest",
  href: "https://in.pinterest.com/kommoncanvas/",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.03 2 11.5c0 4.05 2.28 7.53 5.62 9.04-.08-.77-.01-1.69.19-2.43l1.35-5.72s-.34-.68-.34-1.69c0-1.58.92-2.76 2.06-2.76.97 0 1.44.73 1.44 1.61 0 .98-.62 2.45-.94 3.81-.27 1.14.57 2.07 1.69 2.07 2.03 0 3.59-2.14 3.59-5.23 0-2.73-1.96-4.64-4.76-4.64-3.24 0-5.14 2.43-5.14 4.94 0 .98.38 2.03.85 2.6.09.11.1.2.07.31l-.32 1.31c-.05.21-.17.25-.39.15-1.44-.67-2.34-2.76-2.34-4.44 0-3.61 2.62-6.93 7.56-6.93 3.97 0 7.06 2.83 7.06 6.61 0 3.94-2.49 7.11-5.94 7.11-1.16 0-2.25-.6-2.62-1.31l-.71 2.7c-.26.98-.96 2.2-1.43 2.95.95.29 1.95.45 3 .45 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
    </svg>
  ),
}
];

const contactDetails = [
  {
    label: "Call Us",
    value: "+91 9310217956",
    href: "tel:+919310217956",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8.1 9.6a16 16 0 0 0 6 6l1.1-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 2 2.3Z" />
      </svg>
    ),
  },
  {
    label: "Email Us",
    value: "kommoncanvas@gmail.com",
    href: "mailto:kommoncanvas@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 6 10-6" />
      </svg>
    ),
  },
  {
    label: "Visit Us",
    value: "Noida, India",
    href: undefined,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-black pb-10 md:pt-16 pt-3">
      <Container>
        {/* Top: logo + blurb / newsletter card */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-14">
          <div>
            <Image
              src="https://aditechinfo.com/kommoncanvas/kommoncanvas-w-logo.png"
              alt="Kommon Canvas"
              width={2920}
              height={903}
              className="h-auto w-[150px] max-w-full sm:w-[200px]"
            />
            <p className="mt-6 max-w-md leading-relaxed text-neutral-400">
              We help brands grow through branding, packaging design, social
              media, and digital experiences. From strategy to execution, we
              create designs that connect, communicate, and stand out.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#ff0000] p-8 sm:p-10">
            <h3 className="text-4xl font-bold text-white sm:text-5xl">
              Stay Inspired
            </h3>
            <p className="mt-4 max-w-md leading-relaxed text-white/90">
              Subscribe to get our latest projects, creative tips, and design
              updates.
            </p>
            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <label className="w-full">
                <span className="sr-only">Enter your email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border-b border-white/40 bg-transparent pb-3 text-white placeholder-white/70 outline-none transition-colors focus:border-white"
                />
              </label>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center rounded-md bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-black transition-colors hover:bg-neutral-100"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-16 border-t border-white/15" />

        {/* Middle: follow us + contact details — 4 equal-width columns with a
            gray divider between each (divide-x only borders between
            children, so there's no trailing divider after the last column).
            lg:items-stretch (the grid default) makes every column fill the
            row's full height so the dividers line up at equal length —
            lg:items-center would size each divider to its own column's
            content height instead, leaving the shorter columns' dividers
            shorter than "Follow Us". Each column then centers its own
            content vertically within that stretched height.
            min-w-0 on the columns lets flex children actually shrink instead
            of forcing the row wider, and break-words on the value lets a
            long email wrap onto a second line instead of overflowing into
            the next column. */}
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[0.9fr_1fr_1.3fr_0.8fr] lg:items-stretch lg:gap-0 lg:divide-x lg:divide-white/15">
          <div className="flex flex-col justify-center lg:pr-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              Follow Us
            </p>
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:border-[#ff0000] hover:text-[#ff0000]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {contactDetails.map((detail, i) => {
            const isLast = i === contactDetails.length - 1;
            const content = (
              <>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ff0000] text-white">
                  {detail.icon}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-neutral-400">
                    {detail.label}
                  </span>
                  <span className="block truncate whitespace-nowrap font-bold text-white">
                    {detail.value}
                  </span>
                </span>
              </>
            );
            return detail.href ? (
              <a
                key={detail.label}
                href={detail.href}
                className={`flex min-w-0 items-center gap-3 lg:pl-6 ${isLast ? "" : "lg:pr-0"}`}
              >
                {content}
              </a>
            ) : (
              <div
                key={detail.label}
                className={`flex min-w-0 items-center gap-3 lg:pl-6 ${isLast ? "" : "lg:pr-6"}`}
              >
                {content}
              </div>
            );
          })}
        </div>

        <div className="mt-10 border-t border-white/15" />

        {/* Bottom: nav + copyright */}
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-nowrap items-center md:gap-x-8 gap-x-2.5 gap-y-2 overflow-x-auto whitespace-nowrap">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs md:text-sm font-semibold uppercase tracking-wide text-neutral-300 transition-colors hover:text-[#ff0000]"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <p className="text-sm leading-relaxed text-neutral-500 sm:text-right">
            &copy; {new Date().getFullYear()} kommoncanvas. All Rights
            Reserved.
            <br />
            Where Ideas Meet Creativity.
          </p>
        </div>
      </Container>
    </footer>
  );
}