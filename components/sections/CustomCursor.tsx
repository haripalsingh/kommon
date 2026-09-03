"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsClient(true);

    // Check if the device is a touch/mobile device
    const checkMobile = () => {
      const hasTouch = window.matchMedia("(pointer: coarse)").matches;
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(hasTouch || isSmallScreen);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (isMobile) return;

    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", onMouseMove);

    const loop = () => {
      setCursorPosition((prev) => {
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;
        return {
          x: prev.x + dx * 0.2,
          y: prev.y + dy * 0.2,
        };
      });
      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button") || target.closest("clickable")) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("resize", checkMobile);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition.x, mousePosition.y, isMobile]);

  if (!isClient || isMobile) return null;

  return (
    <div
      className={`pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-white mix-blend-difference transition-[width,height] duration-200 ease-out ${
        isHovered ? "h-16 w-16" : "h-4 w-4"
      }`}
      style={{
        transform: `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0) translate(-50%, -50%)`,
      }}
    />
  );
}