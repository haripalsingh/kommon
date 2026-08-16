import Hero from "@/components/sections/Hero";
import ProductScroll from "@/components/sections/ProductScroll";
import LatestProjects from "@/components/sections/LatestProjects";
import WhoWeAre from "@/components/sections/WhoWeAre";
import WhatWeHelp from "@/components/sections/WhatWeHelp";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-black font-sans">
      <Hero />
      <ProductScroll />
      <WhoWeAre />
      <WhatWeHelp />
      <LatestProjects />
      <Testimonials />
      <FAQ />
    </div>
  );
}
