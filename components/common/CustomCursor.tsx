"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = cursorFollowerRef.current;

    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      gsap.to(cursor, {
        x,
        y,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(follower, {
        x,
        y,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onMouseEnter = () => {
      gsap.to([cursor, follower], {
        scale: 1.5,
        opacity: 1,
        duration: 0.3,
      });
    };

    const onMouseLeave = () => {
      gsap.to([cursor, follower], {
        scale: 1,
        opacity: 0,
        duration: 0.3,
      });
    };

    const onHoverEnter = () => {
      gsap.to(cursor, { scale: 3, duration: 0.3 });
      gsap.to(follower, { scale: 5, opacity: 0.1, duration: 0.3 });
    };

    const onHoverLeave = () => {
      gsap.to(cursor, { scale: 1.5, duration: 0.3 });
      gsap.to(follower, { scale: 1.5, opacity: 1, duration: 0.3 });
    };

    window.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseenter", onMouseEnter);
    document.body.addEventListener("mouseleave", onMouseLeave);

    const interactiveElements = document.querySelectorAll("a, button, .cursor-pointer");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onHoverEnter);
      el.addEventListener("mouseleave", onHoverLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseenter", onMouseEnter);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onHoverEnter);
        el.removeEventListener("mouseleave", onHoverLeave);
      });
    };
  }, []);

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999]">
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full opacity-0 mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={cursorFollowerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-primary rounded-full opacity-0 mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
}
