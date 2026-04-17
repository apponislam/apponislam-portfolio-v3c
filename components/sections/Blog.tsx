"use client";

import { useEffect, useRef } from "react";
import { blogs } from "../../app/data/index";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function Blog() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Reveal items on scroll
            gsap.fromTo(
                ".blog-card",
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: ".blog-grid",
                        start: "top 95%",
                        toggleActions: "play none none none",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power2.out",
                },
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="blog" ref={containerRef} className="section-padding bg-background">
            <div className="container-wide">
                <div className="space-y-16">
                    <div className="text-center space-y-6">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Latest Articles</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">Exploring the frontiers of web development, sharing insights, and documenting my journey through code.</p>
                    </div>

                    <div className="blog-grid grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {blogs.map((blog) => (
                            <div key={blog.id} className="blog-card group relative bg-secondary/20 rounded-3xl overflow-hidden border border-border/50 hover:shadow-2xl transition-all duration-500 flex flex-col">
                                <div className="relative h-64 overflow-hidden">
                                    <Image src={blog.image} alt={blog.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                <div className="p-8 flex-1 flex flex-col space-y-6">
                                    <div className="flex items-center gap-6 text-sm text-muted-foreground font-medium">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-primary" />
                                            <span>{blog.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <User className="w-4 h-4 text-primary" />
                                            <span>Appon Islam</span>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors leading-tight">{blog.title}</h3>

                                    <p className="text-muted-foreground leading-relaxed flex-1">{blog.excerpt}</p>

                                    <Link href={`/blog/${blog.slug}`} className="inline-flex items-center gap-2 text-primary font-bold group/link">
                                        Read More
                                        <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center pt-8">
                        <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-semibold border border-border/50 hover:bg-secondary/80 transition-all">View All Articles</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
