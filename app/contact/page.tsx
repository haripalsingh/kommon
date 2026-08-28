import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import Container from "@/components/layout/Container";

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

const highlights = [
  {
    title: "Brand Strategy & Identity",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="m12 3-1.9 5.8a2 2 0 0 1-1.29 1.29L3 12l5.8 1.9a2 2 0 0 1 1.29 1.29L12 21l1.9-5.8a2 2 0 0 1 1.29-1.29L21 12l-5.8-1.9a2 2 0 0 1-1.29-1.29Z" />
      </svg>
    ),
  },
  {
    title: "Web & Digital Design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a14 14 0 0 0 0 18 14 14 0 0 0 0-18Z" />
        <path d="M3 12h18" />
      </svg>
    ),
  },
  {
    title: "Packaging Design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
      </svg>
    ),
  },
  {
    title: "Print & Collateral Design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 7v14" />
        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3Z" />
      </svg>
    ),
  },
  {
    title: "Ongoing Design Support",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a1 1 0 0 1-1-1v-4a9 9 0 1 1 18 0v4a1 1 0 0 1-1 1h-2a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col bg-black font-sans">
      <PageHero
        titleWhite="Contact Us"
        description="Let's Build Something Meaningful"
      />

      <section className="bg-black ">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          {/* Intro + highlights */}
          <div className="flex flex-col">
            <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              <span className="text-white">Let&rsquo;s Discuss Your</span>
              <br />
              <span className="text-red-600">Next Project!</span>
            </h2>

            <p className="mt-6  text-[22px] leading-relaxed text-white">
              Have a project in mind or just want to explore possibilities?
              We&rsquo;d love to hear from you. Share your ideas with us and
              let&rsquo;s create something impactful together.
            </p>

            <div className="mt-10 flex flex-col gap-5">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ff0000] text-white">
                    {item.icon}
                  </span>
                  <span className="text-lg font-semibold text-white">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </Container>
      </section>
    </div>
  );
}
