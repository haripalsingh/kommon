import Container from "@/components/layout/Container";

const testimonials = [
  {
    quote:
      "Working with the design team was a great experience. They understood our brand vision and translated it into packaging that feels modern, premium, and aligned with our identity. The final designs gave our products a much more professional and appealing look",
    name: "Sanjeev Nayya",
    role: "Founder & CEO Of incenzaofficial",
  },
  {
    quote:
      "Working with the team was a great experience. They brought fresh creative thinking to our packaging and understood our brand perfectly. The final designs were thoughtful, impactful, and truly elevated the way Drinkit India presents itself",
    name: "Kaushal Kishore Gautam",
    role: "Founder and CEO DrinkitIndia",
  },
  {
    quote:
      "We really loved how the packaging came together. The design feels creative, well thought-out, and professional. The team understood our requirements and delivered something that was beyond what we initially imagined",
    name: "Sanjeev Nayya",
    role: "Founder & CEO Of Beancult",
  },
  {
    quote:
      "Thank you for the amazing packaging design. We truly appreciate the creativity, attention to detail, and effort put into understanding our brand. The final result looks professional, impactful, and beyond our expectations",
    name: "Aman Puri",
    role: "Founder & CEO speednutrition",
  },
  {
    quote:
      "Thank you so much for bringing our vision to life. The packaging design turned out even better than we imagined. We were impressed by the attention to detail, premium aesthetic, and professionalism throughout the process. The final design perfectly captures the elegance and sophistication we wanted for our brand",
    name: "Amar Roy",
    role: "Founder and CEO DEVILLINE",
  },
  
];

// Duplicate the list so the marquee loop (translateX 0 -> -50%) is seamless.
const loopTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="overflow-hidden bg-black md:py-10 py-5">
      <Container>
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
            {/* <span className="text-red-600"></span>{" "} */}
            <span className="text-white">Voices of Our Clients</span>
          </h2>
          <div className="mt-4 flex h-1 w-24 overflow-hidden rounded-full">
            <span className="w-1/2 bg-[#ff0000]" />
            <span className="w-1/2 bg-white" />
          </div>
        </div>
      </Container>

      {/* Infinite scrolling row of testimonial cards — no arrows/dots, just continuous motion */}
      <div className="relative mt-14 w-full overflow-hidden ">
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
