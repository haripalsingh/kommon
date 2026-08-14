"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How do we get started?",
    a: "We begin with a discovery call to understand your brand, goals, target audience, and vision. From there, we recommend the right package and put together a tailored design roadmap.",
  },
  {
    q: "What packages do you offer?",
    a: "We offer packaging design, brand identity, and digital experience packages tailored to different budgets and timelines — from a single SKU refresh to a full brand system.",
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
    q: "Do I own the final files and designs?",
    a: "Absolutely. Once the project is complete, you receive full ownership of all final files, source assets, and usage rights.",
  },
];

const features = [
  {
    label: "Free 30-minute design consultation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    label: "Package recommendation based on your budget",
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
    <section className="bg-black px-4 py-20 sm:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Left: heading + accordion */}
        <div>
          <h2 className="text-5xl font-extrabold text-white sm:text-6xl">FAQ</h2>
          <p className="mt-4 max-w-xl text-neutral-400">
            Everything you need to know about our design packages before we get
            started.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            {faqs.map((faq, i) => {
              const open = i === openIndex;
              return (
                <div
                  key={faq.q}
                  className={`rounded-3xl p-6 transition-colors duration-300 sm:p-8 ${
                    open ? "bg-red-600" : "bg-neutral-800/90"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                    aria-expanded={open}
                  >
                    <span className="text-lg font-bold text-white sm:text-xl">
                      {faq.q}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center text-2xl font-light leading-none text-white">
                      {open ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="mt-4 leading-relaxed text-white/90">
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
        <div className="relative overflow-hidden rounded-[2.5rem] bg-red-600 p-8 sm:p-10">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-6 right-4 select-none text-[9rem] font-black leading-none text-white/10 sm:text-[11rem]"
          >
            ?
          </span>

          <h3 className="relative max-w-xs text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Still have questions
          </h3>

          <p className="relative mt-8 text-2xl font-bold text-white">
            Let&rsquo;s design a package that stands out.
          </p>
          <p className="relative mt-4 leading-relaxed text-red-50">
            Whether you&rsquo;re launching a new product or refreshing your
            packaging design, we&rsquo;re here to help you pick the right
            package and bring it to shelf.
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

          <form className="relative mt-10 flex items-center justify-between gap-3 rounded-full bg-red-800/50 py-2 pl-6 pr-2">
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
      </div>
    </section>
  );
}
