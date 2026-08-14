import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-black px-4 py-24 sm:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <h2 className="text-4xl font-extrabold uppercase tracking-tight sm:text-6xl">
          <span className="text-white">Ready to start your</span>{" "}
          <span className="text-red-600">project?</span>
        </h2>
        <p className="max-w-xl text-neutral-400">
          Tell us about your brand and we&rsquo;ll help you turn it into
          packaging and visuals people remember.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-500"
        >
          Book a Call
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
        </Link>
      </div>
    </section>
  );
}
