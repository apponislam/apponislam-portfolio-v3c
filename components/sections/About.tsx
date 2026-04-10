"use client";

import { useEffect, useRef } from "react";
import { personalInfo, experience, education } from "../../app/data/index";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Download, GraduationCap, Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal items on scroll
      gsap.from(".about-content > *", {
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Timeline items reveal
      gsap.from(".timeline-item", {
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        x: (index) => (index % 2 === 0 ? -50 : 50),
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (!personalInfo) {
    return (
      <section id="about" className="section-padding bg-secondary/30 text-center">
        <p className="text-muted-foreground">No about data available.</p>
      </section>
    );
  }

  return (
    <section id="about" ref={containerRef} className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Professional Summary */}
          <div className="about-content space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">About Me</h2>
              <div className="h-1.5 w-20 bg-primary rounded-full" />
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              I am a passionate <span className="text-foreground font-semibold">Full Stack Developer</span> with over 5 years of experience in crafting high-performance web applications. My expertise lies in building scalable backends and intuitive, animated frontends that provide exceptional user experiences.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              I thrive on solving complex technical challenges and staying at the forefront of modern web technologies. My approach combines technical excellence with a keen eye for design and user behavior.
            </p>

            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold transition-all hover:scale-105 active:scale-95 group"
            >
              <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </a>
          </div>

          {/* Timeline */}
          <div className="timeline-container space-y-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>
              
              <div className="space-y-8 border-l-2 border-border/50 ml-6 pl-8 relative">
                {experience.map((item, index) => (
                  <div key={index} className="timeline-item relative">
                    <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                    <div className="space-y-2 p-6 rounded-2xl bg-background border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-sm font-medium text-primary">{item.period}</span>
                      <h4 className="text-xl font-bold">{item.title}</h4>
                      <p className="text-muted-foreground font-medium">{item.company}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 pt-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              
              <div className="space-y-8 border-l-2 border-border/50 ml-6 pl-8 relative">
                {education.map((item, index) => (
                  <div key={index} className="timeline-item relative">
                    <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                    <div className="space-y-2 p-6 rounded-2xl bg-background border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-sm font-medium text-primary">{item.period}</span>
                      <h4 className="text-xl font-bold">{item.degree}</h4>
                      <p className="text-muted-foreground font-medium">{item.institution}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
