import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";

const title = "Services";
const description =
  "Brand strategy, brand identity, packaging design, and digital experience services from Kommon Canvas.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    title: `${title} | Kommon Canvas`,
    description,
    url: "/services",
  },
  twitter: {
    title: `${title} | Kommon Canvas`,
    description,
  },
};

const services = [
  {
    title: "Brand Strategy",
    description:
      "A clear strategic foundation that defines your brand's purpose, positioning, audience, and direction — the groundwork every good design decision stands on.",
    tags: [
      "Brand Purpose",
      "Target Audience",
      "Business Goals",
      "Brand Positioning",
      "Market Research",
      "Visual Direction",
    ],
  },
  {
    title: "Brand Identity",
    description:
      "A distinctive visual identity that gives your brand a consistent, recognizable, and memorable presence across every touchpoint.",
    tags: [
      "Logo Design",
      "Typography",
      "Color System",
      "Brand Guidelines",
      "Visual Language",
      "Brand Assets",
    ],
  },
  {
    title: "Packaging Design",
    description:
      "Packaging that combines creativity, functionality, and brand storytelling to make your product stand out — from concept to print-ready file.",
    tags: [
      "Packaging Concept",
      "Dieline Design",
      "Label Design",
      "Print Design",
      "Material Selection",
      "3D Mockups",
    ],
  },
  {
    title: "Digital Experience",
    description:
      "Digital experiences designed to connect with your audience through intuitive, engaging, and impactful design across every screen.",
    tags: [
      "UI/UX Design",
      "Web Design",
      "Social Media",
      "Digital Campaigns",
      "User Experience",
      "Motion Design",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "A free 30-minute call to understand your brand, goals, and audience.",
  },
  {
    step: "02",
    title: "Strategy & Roadmap",
    description:
      "We recommend the right package and map out a tailored design plan.",
  },
  {
    step: "03",
    title: "Design & Feedback",
    description:
      "You review and give feedback at every major milestone along the way.",
  },
  {
    step: "04",
    title: "Delivery",
    description:
      "You receive full, print-ready files and complete ownership of the work.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-1 flex-col bg-black font-sans">
      <PageHero
        eyebrow="What We Do"
        titleWhite="Our"
        titleRed="Services."
        description="Everything your brand needs — from strategy and identity to packaging and digital design — all under one roof."
      />

      {/* Services list */}
      <section className="bg-black px-4 pb-8 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`rounded-[2rem] border p-8 sm:p-10 ${
                i === 1
                  ? "border-red-400/30 bg-red-600"
                  : "border-white/10 bg-neutral-800/90"
              }`}
            >
              <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
                {service.title}
              </h3>
              <p
                className={`mt-4 leading-relaxed ${
                  i === 1 ? "text-red-50" : "text-neutral-300"
                }`}
              >
                {service.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3 border-t border-white/30 pt-6">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/40 px-4 py-2 text-sm font-semibold text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-black px-4 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl font-extrabold uppercase tracking-tight sm:text-6xl">
              <span className="text-white">How We</span>{" "}
              <span className="text-red-600">Work</span>
            </h2>
            <div className="mt-4 flex h-1 w-24 overflow-hidden rounded-full">
              <span className="w-1/2 bg-red-600" />
              <span className="w-1/2 bg-white" />
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-white/10 bg-neutral-800/90 p-8"
              >
                <span className="text-4xl font-black text-red-600">
                  {item.step}
                </span>
                <h3 className="mt-4 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
