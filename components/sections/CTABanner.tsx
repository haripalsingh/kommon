import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-black px-4 py-10 sm:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <h2 className="text-4xl font-bold uppercase tracking-tight sm:text-6xl">
          <span className="text-white">Have a project for us?</span>{" "}
        </h2>
       
        <Link
          href="/contact"
          className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#ff0000] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-500"
        >
          Book a Call
        
        </Link>
      </div>
    </section>
  );
}
