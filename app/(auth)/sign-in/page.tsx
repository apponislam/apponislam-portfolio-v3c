import Link from "next/link";
import { LayoutDashboard } from "lucide-react";

export default function SignInPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 text-center">
        <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white shadow-lg mb-2">
          <LayoutDashboard className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
        <p className="text-sm text-muted-foreground">
          Enter your credentials to access your dashboard.
        </p>
      </div>
      
      <form className="flex flex-col gap-4 mt-2">
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
            Email address
          </label>
          <input 
            type="email" 
            id="email" 
            placeholder="name@example.com"
            className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password">
              Password
            </label>
            <Link href="/forgot-password" className="text-xs font-semibold text-primary hover:underline underline-offset-4">
              Forgot password?
            </Link>
          </div>
          <input 
            type="password" 
            id="password" 
            placeholder="••••••••"
            className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
          />
        </div>

        <button 
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-2 w-full shadow-md shadow-primary/20"
        >
          Sign In
        </button>
      </form>
      
      <div className="mt-4 text-center text-sm">
        <span className="text-muted-foreground">Don&apos;t have an admin account? </span>
        <Link href="/sign-up" className="font-semibold text-primary hover:underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </div>
  );
}
