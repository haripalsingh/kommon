import type { ReactNode } from "react";

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
    <section className="bg-black px-4 pb-16 pt-16 sm:px-8 sm:pt-24">
      <div className="mx-auto max-w-7xl text-center uppercase">
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
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
