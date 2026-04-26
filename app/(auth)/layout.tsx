import { ReactNode } from "react";
import Link from "next/link";
import { CustomCursor } from "@/components/common/CustomCursor";
import { ArrowLeft } from "lucide-react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 bg-background overflow-hidden selection:bg-primary/30 selection:text-primary">
      <CustomCursor />
      
      {/* Decorative interactive background */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px] pointer-events-none" />

      {/* Back button */}
      <Link href="/" className="absolute top-6 left-6 md:top-10 md:left-10 flex items-center gap-2 group text-muted-foreground hover:text-foreground transition-colors z-20">
        <div className="p-2 rounded-full border border-border/50 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        </div>
        <span className="font-medium text-sm">Back to Portfolio</span>
      </Link>

      {/* Auth Container */}
      <div className="w-full max-w-md z-10 glass border-border/50 rounded-2xl shadow-2xl p-8 relative animate-in fade-in zoom-in-95 duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none" />
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}
