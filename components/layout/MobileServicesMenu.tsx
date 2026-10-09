"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { serviceGroups } from "@/lib/services";

// Mobile menu ke andar Services ka accordion (group-wise).
// Ek time par ek group khulta hai; jis group ka page khula hai wo pehle se open rehta hai.
export default function MobileServicesMenu({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  const currentGroup = serviceGroups.find((g) =>
    g.items.some((i) => pathname === `/services/${i.slug}`)
  )?.label;

  const [openGroup, setOpenGroup] = useState<string | null>(currentGroup ?? null);

  return (
    <div className="flex flex-col gap-2 pb-2">
      {serviceGroups.map((group) => {
        const isOpen = openGroup === group.label;
        return (
          <div
            key={group.label}
            className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenGroup(isOpen ? null : group.label)}
              className="flex min-h-[52px] w-full items-center gap-3 px-4 py-3 text-left"
            >
              <span className="text-xs font-semibold tabular-nums text-[#ff0000]">
                {group.number}
              </span>
              <span className="text-lg font-semibold uppercase tracking-wide text-white">
                {group.label}
              </span>
              <span className="ml-auto text-xs text-white/40">{group.items.length}</span>
              <span
                aria-hidden
                className={`text-sm text-white/60 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                &#9662;
              </span>
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <ul className="min-h-0 overflow-hidden">
                {group.items.map((item) => {
                  const active = pathname === `/services/${item.slug}`;
                  return (
                    <li key={item.slug} className="border-t border-white/5">
                      <Link
                        href={`/services/${item.slug}`}
                        onClick={onNavigate}
                        tabIndex={isOpen ? 0 : -1}
                        className={`flex min-h-[48px] items-center justify-between gap-3 px-4 py-3 text-[15px] normal-case tracking-normal transition-colors active:bg-white/10 ${
                          active ? "font-semibold text-[#ff0000]" : "text-white/80"
                        }`}
                      >
                        <span>{item.title}</span>
                        <span aria-hidden className="text-white/30">
                          &rarr;
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}

    
    </div>
  );
}
