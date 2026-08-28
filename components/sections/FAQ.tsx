"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";

const faqs = [
  {
    q: "How do we get started?",
    a: "We begin with a discovery call to understand your business, goals, target audience, and vision. From there, we create a tailored strategy and project roadmap.",
  },
  {
    q: "What services do you offer?",
    a: "We offer packaging design, brand identity, and digital experience services tailored to different budgets and timelines — from a single SKU refresh to a full brand system.",
  },
  {
    q: "How long does a project take?",
    a: "Most projects take 2 to 6 weeks depending on scope, from the discovery call to final, print-ready files.",
  },
  {
    q: "Will I be involved during the design process?",
    a: "Yes — you'll review and give feedback at every major milestone, so the final design matches your vision before it goes to print.",
  },
  {
    q: "How many revisions are included?",
    a: "Every package includes a set number of revision rounds, so we can refine the design together until it's exactly right.",
  },
];

const features = [
  {
    label: "Free 30-minute strategy call",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    label: "Personalized project consultation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      </svg>
    ),
  },
  {
    label: "No obligation, just expert advice",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="12" r="9" />
        <path d="m8.5 12.5 2.5 2.5 4.5-5" />
      </svg>
    ),
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-black md:py-10 py-5">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Left: heading + accordion */}
        <div>
          <h2 className="text-5xl font-extrabold text-white sm:text-5xl">FAQ</h2>
          <p className="mt-4 max-w-xl text-neutral-400">
            Everything you need to know before starting your branding
            journey.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            {faqs.map((faq, i) => {
              const open = i === openIndex;
              return (
                <div
                  key={faq.q}
                  className={`transition-all duration-300 ${
                    open
                      ? "rounded-[1.5rem] bg-[#ff0000] p-5 sm:rounded-[2rem] sm:p-8"
                      : "rounded-[1.5rem] border-2 border-white px-5 py-4 sm:rounded-full sm:px-8 sm:py-6"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    className="flex w-full items-start justify-between gap-4 text-left sm:items-center"
                    aria-expanded={open}
                  >
                    <span className="text-base font-bold leading-snug text-white sm:text-xl">
                      {faq.q}
                    </span>
                    {open ? (
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center text-2xl font-light leading-none text-white sm:mt-0">
                        &minus;
                      </span>
                    ) : (
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center  border-white/40 text-lg font-light leading-none text-white sm:mt-0">
                        +
                      </span>
                    )}
                  </button>

                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="mt-3 text-sm leading-relaxed text-white/90 sm:mt-4 sm:text-base">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: CTA card */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#ff0000] p-8 sm:p-10">
          <span
            aria-hidden
            className="pointer-events-none absolute top-[17px] right-[28px] md:right-[118px] select-none font-sans text-[9rem] font-normal leading-none text-white/30 sm:text-[11rem]"
          >
            ?
          </span>

          <h3 className="relative max-w-xs text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Still have questions
          </h3>

          <p className="relative mt-8 text-2xl font-bold text-white">
            Let&rsquo;s build something remarkable together.
          </p>
          <p className="relative mt-4 leading-relaxed text-red-50">
            Whether you&rsquo;re starting from scratch or ready to elevate
            your brand, we&rsquo;re here to guide you every step of the way.
          </p>

          <div className="relative mt-8 flex flex-col gap-5">
            {features.map((feature) => (
              <div key={feature.label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 text-white">
                  {feature.icon}
                </span>
                <span className="font-semibold text-white">{feature.label}</span>
              </div>
            ))}
          </div>

          <form className="relative mt-10 flex items-center justify-between gap-3 rounded-full bg-[#494747] py-2 pl-6 pr-2">
            <input
              type="email"
              placeholder="Book a Free Discovery Call......"
              className="w-full bg-transparent text-white placeholder-white/70 outline-none"
            />
            <button
              type="submit"
              aria-label="Book a free discovery call"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-red-600 transition-transform hover:scale-105"
            >
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
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}