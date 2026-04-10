"use client";

import { useEffect, useRef } from "react";
import { personalInfo } from "../../app/data/index";
import gsap from "gsap";
import { CodeXml, UserCircle, Send, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const icons: { [key: string]: any } = {
  CodeXml,
  UserCircle,
  Send,
};

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(imageRef.current,
        { scale: 0.8, opacity: 0, rotate: -5 },
        { scale: 1, opacity: 1, rotate: 0, duration: 1.5, ease: "elastic.out(1, 0.5)" }
      )
      .fromTo(titleRef.current, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }, "-=1"
      )
      .fromTo(subtitleRef.current, 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }, "-=0.8"
      )
      .fromTo(ctaRef.current, 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }, "-=0.6"
      )
      .fromTo(socialRef.current, 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }, "-=0.4"
      );

      // Floating image motion
      gsap.to(imageRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Floating background motion
      gsap.to(".bg-blob", {
        x: "random(-20, 20)",
        y: "random(-20, 20)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] bg-blob" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] bg-blob" />

      <div className="container-wide relative z-10 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-10 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm tracking-wide">
                <Sparkles className="w-4 h-4" />
                <span>Available for New Projects</span>
              </div>
              
              <h1 
                ref={titleRef}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] lg:leading-[0.85]"
              >
                Hi, I&apos;m <br />
                <span className="text-primary">{personalInfo?.name || "Developer"}</span>
              </h1>
              
              <p 
                ref={subtitleRef}
                className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
              >
                {personalInfo?.tagline || "Building high-performance applications"}
              </p>
            </div>

            <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <Link 
                href="#projects" 
                className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-2 overflow-hidden shadow-lg shadow-primary/25"
              >
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#contact" 
                className="px-8 py-4 bg-secondary text-secondary-foreground rounded-2xl font-bold border border-border/50 transition-all hover:bg-secondary/80 hover:scale-105 active:scale-95"
              >
                Contact Me
              </Link>
            </div>

            <div ref={socialRef} className="flex items-center justify-center lg:justify-start gap-6">
              {personalInfo.socials.map((social) => {
                const Icon = icons[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-secondary/50 hover:bg-primary hover:text-primary-foreground border border-border/50 transition-all duration-300 group hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div 
              ref={imageRef}
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]"
            >
              {/* Decorative Rings */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-[40px] rotate-6 scale-105" />
              <div className="absolute inset-0 border-2 border-primary/10 rounded-[40px] -rotate-3 scale-110" />
              
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-[40px] overflow-hidden border-4 border-background shadow-2xl">
                <Image
                  src={personalInfo?.profileImage || ""}
                  alt={personalInfo?.name || "Profile"}
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent mix-blend-overlay" />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-3xl border border-border/50 shadow-2xl hidden md:block">
                <p className="text-3xl font-bold text-primary leading-none">5+</p>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Years of<br />Exp.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
