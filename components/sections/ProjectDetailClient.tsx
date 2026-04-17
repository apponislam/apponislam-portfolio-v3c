"use client";

import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import Image from "next/image";
import { CodeXml, ArrowLeft, CheckCircle2, Globe, Cpu, Layers, ShieldCheck, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function ProjectDetailClient({ project }: { project: any }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const images = project ? [project.image, ...(project.gallery || [])] : [];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        if (sliderRef.current) {
            gsap.to(sliderRef.current, {
                x: `-${currentImageIndex * 100}%`,
                duration: 0.8,
                ease: "power3.inOut",
            });
        }
    }, [currentImageIndex]);

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <div className="pt-24 lg:pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6 space-y-16">
                    {/* Header */}
                    <div className="space-y-6">
                        <Link href="/#projects" className="inline-flex items-center gap-2 text-primary font-bold hover:underline group text-xs uppercase tracking-widest">
                            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                            Back to Showcase
                        </Link>

                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                            <div className="space-y-3 max-w-3xl">
                                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-black uppercase tracking-widest text-[9px]">
                                    <Zap className="w-2.5 h-2.5" />
                                    <span>{project.category} Solution</span>
                                </div>
                                <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">{project.title}</h1>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl font-medium">{project.description}</p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20 text-xs">
                                    <Globe className="w-3.5 h-3.5" />
                                    Live Preview
                                </a>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground rounded-xl font-bold border border-border/50 hover:bg-secondary/80 hover:scale-105 transition-all text-xs">
                                    <CodeXml className="w-3.5 h-3.5" />
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Modern Slider Gallery */}
                    <div className="relative group">
                        <div className="relative aspect-21/9 rounded-4xl overflow-hidden border border-border/40 shadow-2xl bg-secondary/20">
                            <div ref={sliderRef} className="flex h-full w-full">
                                {images.map((img, index) => (
                                    <div key={index} className="relative shrink-0 w-full h-full">
                                        <Image src={img} alt={`${project.title} slide ${index + 1}`} fill className="object-cover" priority={index === 0} />
                                    </div>
                                ))}
                            </div>

                            {/* Slider Controls */}
                            {images.length > 1 && (
                                <>
                                    <button onClick={prevImage} className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/20 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-background/40 active:scale-90">
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button onClick={nextImage} className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/20 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-background/40 active:scale-90">
                                        <ChevronRight className="w-6 h-6" />
                                    </button>

                                    {/* Indicators */}
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                                        {images.map((_, index) => (
                                            <button key={index} onClick={() => setCurrentImageIndex(index)} className={`w-1.5 h-1.5 rounded-full transition-all ${currentImageIndex === index ? "bg-primary w-6" : "bg-white/40"}`} />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Integrated Content Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-8 space-y-12">
                            {/* Overview */}
                            <section className="space-y-4">
                                <h2 className="text-xl font-bold tracking-tight">Technical Overview</h2>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-medium">{project.fullDescription}</p>
                                <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50 italic text-xs md:text-sm text-muted-foreground leading-relaxed">&ldquo;{project.challenges}&rdquo;</div>
                            </section>

                            {/* Features */}
                            <section className="space-y-6">
                                <h2 className="text-xl font-bold tracking-tight">Key Capabilities</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {project.keyFeatures.map((feature: any, index: number) => {
                                        const [title, desc] = feature.split(": ");
                                        return (
                                            <div key={index} className="flex gap-4 p-4 rounded-2xl border border-border/40 hover:border-primary/20 transition-all group">
                                                <div className="shrink-0 w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                                    <CheckCircle2 className="w-4 h-4" />
                                                </div>
                                                <div className="space-y-0.5">
                                                    <h3 className="text-sm font-bold tracking-tight">{title}</h3>
                                                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar Metadata */}
                        <div className="lg:col-span-4 space-y-6 sticky top-32">
                            <div className="p-6 rounded-2xl glass border border-border/40 space-y-6">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest">
                                        <Cpu className="w-3 h-3" />
                                        <span>Tech Stack</span>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.technologies.map((tech: any, index: number) => (
                                            <span key={index} className="px-2.5 py-1 bg-background border border-border/50 rounded-md text-[10px] font-bold text-muted-foreground">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3 pt-6 border-t border-border/30">
                                    <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest">
                                        <Layers className="w-3 h-3" />
                                        <span>Architecture</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground leading-relaxed font-medium">{project.architecture}</p>
                                </div>

                                <div className="space-y-3 pt-6 border-t border-border/30">
                                    <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest">
                                        <ShieldCheck className="w-3 h-3" />
                                        <span>Engineering Role</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground leading-relaxed font-medium">Lead Developer overseeing full-stack implementation and API design.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
