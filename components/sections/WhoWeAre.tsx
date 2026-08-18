// import Link from "next/link";

// const stats = [
//   { value: "90+", label: "Happy Clients" },
//   { value: "100+", label: "Projects Delivered" },
//   { value: "5+", label: "Years of Experience" },
//   { value: "10+", label: "Industries Served" },
// ];

export default function WhoWeAre() {
  return (
    <>
      {/* Section 1 — brand statement, styled to match the reference: centered
          copy on a red panel with decorative doodles flanking the headline. */}
      <section className="relative overflow-hidden bg-[#ff0000] px-4 py-8 sm:px-8 sm:py-28">
        {/* Decorative growth-chart doodle */}
        
        {/* Decorative stairs doodle */}
        <div className="leftimage"></div>
         
        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="text-5xl font-bold  uppercase tracking-tight text-white sm:text-7xl">
            Who We Are
          </h2>
          <p className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
            We Build Brands.
          </p>
          <div className="mt-6 flex h-1 w-24 overflow-hidden rounded-full">
            <span className="w-1/2 bg-black" />
            <span className="w-1/2 bg-white" />
          </div>
          <p className="mt-8 text-lg leading-relaxed text-white/90 sm:text-xl">
            We are an independent creative agency helping businesses turn
            ideas into powerful visual identities. From strategy and branding
            to packaging and social media, we combine creativity with purpose
            to create designs that connect with people and move businesses
            forward.
          </p>
        </div>
         <div className="rightimage"></div>
      </section>

   
    </>
  );
}
