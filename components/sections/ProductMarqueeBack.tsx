import Image from "next/image";

// Apni pasand ki images yahin add/edit/remove karein
const marqueeImages = [
{ src: "https://aditechinfo.com/kommoncanvas/projects/work/work-img01.webp", alt: "work-img01" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/work/work-img02.webp", alt: "work-img02" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/work/work-img03.webp", alt: "work-img03" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/work/work-img04.webp", alt: "work-img04" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/work/work-img05.webp", alt: "work-img05" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/work/work-img06.webp", alt: "work-img06" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/work/work-img07.webp", alt: "work-img07" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/work/work-img08.webp", alt: "work-img08" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/work/work-img09.webp", alt: "work-img09" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/work/work-img10.webp", alt: "work-img10" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/work/work-img11.webp", alt: "work-img11" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/work/work-img12.webp", alt: "work-img12" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/work/work-img13.webp", alt: "work-img13" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/work/work-img14.webp", alt: "work-img14" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/work/work-img15.webp", alt: "work-img15" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/work/work-img16.webp", alt: "work-img16" },
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