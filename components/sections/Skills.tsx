"use client";

import { useEffect, useRef } from "react";
import { skills } from "../../app/data/index";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Database, Layers, MessageSquare, ShieldCheck, Users, Zap, Cpu, Workflow, Cloud } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const skillIcons: { [key: string]: any } = {
    // Frontend
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    Redux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",

    // Backend
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    Prisma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    "Socket.IO": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",

    // Tools & Others
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    Nginx: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    Vercel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    Postman: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
};

const lucideFallbacks: { [key: string]: any } = {
    "REST API": Workflow,
    "RTK Query": Zap,
    Mongoose: Database,
    SQL: Database,
    NoSQL: Database,
    "CI/CD": Layers,
    Netlify: Cloud,
    "Creative Problem Solving": Cpu,
    "Time Management": ShieldCheck,
    Teamwork: Users,
    Professionalism: ShieldCheck,
    "Effective Communication": MessageSquare,
};

export function Skills() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!skills || skills.length === 0) return;

        const ctx = gsap.context(() => {
            // Animate items on scroll
            gsap.fromTo(
                ".skill-item",
                { opacity: 0, scale: 0.9, y: 15 },
                {
                    scrollTrigger: {
                        trigger: ".skills-grid",
                        start: "top 95%",
                        toggleActions: "play none none none",
                    },
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    stagger: 0.03,
                    ease: "power2.out",
                },
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    if (!skills || skills.length === 0) {
        return (
            <section id="skills" className="section-padding bg-background text-center">
                <p className="text-muted-foreground">No skills data available.</p>
            </section>
        );
    }

    return (
        <section id="skills" ref={containerRef} className="section-padding bg-background overflow-hidden">
            <div className="container-wide">
                <div className="space-y-16">
                    <div className="text-center space-y-6">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">My Tech Stack</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">I specialize in a wide range of modern web technologies, from frontend frameworks to backend systems and infrastructure.</p>
                    </div>

                    <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
                        {skills.map((skill, index) => {
                            const iconUrl = skillIcons[skill];
                            const FallbackIcon = lucideFallbacks[skill] || CheckCircle2;

                            return (
                                <div key={index} className="skill-item group p-6 rounded-2xl bg-secondary/30 hover:bg-primary transition-all duration-300 flex flex-col items-center gap-4 text-center cursor-default border border-border/50 hover:scale-105">
                                    <div className="relative w-12 h-12 flex items-center justify-center p-2 bg-background rounded-xl group-hover:bg-primary-foreground/10 transition-colors shadow-inner overflow-hidden">
                                        {iconUrl ? (
                                            <div className="relative w-full h-full flex items-center justify-center">
                                                <Image src={iconUrl} alt={skill} fill className="object-contain group-hover:brightness-0 group-hover:invert transition-all" />
                                            </div>
                                        ) : (
                                            <FallbackIcon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                                        )}
                                    </div>
                                    <span className="text-sm font-bold text-muted-foreground group-hover:text-primary-foreground transition-colors">{skill}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
