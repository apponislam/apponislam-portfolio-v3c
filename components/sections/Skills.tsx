"use client";

import { useEffect, useRef } from "react";
import { skills } from "../../app/data/index";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Database, Layers, MessageSquare, ShieldCheck, Users, Zap, Cpu, Workflow, Cloud } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const skillIcons: { [key: string]: { icon: string; color: string } } = {
    // Frontend
    HTML: { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg", color: "#E34F26" },
    CSS: { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg", color: "#1572B6" },
    Bootstrap: { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg", color: "#7952B3" },
    "Tailwind CSS": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "#06B6D4" },
    JavaScript: { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg", color: "#F7DF1E" },
    TypeScript: { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg", color: "#3178C6" },
    "React.js": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
    "Next.js": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#000000" },
    Redux: { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", color: "#764ABC" },

    // Backend
    "Node.js": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg", color: "#339933" },
    "Express.js": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#000000" },
    MongoDB: { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg", color: "#47A248" },
    PostgreSQL: { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg", color: "#4169E1" },
    Prisma: { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", color: "#2D3748" },
    "Socket.IO": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg", color: "#010101" },
    Firebase: { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "#FFCA28" },

    // Tools & Others
    Git: { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg", color: "#F05032" },
    GitHub: { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#181717" },
    Nginx: { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", color: "#009639" },
    Vercel: { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", color: "#000000" },
    Postman: { icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", color: "#FF6C37" },
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
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">My Tech Stack</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">I specialize in a wide range of modern web technologies, from frontend frameworks to backend systems and infrastructure.</p>
                    </div>

                    <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                        {skills.map((skill, index) => {
                            const skillData = skillIcons[skill];
                            const FallbackIcon = lucideFallbacks[skill] || CheckCircle2;

                            return (
                                <div key={index} className="skill-item group relative p-5 rounded-2xl glass hover:border-primary/50 transition-all duration-500 flex flex-col items-center gap-3 text-center cursor-default overflow-hidden">
                                    {/* Background Glow */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl" style={{ backgroundColor: skillData?.color || "var(--primary)" }} />

                                    <div className="relative w-12 h-12 flex items-center justify-center p-2.5 bg-secondary/50 rounded-xl group-hover:bg-background transition-all duration-500 shadow-inner overflow-hidden">
                                        {skillData ? (
                                            <div className="relative w-full h-full flex items-center justify-center">
                                                <Image src={skillData.icon} alt={skill} fill className="object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 dark:invert-[0.1] dark:group-hover:invert-0" />
                                            </div>
                                        ) : (
                                            <FallbackIcon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
                                        )}
                                    </div>
                                    <span className="relative text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors duration-500">{skill}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
