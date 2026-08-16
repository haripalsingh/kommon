import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
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
    href: "https://behance.net",
    icon: <span className="text-sm font-bold italic">B&#275;</span>,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 10v6M7 7.5v.01M11 16v-3.5a2 2 0 0 1 4 0V16M11 12.5V16" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 18c1-3 1.5-6 2-9a2.5 2.5 0 1 1 4.5 1.5c-.3 2-1.5 4-3.5 4-.6 0-1-.2-1.3-.5" />
      </svg>
    ),
  },
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
    value: "hello@kommoncanvas.com",
    href: "mailto:hello@kommoncanvas.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 6 10-6" />
      </svg>
    ),
  },
  {
    label: "Visit Us",
    value: "Ghaziabad, India",
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
    <footer className="bg-black px-4 pb-10 pt-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Top: logo + blurb / newsletter card */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-14">
          <div>
            <Image
              src="/kommoncanvas-w-logo.png"
              alt="Kommon Canvas"
              width={2920}
              height={903}
              className="h-auto w-[260px] max-w-full sm:w-[300px]"
            />
            <p className="mt-6 max-w-md leading-relaxed text-neutral-400">
              We help brands grow through branding, packaging design, social
              media, and digital experiences. From strategy to execution, we
              create designs that connect, communicate, and stand out.
            </p>
          </div>

          <div className="rounded-[2rem] bg-red-600 p-8 sm:p-10">
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

        <div className="mt-14 border-t border-white/15" />

        {/* Middle: follow us + contact details — 4 equal-width columns with a
            gray divider between each (divide-x only borders between
            children, so there's no trailing divider after the last column).
            lg:items-stretch (the grid default) makes every column fill the
            row's full height so the dividers line up at equal length —
            lg:items-center would size each divider to its own column's
            content height instead, leaving the shorter columns' dividers
            shorter than "Follow Us". Each column then centers its own
            content vertically within that stretched height. */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:items-stretch lg:gap-0 lg:divide-x lg:divide-white/15">
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
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:border-white hover:text-red-500"
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
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
                  {detail.icon}
                </span>
                <span>
                  <span className="block text-sm text-neutral-400">
                    {detail.label}
                  </span>
                  <span className="block font-bold text-white">
                    {detail.value}
                  </span>
                </span>
              </>
            );
            return detail.href ? (
              <a
                key={detail.label}
                href={detail.href}
                className={`flex items-center gap-3 lg:pl-6 ${isLast ? "" : "lg:pr-6"}`}
              >
                {content}
              </a>
            ) : (
              <div
                key={detail.label}
                className={`flex items-center gap-3 lg:pl-6 ${isLast ? "" : "lg:pr-6"}`}
              >
                {content}
              </div>
            );
          })}
        </div>

        <div className="mt-10 border-t border-white/15" />

        {/* Bottom: nav + copyright */}
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wide text-neutral-300 transition-colors hover:text-white"
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
      </div>
    </footer>
  );
}
