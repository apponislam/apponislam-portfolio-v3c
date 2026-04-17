"use client";

import { useState, useEffect, useRef } from "react";
import { projects } from "../../app/data/index";
import gsap from "gsap";
import { ExternalLink, CodeXml, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const categories = ["All", "Full Stack", "Frontend", "Backend"];

export function Projects() {
    const [filter, setFilter] = useState("All");
    const containerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    const filteredProjects = projects.filter((project) => (filter === "All" ? true : project.category === filter));

    useEffect(() => {
        if (!filteredProjects || filteredProjects.length === 0) return;

        const ctx = gsap.context(() => {
            // Re-animate grid items when filter changes or initially
            gsap.fromTo(
                ".project-card",
                { opacity: 0, scale: 0.95, y: 20 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.08,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 95%",
                        toggleActions: "play none none none",
                    },
                },
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
                            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">A showcase of my recent work across various domains, from complex web applications to interactive frontends.</p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 p-2 bg-background rounded-full border border-border/50">
                            {categories.map((cat) => (
                                <button key={cat} onClick={() => setFilter(cat)} className={cn("px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300", filter === cat ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:bg-secondary hover:text-foreground")}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="flex overflow-x-auto pb-12 hide-scrollbar gap-6 snap-x snap-mandatory">
                            {filteredProjects.map((project) => (
                                <div key={project.id} className="project-card group relative shrink-0 w-75 md:w-112.5 snap-start bg-background rounded-2xl overflow-hidden border border-border/40 hover:border-primary/30 transition-all duration-500">
                                    <div className="relative aspect-16/10 overflow-hidden">
                                        <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
                                        <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[1px] z-10 flex items-center justify-center gap-3">
                                            <Link href={`/projects/${project.id}`} className="p-2.5 bg-primary text-white rounded-lg hover:scale-110 active:scale-95 transition-all">
                                                <Eye className="w-4 h-4" />
                                            </Link>
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-background text-foreground rounded-lg border border-border/50 hover:scale-110 active:scale-95 transition-all">
                                                <CodeXml className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="p-5 space-y-3">
                                        <div className="flex items-center justify-between gap-4">
                                            <Link href={`/projects/${project.id}`}>
                                                <h3 className="text-lg font-bold tracking-tight hover:text-primary transition-colors">{project.title}</h3>
                                            </Link>
                                            <span className="text-[9px] font-black uppercase tracking-tighter text-primary px-2 py-0.5 bg-primary/5 rounded-md border border-primary/10">{project.category}</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed font-medium">{project.description}</p>
                                        <div className="flex flex-wrap gap-1.5 pt-1">
                                            {project.tags.slice(0, 3).map((tag) => (
                                                <span key={tag} className="text-[9px] font-bold px-2 py-0.5 bg-secondary/30 text-muted-foreground/80 rounded-md border border-border/30">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
