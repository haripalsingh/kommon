// import { projects } from "@/lib/projects";
import ProductMarquee from "@/components/sections/ProductMarquee"; 
export default function ProductScroll() {
  return (
    <section className="overflow-hidden bg-black pt-0 pb-16 sm:pb-20">
      <div className="relative mt-14 w-full overflow-hidden">
        <ProductMarquee />
      </div>
    </section>
  );
}