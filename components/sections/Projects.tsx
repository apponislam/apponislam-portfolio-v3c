"use client";

import { useState, useEffect, useRef } from "react";
import { projects } from "../../app/data/index";
import gsap from "gsap";
import { ExternalLink, CodeXml, Filter, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const categories = ["All", "Full Stack", "Frontend", "Backend"];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projects.filter((project) =>
    filter === "All" ? true : project.category === filter
  );

  useEffect(() => {
    if (!filteredProjects || filteredProjects.length === 0) return;

    const ctx = gsap.context(() => {
      // Re-animate grid items when filter changes or initially
      gsap.fromTo(
        ".project-card",
        { opacity: 0, scale: 0.9, y: 20 },
        { 
          opacity: 1, 
          scale: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, [filter, filteredProjects]);

  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className="section-padding bg-secondary/30 text-center">
        <p className="text-muted-foreground">No projects data available.</p>
      </section>
    );
  }

  return (
    <section id="projects" ref={containerRef} className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Selected Projects</h2>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                A showcase of my recent work across various domains, from complex web applications to interactive frontends.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 p-2 bg-background rounded-full border border-border/50">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                    filter === cat
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card group relative bg-background rounded-3xl overflow-hidden border border-border/50 hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      aria-label="View Source Code"
                    >
                      <CodeXml className="w-6 h-6" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
