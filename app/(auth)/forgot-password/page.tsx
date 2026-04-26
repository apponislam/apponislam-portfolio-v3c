import Link from "next/link";
import { KeyRound } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 text-center">
        <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white shadow-lg mb-2">
          <KeyRound className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Reset password</h1>
        <p className="text-sm text-muted-foreground max-w-xs mx-auto">
          Enter your email address and we&apos;ll send you a link to reset your password.
        </p>
      </div>
      
      <form className="flex flex-col gap-4 mt-4">
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

        <button 
          className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-2 w-full shadow-md shadow-primary/20 transition-colors"
        >
          Send Reset Link
        </button>
      </form>
      
      <div className="mt-6 text-center text-sm">
        <Link href="/sign-in" className="font-semibold flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
          Return to sign in
        </Link>
      </div>
    </div>
  );
}
