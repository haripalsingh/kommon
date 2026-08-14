import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";

const title = "Contact";
const description =
  "Get in touch with Kommon Canvas to start your packaging or branding project.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${title} | Kommon Canvas`,
    description,
    url: "/contact",
  },
  twitter: {
    title: `${title} | Kommon Canvas`,
    description,
  },
};

const contactDetails = [
  {
    label: "Email",
    value: "hello@kommoncanvas.com",
    href: "mailto:hello@kommoncanvas.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 6-10 7L2 6" />
      </svg>
    ),
  },
  {
    label: "Call",
    value: "+91 9310217956",
    href: "tel:+919310217956",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Ghaziabad, India",
    href: undefined,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col bg-black font-sans">
      <PageHero
        eyebrow="Get In Touch"
        titleWhite="Let's Talk"
        titleRed="Design."
        description="Tell us a bit about your brand and what you're looking to create — we'll get back to you within one business day."
      />

      <section className="bg-black px-4 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          {/* Contact details */}
          <div className="flex flex-col gap-6">
            {contactDetails.map((detail) => {
              const content = (
                <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-neutral-800/90 p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
                    {detail.icon}
                  </span>
                  <div>
                    <p className="text-sm text-neutral-400">{detail.label}</p>
                    <p className="mt-1 text-lg font-bold text-white">
                      {detail.value}
                    </p>
                  </div>
                </div>
              );

              return detail.href ? (
                <a key={detail.label} href={detail.href} className="transition-opacity hover:opacity-80">
                  {content}
                </a>
              ) : (
                <div key={detail.label}>{content}</div>
              );
            })}

            <div className="rounded-3xl border border-white/10 bg-neutral-800/90 p-6">
              <p className="text-sm text-neutral-400">Working Hours</p>
              <p className="mt-1 text-lg font-bold text-white">
                Mon &ndash; Sat, 10am &ndash; 7pm IST
              </p>
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
