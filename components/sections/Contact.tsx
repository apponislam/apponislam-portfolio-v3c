"use client";

import { useState, useEffect, useRef } from "react";
import { personalInfo } from "../../app/data/index";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin, Send, MessageSquare, User, AtSign, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal items on scroll
      gsap.fromTo(".contact-item", 
        { x: -50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".contact-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      );

      gsap.fromTo(".contact-form", 
        { x: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".contact-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Data:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" ref={containerRef} className="section-padding bg-background overflow-hidden">
      <div className="container-wide">
        <div className="space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? Let&apos;s build something amazing together. Reach out and I&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <div className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="contact-item group relative p-8 rounded-[32px] glass hover:border-primary/50 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
                
                <div className="relative flex items-center gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60">Email Me</p>
                    <h3 className="text-xl font-bold tracking-tight">{personalInfo?.email || "No email available"}</h3>
                    <a href={`mailto:${personalInfo?.email}`} className="inline-block text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
                      Send a message →
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-item group relative p-8 rounded-[32px] glass hover:border-primary/50 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
                
                <div className="relative flex items-center gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60">Location</p>
                    <h3 className="text-xl font-bold tracking-tight">{personalInfo?.location || "No location available"}</h3>
                    <p className="text-sm font-semibold text-muted-foreground">Available for remote work</p>
                  </div>
                </div>
              </div>

              <div className="contact-item group relative p-8 rounded-[32px] glass hover:border-primary/50 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
                
                <div className="relative flex items-center gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60">Call Me</p>
                    <h3 className="text-xl font-bold tracking-tight">+880 1234 567 890</h3>
                    <p className="text-sm font-semibold text-muted-foreground">Mon - Fri, 9am - 6pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form bg-secondary/20 border border-border/50 rounded-[40px] p-8 md:p-12 shadow-2xl relative">
              {isSuccess && (
                <div className="absolute inset-0 bg-background/90 backdrop-blur-sm z-10 rounded-[40px] flex flex-col items-center justify-center p-8 text-center space-y-4">
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center">
                    <Send className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold">Message Sent!</h3>
                  <p className="text-muted-foreground text-lg">Thank you for reaching out. I&apos;ll get back to you shortly.</p>
                  <button onClick={() => setIsSuccess(false)} className="text-primary font-bold hover:underline pt-4">Send another message</button>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <User className="w-4 h-4" /> Name
                    </label>
                    <input
                      {...register("name")}
                      className={cn(
                        "w-full bg-background border border-border/50 rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all",
                        errors.name && "border-destructive focus:ring-destructive"
                      )}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-xs font-medium text-destructive">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <AtSign className="w-4 h-4" /> Email
                    </label>
                    <input
                      {...register("email")}
                      className={cn(
                        "w-full bg-background border border-border/50 rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all",
                        errors.email && "border-destructive focus:ring-destructive"
                      )}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-xs font-medium text-destructive">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" /> Subject
                  </label>
                  <input
                    {...register("subject")}
                    className={cn(
                      "w-full bg-background border border-border/50 rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all",
                      errors.subject && "border-destructive focus:ring-destructive"
                    )}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && <p className="text-xs font-medium text-destructive">{errors.subject.message}</p>}
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" /> Message
                  </label>
                  <textarea
                    {...register("message")}
                    rows={6}
                    className={cn(
                      "w-full bg-background border border-border/50 rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all resize-none",
                      errors.message && "border-destructive focus:ring-destructive"
                    )}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && <p className="text-xs font-medium text-destructive">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-5 bg-primary text-primary-foreground rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 overflow-hidden group",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
