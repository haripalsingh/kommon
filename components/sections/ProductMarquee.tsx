import Image from "next/image";

// Apni pasand ki images yahin add/edit/remove karein
const marqueeImages = [
{ src: "https://aditechinfo.com/kommoncanvas/projects/home-slider/homeimg01.webp", alt: "homeimg01" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/home-slider/homeimg02.webp", alt: "homeimg02" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/home-slider/homeimg03.webp", alt: "homeimg03" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/home-slider/homeimg04.webp", alt: "homeimg04" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/home-slider/homeimg05.webp", alt: "homeimg05" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/home-slider/homeimg06.webp", alt: "homeimg06" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/home-slider/homeimg07.webp", alt: "homeimg07" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/home-slider/homeimg08.webp", alt: "homeimg08" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/home-slider/homeimg09.webp", alt: "homeimg09" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/home-slider/homeimg10.webp", alt: "homeimg10" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/home-slider/homeimg11.webp", alt: "homeimg11" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/home-slider/homeimg12.webp", alt: "homeimg12" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/home-slider/homeimg13.webp", alt: "homeimg13" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/home-slider/homeimg14.webp", alt: "homeimg14" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/home-slider/homeimg15.webp", alt: "homeimg15" },
{ src: "https://aditechinfo.com/kommoncanvas/projects/home-slider/homeimg16.webp", alt: "homeimg16" },
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