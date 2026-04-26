import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CustomCursor } from "@/components/common/CustomCursor";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen text-foreground selection:bg-primary/30 selection:text-primary">
      <CustomCursor />
      
      {/* Figma 50/50 Split Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        
        {/* Left Side: Illustration Panel */}
        <div className="hidden md:flex flex-col items-center justify-center bg-white dark:bg-zinc-950 p-12 relative overflow-hidden">
          {/* Back button strictly on left */}
          <Link href="/" className="absolute top-10 left-10 flex items-center gap-2 group text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors z-20">
            <div className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 group-hover:border-zinc-400 dark:group-hover:border-zinc-600 transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="font-semibold text-sm">Back to Portfolio</span>
          </Link>

          <div className="text-center z-10 max-w-sm mb-10 mt-10">
            <h1 className="text-3xl font-black text-zinc-900 dark:text-white mb-4">
              Welcome back to your dashboard.
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium">
              Manage your entire portfolio network, handle contacts seamlessly, and track active traffic inside.
            </p>
          </div>

          <div className="relative w-full max-w-lg aspect-square">
             {/* Using the generated illustration */}
             <Image 
               src="/auth_illustration.png" 
               alt="Developer Environment" 
               fill 
               className="object-contain drop-shadow-2xl animate-in fade-in zoom-in duration-1000"
             />
          </div>
        </div>

        {/* Right Side: Auth Form Panel */}
        <div className="flex items-center justify-center bg-[#007BFF] dark:bg-blue-900 p-6 relative overflow-hidden">
          
          {/* Decorative Geometric Vectors typical of Figma templates */}
          <div className="absolute top-[-10%] right-[-10%] w-[50%] pt-[50%] rounded-full border border-white/20 pointer-events-none" />
          <div className="absolute bottom-[20%] left-[-20%] w-[70%] pt-[70%] rounded-full border border-white/10 pointer-events-none" />
          <div className="absolute top-[20%] left-[20%] w-4 h-4 rounded-full bg-white/20 pointer-events-none" />
          <div className="absolute bottom-[10%] right-[30%] w-8 h-8 rounded-full bg-white/10 pointer-events-none" />

          {/* Form Chassis Container */}
          <div className="w-full max-w-[420px] bg-white dark:bg-zinc-900 rounded-[32px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative z-10 animate-in slide-in-from-right-12 duration-700">
             
            {/* Mobile back button (only visible on small screens since left panel hides) */}
            <Link href="/" className="md:hidden flex items-center gap-2 group text-zinc-500 mb-6 w-max hover:text-black dark:hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold text-sm">Back</span>
            </Link>

            {children}

          </div>

        </div>

      </div>
    </div>
  );
}
