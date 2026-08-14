import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const contactDetails = [
  { label: "Email", value: "hello@kommoncanvas.com", align: "left" as const },
  { label: "Call", value: "+91 9310217956", align: "center" as const },
  { label: "Location", value: "Ghaziabad, India", align: "right" as const },
];

export default function Footer() {
  return (
    <footer className="bg-black px-4 pb-10 pt-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          <span className="block text-white">Let&rsquo;s create something</span>
          <span className="block text-red-600">unforgettable.</span>
        </h2>

        <div className="mt-16 border-t border-white/15" />

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {contactDetails.map((detail) => (
            <div
              key={detail.label}
              className={
                detail.align === "center"
                  ? "sm:text-center"
                  : detail.align === "right"
                    ? "sm:text-right"
                    : ""
              }
            >
              <p className="text-sm text-neutral-400">{detail.label}</p>
              <p className="mt-2 text-xl font-bold text-white">{detail.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/15" />

        <div className="mt-16 flex flex-col items-center">
          <Image
            src="/Logo.png"
            alt="Kommon Canvas"
            width={2920}
            height={903}
            className="h-auto w-[300px] max-w-full sm:w-[380px]"
          />

          <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                  i === 0 ? "text-white" : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-16 text-center text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Kommon Canvas. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
