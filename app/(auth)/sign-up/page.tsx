import Link from "next/link";
import { UserPlus } from "lucide-react";

export default function SignUpPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 text-center">
        <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white shadow-lg mb-2">
          <UserPlus className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Create an account</h1>
        <p className="text-sm text-muted-foreground">
          Enter your details below to register as a new administrator.
        </p>
      </div>
      
      <form className="flex flex-col gap-4 mt-2">
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none" htmlFor="fullName">
            Full Name
          </label>
          <input 
            type="text" 
            id="fullName" 
            placeholder="John Doe"
            className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium leading-none" htmlFor="email">
            Email address
          </label>
          <input 
            type="email" 
            id="email" 
            placeholder="name@example.com"
            className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none" htmlFor="password">
            Password
          </label>
          <input 
            type="password" 
            id="password" 
            placeholder="••••••••"
            className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
          />
        </div>

        <button 
          className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-2 w-full shadow-md shadow-primary/20 transition-colors"
        >
          Register Account
        </button>
      </form>
      
      <div className="mt-4 text-center text-sm">
        <span className="text-muted-foreground">Already have an account? </span>
        <Link href="/sign-in" className="font-semibold text-primary hover:underline underline-offset-4">
          Sign in
        </Link>
      </div>
    </div>
  );
}
