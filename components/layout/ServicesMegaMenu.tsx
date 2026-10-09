"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import { serviceGroups } from "@/lib/services";

// Desktop mega menu — header ke neeche full-width panel.
// Content @/lib/services.ts se aata hai, yahan sirf design hai.
export default function ServicesMegaMenu({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  // Mount hote hi fade + slide-in animation chalane ke liye
  const [show, setShow] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      role="menu"
      className={`absolute left-0 top-full z-50 w-full border-t-2 border-[#ff0000] bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)] transition-all duration-200 ease-out ${
        show ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
      }`}
    >
      <div className="max-h-[calc(100vh-9rem)] overflow-y-auto pt-5 pb-3">
        <Container className="grid grid-cols-3 gap-x-8 gap-y-8 pb-8 pt-10 xl:gap-x-14">
          {serviceGroups.map((group) => (
            <div key={group.label} className="group/col">
              {/* Group heading */}
              <div className="flex items-center gap-3 border-b border-black/10 pb-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1f2228] text-white transition-colors duration-300 group-hover/col:bg-[#ff0000]">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-[22px] font-medium leading-none tracking-tight text-black">
                  {group.label}
                </span>
                <span className="ml-auto text-sm font-medium tabular-nums text-black/30">
                  {group.number}
                </span>
              </div>

              {/* Links */}
              <ul className="mt-3 flex flex-col">
                {group.items.map((item) => {
                  const href = `/services/${item.slug}`;
                  const active = pathname === href;
                  return (
                    <li key={item.slug}>
                      <Link
                        href={href}
                        role="menuitem"
                        onClick={onNavigate}
                        className={`group/item flex items-center justify-between gap-3 rounded-md px-3 py-2.5 text-[16px] transition-all duration-200 hover:bg-neutral-100 hover:text-[#ff0000] xl:text-[17px] ${
                          active ? "bg-neutral-100 text-[#ff0000]" : "text-neutral-600"
                        }`}
                      >
                        <span className="transition-transform duration-200 group-hover/item:translate-x-1">
                          {item.title}
                        </span>
                        <span
                          aria-hidden
                          className={`text-base transition-all duration-200 ${
                            active
                              ? "translate-x-0 opacity-100"
                              : "-translate-x-2 opacity-0 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                          }`}
                        >
                          &rarr;
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </Container>


      </div>
    </div>
  );
}