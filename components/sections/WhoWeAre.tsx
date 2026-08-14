import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section className="bg-black px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* View all projects */}
        <div className="flex justify-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-base text-neutral-300 transition-colors hover:text-white sm:text-lg"
          >
            View All My Projects
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

        {/* Divider */}
        <div className="mt-10 border-t border-white/10" />

        {/* Who we are */}
        <div className="mx-auto mt-16 flex max-w-3xl flex-col items-center text-center">
          <h2 className="text-5xl font-black italic uppercase tracking-tight text-white sm:text-7xl">
            Who We Are
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-300 sm:text-xl">
            We help businesses grow through strategic branding, creative
            design, and visual experiences that people remember.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-500"
          >
            Our Story
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
      </div>
    </section>
  );
}
