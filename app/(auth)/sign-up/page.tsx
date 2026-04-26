import Link from "next/link";
import { User, Mail, Lock, Sparkles } from "lucide-react";

export default function SignUpPage() {
  return (
    <div className="flex flex-col gap-6">
      
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight">Register.</h2>
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          Create an administrative account to configure your portfolio backend.
        </p>
      </div>
      
      <form className="flex flex-col gap-5 mt-2">
        
        <div className="space-y-1">
          <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-2" htmlFor="fullName">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input 
              type="text" 
              id="fullName" 
              placeholder="John Doe"
              className="flex h-14 w-full rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 px-12 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007BFF] focus-visible:border-transparent placeholder:text-zinc-400 dark:text-white"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-2" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input 
              type="email" 
              id="email" 
              placeholder="you@example.com"
              className="flex h-14 w-full rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 px-12 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007BFF] focus-visible:border-transparent placeholder:text-zinc-400 dark:text-white"
            />
          </div>
        </div>
        
        <div className="space-y-1">
          <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input 
              type="password" 
              id="password" 
              placeholder="••••••••"
              className="flex h-14 w-full rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-950 px-12 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007BFF] focus-visible:border-transparent placeholder:text-zinc-400 dark:text-white"
            />
          </div>
        </div>

        <button 
          className="group inline-flex items-center justify-center rounded-full text-base font-bold bg-[#007BFF] text-white hover:bg-[#0056b3] h-14 px-4 py-2 mt-2 w-full shadow-[0_8px_20px_rgba(0,123,255,0.3)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.4)] hover:-translate-y-0.5 transition-all"
        >
          Create Account
          <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
        </button>
      </form>
      
      <div className="mt-2 text-center text-sm font-medium">
        <span className="text-zinc-500">Already registered? </span>
        <Link href="/sign-in" className="text-[#007BFF] hover:text-[#0056b3] transition-colors font-bold">
          Sign In
        </Link>
      </div>
    </div>
  );
}
