// import { projects } from "@/lib/projects";
import ProductMarqueeMar from "@/components/sections/ProductMarqueeMar"; 
export default function ProductScroll() {
  return (
    <section className="overflow-hidden bg-black pt-10 md:pt-0 pb-10 sm:pb-16">
      <div className="relative  w-full overflow-hidden">
        <ProductMarqueeMar />
      </div>
    </section>
  );
}