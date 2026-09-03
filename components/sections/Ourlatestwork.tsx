import Link from "next/link";
// import { projects } from "@/lib/projects";
import Container from "@/components/layout/Container";
import ProductMarqueeBack from "@/components/sections/ProductMarqueeBack"; // Path check kar lein

const Ourlatestwork = () => {
  return (
    <section className="overflow-hidden bg-black md:pt-24 pt-10 pb-10">
      <Container>
        {/* Heading row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
            Our Work
          </h2>
          <Link
            href="/work"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-red-600 sm:text-base"
          >
            View More Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Container>

      {/* ProductMarquee Component Call */}
      <div className="mt-10 w-full overflow-hidden">
        <ProductMarqueeBack />
      </div>
    </section>
  );
};

export default Ourlatestwork;