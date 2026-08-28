import type { ComponentPropsWithoutRef } from "react";

type ContainerProps = ComponentPropsWithoutRef<"div">;

/**
 * Site-wide content container — caps width at max-w-7xl, centers it, and
 * adds the standard horizontal gutter (px-4 sm:px-8) used across every
 * page, section, the header, and the footer. This replaces the repeated
 * `mx-auto max-w-7xl` (sometimes with px-4 sm:px-8, sometimes relying on a
 * parent for it) that used to be copy-pasted into every section — one
 * place to change the site's outer width/gutter going forward.
 *
 * Extra classes passed via `className` are appended after the base
 * classes, so layout utilities (`grid`, `flex`, gaps, etc.) can still be
 * added per use, and any other div props (ref, style, onMouseEnter, …)
 * pass straight through.
 */
export default function Container({ className = "", ...props }: ContainerProps) {
  return (
    <div
      className={["mx-auto w-full commoncontainer px-4 sm:px-8", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
