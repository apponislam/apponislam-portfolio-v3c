"use client";

import { useEffect, useRef } from "react";
import { services, testimonials } from "../../app/data/index";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layout, Server, Palette, Quote, Star } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const icons: { [key: string]: any } = {
  Layout,
  Server,
  Palette,
};

export function ExtraSections() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal services
      gsap.fromTo(".service-card", 
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      );

      // Reveal testimonials
      gsap.fromTo(".testimonial-card", 
        { scale: 0.9, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".testimonials-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* Services Section */}
      <section id="services" className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">My Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I offer comprehensive solutions for modern web development, from conceptual design to scalable backend architectures.
              </p>
            </div>

            <div className="services-grid grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = icons[service.icon];
                return (
                  <div
                    key={index}
                    className="service-card group p-10 rounded-3xl bg-background border border-border/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="p-4 bg-primary/10 rounded-2xl w-fit mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-background">
        <div className="container-wide">
          <div className="space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">What Clients Say</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Trusted by industry leaders and startups alike, I strive for excellence in every project.
              </p>
            </div>

            <div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-card relative p-10 rounded-3xl bg-secondary/20 border border-border/50 hover:shadow-2xl transition-all duration-500"
                >
                  <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10" />
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-xl italic leading-relaxed text-foreground/80 mb-8">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
