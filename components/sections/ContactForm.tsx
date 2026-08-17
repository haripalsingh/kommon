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
      className="rounded-[2rem]  p-8 sm:p-10"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="mb-8">
          <label htmlFor="fullName" className="text-sm font-semibold text-neutral-300">
            Full Name *
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="Your Name"
            className="mt-2 w-full rounded-md border border-white/15 bg-[#292929] px-4 py-3 text-white placeholder-neutral-500 outline-none transition-colors focus:border-red-500"
          />
        </div>
        <div className="mb-8">
          <label htmlFor="email" className="text-sm font-semibold text-neutral-300">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="mt-2 w-full rounded-md border border-white/15 bg-[#292929] px-4 py-3 text-white placeholder-neutral-500 outline-none transition-colors focus:border-red-500"
          />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div className="mb-8">
          <label htmlFor="phone" className="text-sm font-semibold text-neutral-300">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="1234567890"
            className="mt-2 w-full rounded-md border border-white/15 bg-[#292929] px-4 py-3 text-white placeholder-neutral-500 outline-none transition-colors focus:border-red-500"
          />
        </div>
        <div className="mb-8">
          <label htmlFor="subject" className="text-sm font-semibold text-neutral-300">
            Subject *
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="How we can help"
            className="mt-2 w-full rounded-md border border-white/15 bg-[#292929] px-4 py-3 text-white placeholder-neutral-500 outline-none transition-colors focus:border-red-500"
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="text-sm font-semibold text-neutral-300">
          Tell us about your project *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="How we can help"
          className="mt-2 w-full resize-none rounded-md border border-white/15 bg-[#292929] px-4 py-3 text-white placeholder-neutral-500 outline-none transition-colors focus:border-red-500"
        />
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#ff0000] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-500 sm:w-auto"
      >
        Send Us a Message
        
      </button>
    </form>
  );
}
