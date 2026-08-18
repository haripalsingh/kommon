import type { ReactNode } from "react";
import Container from "@/components/layout/Container";

type PageHeroProps = {
  eyebrow?: string;
  titleWhite: string;
  titleRed?: string;
  description?: string;
  /** Full custom heading markup — overrides titleWhite/titleRed when provided. */
  title?: ReactNode;
};

export default function PageHero({
  eyebrow,
  titleWhite,
  titleRed,
  description,
  title,
}: PageHeroProps) {
  return (
    <section className="bg-black pb-16 pt-8 sm:pt-10">
      <Container className="text-center uppercase">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            {eyebrow}
          </p>
        )}

        <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
          {title ?? (
            <>
              <span className="text-white">{titleWhite} </span>
              {titleRed && <span className="text-red-600">{titleRed}</span>}
            </>
          )}
        </h1>

        {description && (
          <p className="mt-6  text-3xl leading-relaxed  text-center text-white block  capitalize">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
