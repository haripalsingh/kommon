import Image from "next/image";

// Apni pasand ki images yahin add/edit/remove karein
const marqueeImages = [



{ src: "../projects/work/homeimg7.webp", alt: "work-img01" },
{ src: "../projects/work/homeimg08.webp", alt: "work-img02" },
{ src: "../projects/work/homeimg9.webp", alt: "work-img03" },
{ src: "../projects/work/work-img1.webp", alt: "work-img04" },
{ src: "../projects/work/work-img2.webp", alt: "work-img05" },
{ src: "../projects/work/work-img3.webp", alt: "work-img06" },
{ src: "../projects/work/work-img4.webp", alt: "work-img07" },
{ src: "../projects/work/work-img5.webp", alt: "work-img08" },
{ src: "../projects/work/work-img06.webp", alt: "work-img09" },
{ src: "../projects/work/work-img10.webp", alt: "work-img10" },
];

export default function ProductMarquee() {
  // Duplicate the list so the marquee loop is seamless
  const loopImages = [...marqueeImages, ...marqueeImages];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex w-max animate-[marquee_50s_linear_infinite] items-stretch gap-6 sm:gap-8">
        {loopImages.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="relative aspect-[4/3] w-64 shrink-0 overflow-hidden rounded-2xl bg-neutral-900 sm:w-80"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 640px) 320px, 256px"
              className="object-cover"
              loading="lazy"
  decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
}