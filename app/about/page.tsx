import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import Container from "@/components/layout/Container";

const title = "About Us";
const description =
  "Meet Kommon Canvas — a packaging and brand design studio taking ideas from concept to creation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `${title} | Kommon Canvas`,
    description,
    url: "/about",
    images: [{ url: "/our-story.png", width: 1200, height: 940, alt: "Khushi Tyagi, Founder of Kommon Canvas" }],
  },
  twitter: {
    title: `${title} | Kommon Canvas`,
    description,
    images: ["/our-story.png"],
  },
};

const stats = [
  { value: "90+", label: "Happy Clients" },
  { value: "100+", label: "Projects Delivered" },
  { value: "5+", label: "Years of Experience" },
  { value: "10+", label: "Industries Served" },
];

const dontDo = [
  {
    title: "Design without direction",
    description:
      "Good design needs a reason. We don't create visuals without understanding the brand, its audience, and its purpose.",
  },
  {
    title: "Follow trends blindly",
    description:
      "Trends come and go. We focus on creating identities with character, clarity, and staying power.",
  },
  {
    title: "Make everything look the same",
    description:
      "Your brand should have its own voice. We avoid generic solutions and create visual identities that feel distinctly yours.",
  },
  {
    title: "Stop at the final file",
    description:
      "Good design needs a reason. We don't create visuals without understanding the brand, its audience, and its purpose.",
  },
];

const whatWeDo = [
  {
    title: "Turn ideas into identities",
    description:
      "We transform early-stage thoughts into clear, distinctive brand identities built around a strong idea.",
  },
  {
    title: "Build with intention",
    description:
      "From strategy and positioning to typography, colour, and visual language, every choice has a purpose.",
  },
  {
    title: "Create brands with character",
    description:
      "We find the balance between familiarity and distinction, creating identities people can recognise and remember.",
  },
  {
    title: "Design for real-world use",
    description:
      "From packaging and print to digital experiences, we make sure your brand stays consistent wherever it appears.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col bg-black font-sans">
      <PageHero
        titleWhite=""
        title={
          <>
            <span className="text-white">From </span>
            <span className="text-red-600">Ideas</span>
            <span className="text-white"> To </span>
            <span className="text-red-600">Identity</span>
            <span className="text-white">, We Make</span>
            <br />
            <span className="text-white">Brands Worth Remembering.</span>
          </>
        }
      />

            {/* Full-width banner photo */}
            <div className="relative aspect-[21/9] w-full overflow-hidden sm:aspect-[3/1]">
              <Image
                src="https://aditechinfo.com/kommoncanvas/projects/about-us.png"
                alt="Kommon Canvas packaging design in the wild"
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />
            </div>

      {/* Concept. Clarity. Character. Craft. Creation. */}
      <section className="bg-black pb-14 pt-14 md:pb-24 md:pt-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-800/60 lg:col-span-4" />

          <div className="lg:col-span-8">
            <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl text-right">
              Concept. Clarity.
              <br />
              Character. Craft. Creation.
            </h2>
            <p className="mt-6 leading-relaxed text-neutral-300  text-right">
              At Kommon Canvas, we turn ideas into distinctive brand
              experiences through strategy, creativity, and thoughtful
              design. From concept to execution, every detail is crafted
              with purpose — creating identities that feel authentic,
              communicate clearly, and leave a lasting impression.
            </p>
          </div>
        </Container>
      </section>

      {/* What We Don't Do / What We Do */}
      <section className="mb-20">
        <Container className="grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-white/20">
          <div className="sm:pr-12 lg:pr-16  py-8 sm:py-8">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
              What We Don&rsquo;t Do
            </h2>
            <div className="mt-8 space-y-8">
              {dontDo.map((item) => (
                <div key={item.title}>
                  <h3 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-white/90">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="sm:pl-12 lg:pl-16 bg-[#ff0000] rounded-l-2xl  py-8 sm:py-8">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
              What We Do
            </h2>
            <div className="mt-8 space-y-8">
              {whatWeDo.map((item) => (
                <div key={item.title}>
                  <h3 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-white/90">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTABanner />
    </div>
  );
}
