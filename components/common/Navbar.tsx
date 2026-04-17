"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import gsap from "gsap";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Blog", href: "/#blog" },
    { name: "Contact", href: "/#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // Reset any existing animations
        gsap.set(".nav-item", { clearProps: "all" });

        gsap.fromTo(
            ".nav-item",
            {
                y: -20,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.2,
            },
        );
    }, [pathname]); // Re-run animation when route changes to ensure visibility

    return (
        <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4", scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3" : "bg-transparent")}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                    AI<span className="text-primary">.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    <div className="flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="nav-item text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <ThemeToggle />
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center space-x-4">
                    <ThemeToggle />
                    <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-muted-foreground hover:text-primary transition-colors" aria-label="Toggle menu">
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div className={cn("fixed inset-0 top-18 bg-background/95 backdrop-blur-lg z-40 md:hidden transition-transform duration-300 ease-in-out transform", isOpen ? "translate-x-0" : "translate-x-full")}>
                <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-muted-foreground hover:text-primary transition-colors">
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
