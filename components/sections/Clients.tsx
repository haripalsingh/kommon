import Image from "next/image";
import Container from "@/components/layout/Container";
const logos = [
  { src: "/logos/our-client-logo01.svg", alt: "Client logo" },
  { src: "/logos/our-client-logo02.svg", alt: "Client logo" },
  { src: "/logos/our-client-logo03.svg", alt: "Carrotkart" },
  { src: "/logos/our-client-logo04.svg", alt: "TechFocal Solutions" },
  { src: "/logos/our-client-logo05.svg", alt: "Client logo" },
  { src: "/logos/our-client-logo06.svg", alt: "Vending Brands" },
  { src: "/logos/our-client-logo07.svg", alt: "Divine Event Management" },
  { src: "/logos/our-client-logo08.svg", alt: "Client logo" },
  { src: "/logos/our-client-logo09.svg", alt: "Indianomy" },
  { src: "/logos/our-client-logo10.svg", alt: "Client logo" },
];

export default function Clients() {
  return (
    <section className="bg-black py-16">
      <Container className="flex flex-col items-start gap-10 sm:flex-row sm:items-center">
        {/* Stat */}
        <div className="shrink-0">
          <p className="text-6xl font-extrabold leading-none text-red-600 sm:text-7xl">
            90+
          </p>
          <p className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
            Happy Clients
          </p>
        </div>

        {/* Infinite logo marquee */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-[marquee_28s_linear_infinite] items-center gap-16 hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((logo, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <Image
                key={`${logo.src}-${i}`}
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-auto shrink-0 object-contain opacity-70 brightness-0 invert transition-opacity hover:opacity-100 sm:h-10"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
