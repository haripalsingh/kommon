const testimonials = [
  {
    quote:
      "Exceptional creativity and flawless execution! They delivered a complete packaging design system across our entire product range, ahead of schedule.",
    name: "Priya Verma",
    role: "Product Lead, Innovate Labs",
  },
  {
    quote:
      "Highly professional service! The new packaging design and brand positioning completely refreshed how customers see us on the shelf.",
    name: "Karan Patel",
    role: "CEO, Nexa Packaging",
  },
  {
    quote:
      "The team understood our product from day one and designed packaging that truly stands out on the shelf. Every detail, from the die-line to the finish, was thoughtfully crafted.",
    name: "Arjun Mehta",
    role: "Founder, Pixel Foods",
  },
  {
    quote:
      "Working with Kommon Canvas was effortless from the first call to the final print run. Our packaging finally looks as good as our product tastes.",
    name: "Rhea Kapoor",
    role: "Co-founder, Wild Orchard",
  },
  {
    quote:
      "They took a vague brief and turned it into a brand identity that actually feels like us. Communication and turnaround were spot on throughout.",
    name: "Aditya Rao",
    role: "Marketing Head, Vamshi Farms",
  },
  {
    quote:
      "From concept to shelf, every round of feedback was handled quickly and thoughtfully. Easily the smoothest packaging project we've run.",
    name: "Simran Kaur",
    role: "Brand Manager, Swap Beverages",
  },
];

// Duplicate the list so the marquee loop (translateX 0 -> -50%) is seamless.
const loopTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="overflow-hidden bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold uppercase tracking-tight sm:text-6xl">
            <span className="text-red-600">Voices of</span>{" "}
            <span className="text-white">Our Clients</span>
          </h2>
          <div className="mt-4 flex h-1 w-24 overflow-hidden rounded-full">
            <span className="w-1/2 bg-red-600" />
            <span className="w-1/2 bg-white" />
          </div>
        </div>
      </div>

      {/* Infinite scrolling row of testimonial cards — no arrows/dots, just continuous motion */}
      <div className="relative mt-14 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex w-max animate-[marquee_55s_linear_infinite] items-stretch gap-6 hover:[animation-play-state:paused] sm:gap-8">
          {loopTestimonials.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="flex w-80 shrink-0 flex-col justify-between rounded-3xl border border-white/10 bg-neutral-800/90 p-8 sm:w-96"
            >
              <div>
                <span className="text-5xl font-serif leading-none text-neutral-500">
                  &ldquo;
                </span>
                <p className="mt-4 text-lg leading-relaxed text-neutral-200">
                  {t.quote}
                </p>
                <span className="mt-2 block text-right font-serif text-5xl leading-none text-neutral-500">
                  &rdquo;
                </span>
              </div>

              <div className="mt-8">
                <p className="font-bold text-white">
                  <span className="mr-2 text-neutral-400">&mdash;</span>
                  {t.name}
                </p>
                <p className="mt-1 text-sm text-neutral-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
