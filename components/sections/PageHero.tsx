type PageHeroProps = {
  eyebrow: string;
  titleWhite: string;
  titleRed: string;
  description: string;
};

export default function PageHero({
  eyebrow,
  titleWhite,
  titleRed,
  description,
}: PageHeroProps) {
  return (
    <section className="bg-black px-4 pb-16 pt-16 sm:px-8 sm:pt-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl">
          <span className="text-white">{titleWhite} </span>
          <span className="text-red-600">{titleRed}</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-400">
          {description}
        </p>
      </div>
    </section>
  );
}
