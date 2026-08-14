"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[2rem] border border-white/10 bg-neutral-800/90 p-10 text-center">
        <p className="text-2xl font-bold text-white">Thanks — got it!</p>
        <p className="mt-3 text-neutral-400">
          We&rsquo;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/10 bg-neutral-800/90 p-8 sm:p-10"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-neutral-300">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="mt-2 w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder-neutral-500 outline-none transition-colors focus:border-red-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-neutral-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="mt-2 w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder-neutral-500 outline-none transition-colors focus:border-red-500"
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="phone" className="text-sm font-semibold text-neutral-300">
          Phone (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 00000 00000"
          className="mt-2 w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder-neutral-500 outline-none transition-colors focus:border-red-500"
        />
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="text-sm font-semibold text-neutral-300">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you looking to design?"
          className="mt-2 w-full resize-none rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder-neutral-500 outline-none transition-colors focus:border-red-500"
        />
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-500 sm:w-auto"
      >
        Send Message
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </form>
  );
}
