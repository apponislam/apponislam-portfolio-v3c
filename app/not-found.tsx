"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Home, ArrowLeft, Ghost } from "lucide-react";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating ghost animation
      gsap.to(ghostRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Reveal content
      gsap.from(".not-found-content > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-background p-6 overflow-hidden relative"
    >
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="not-found-content text-center space-y-12 relative z-10">
        <div ref={ghostRef} className="relative inline-block">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
          <Ghost className="w-32 h-32 md:w-48 md:h-48 text-primary relative z-10 animate-pulse" />
        </div>

        <div className="space-y-4">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-primary/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none">
            404
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Lost in Space?</h2>
          <p className="text-xl text-muted-foreground max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been moved, deleted, or never existed in this dimension.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link
            href="/"
            className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-2xl font-bold border border-border/50 transition-all hover:bg-secondary/80 hover:scale-105 active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}
