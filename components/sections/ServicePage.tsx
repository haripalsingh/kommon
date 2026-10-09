import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import type { Service, Work } from "@/lib/services";

// =====================================================================
// COMMON SERVICE PAGE — saare service pages isi ek component se bante hain.
// Design/layout yahan badlo toh sab pages me change hoga.
// Text aur images @/lib/services.ts me edit karo.
// =====================================================================

function WorkCard({ work }: { work: Work }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-sm border border-black/15 bg-white">
      <div className="relative aspect-[4/3] w-full bg-neutral-900 sm:aspect-[4/3.4]">
        {work.image ? (
          <Image
            src={work.image}
            alt={work.title}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-white/40">
            Add image
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1 px-4 py-4">
        <h3 className="text-lg font-medium text-[#ff0000] sm:text-xl">{work.title}</h3>
        <p className="text-xs leading-relaxed text-neutral-500 sm:text-sm">
          {work.description}
        </p>
      </div>
    </article>
  );
}

export default function ServicePage({ service }: { service: Service }) {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="pt-10 sm:pt-14 lg:pt-16">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-16">
            <div className="lg:w-1/2">
              <h1 className="text-[32px] font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="mt-2 text-lg font-medium sm:text-xl">{service.tagline}</p>
            </div>

            <div className="lg:w-1/2 lg:pt-3">
              <p className="text-sm leading-relaxed text-neutral-800 sm:text-base">
                {service.description}
              </p>

              {service.offerings.length > 0 && (
                <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2 text-sm text-neutral-700 sm:grid-cols-2">
                  {service.offerings.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff0000]" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-1 rounded-md bg-[#ff0000] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#a30d25]"
              >
                Talk to Us <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Work portfolio */}
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <h2 className="text-center text-3xl font-medium tracking-tight sm:text-4xl">
            Our <span className="text-[#ff0000]">Work Portfolio</span>
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            {service.works.map((work) => (
              <WorkCard key={work.title} work={work} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
