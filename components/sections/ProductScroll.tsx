// import { projects } from "@/lib/projects";
import ProductMarquee from "@/components/sections/ProductMarquee"; 
export default function ProductScroll() {
  return (
    <section className="overflow-hidden bg-black pt-10 md:pt-0 pb-10 sm:pb-16">
      <div className="relative  w-full overflow-hidden">
        <ProductMarquee />
      </div>
    </section>
  );
}