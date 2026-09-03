"use client"; // Swiper hooks / components ke liye client component zaroori hai

import type { Metadata } from "next";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Swiper styles import karein
import "swiper/css";
import "swiper/css/effect-fade";

import PageHero from "@/components/sections/PageHero";
import ServiceTimeline from "@/components/sections/ServiceTimeline";
import CTABanner from "@/components/sections/CTABanner";
import Ourlatestwork from "@/components/sections/Ourlatestwork";

const title = "Services";
const description =
  "Brand strategy, brand identity, packaging design, and digital experience services from Kommon Canvas.";

// Agar aapko metadata export rakhna hai, toh Next.js me "use client" ke sath 
// metadata export direct kaam nahi karta. Iske liye aap is file ko server component 
// rakh sakte hain aur Swiper wale part ko ek alag Client Component me extract kar sakte hain.
// Niche maine poora code ek single client component ke roop me likh diya hai:

export default function ServicesPage() {
  // Aapke banner images ki list (Yahan aap 3-4 images add kar sakte hain)
  const bannerImages = [
    {
      src: "https://aditechinfo.com/kommoncanvas/projects/tea.webp",
      alt: "Kommon Canvas packaging design in the wild 1",
    },
    {
      src: "https://aditechinfo.com/kommoncanvas/projects/kulfi.webp",
      alt: "Kommon Canvas packaging design in the wild 2",
    },
    {
      src: "https://aditechinfo.com/kommoncanvas/projects/cookies.webp", 
      alt: "Kommon Canvas packaging design in the wild 3",
    },
    {
      src: "https://aditechinfo.com/kommoncanvas/projects/drink.webp", 
      alt: "Kommon Canvas packaging design in the wild 3",
    },
  ];

  return (
    <div className="flex flex-1 flex-col bg-black font-sans">
      <PageHero
        titleWhite=""
        title={
          <>
            <span className="text-white">We Turn </span>
            <span className="text-red-600">Great Design</span>
            <span className="text-white"> Into</span>
            <br />
            <span className="text-white">Unforgettable Brand Experiences</span>
          </>
        }
      />

      {/* Full-width banner Swiper with smooth Fade animation */}
      <div className="relative aspect-[21/9] w-full overflow-hidden sm:aspect-[9/4]">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
          loop={true}
          autoplay={{
            delay: 3500, // Har 3.5 seconds me slide change hogi
            disableOnInteraction: false,
          }}
          speed={1000} // Transition ka smooth hone ka duration (1 second)
          className="h-full w-full"
        >
          {bannerImages.map((banner, index) => (
            <SwiperSlide key={index} className="relative h-full w-full">
              <Image
                src={banner.src}
                alt={banner.alt}
                fill
                sizes="100vw"
                priority={index === 0}
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Services intro */}
      <section className="bg-black px-4 pb-5 pt-10 sm:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
            Our Services
          </h2>
          <div className="mt-4 flex h-1 w-24 overflow-hidden rounded-full">
            <span className="w-1/2 bg-[#ff0000]" />
            <span className="w-1/2 bg-white" />
          </div>
          <p className="mt-8 text-xl leading-relaxed text-neutral-300 sm:text-2xl">
            Strategy, design &amp; creativity that make<br /> your brand stand
            apart
          </p>
        </div>
      </section>

      <ServiceTimeline />
      <Ourlatestwork />
      <CTABanner />
    </div>
  );
}