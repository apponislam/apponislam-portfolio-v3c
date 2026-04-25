import { User, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export function Topbar() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-card px-4 lg:h-[60px] lg:px-6">
      <button className="md:hidden p-2 text-muted-foreground hover:text-foreground">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </button>
      <div className="w-full flex-1">
        {/* Can add search here later */}
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
          <User className="h-4 w-4" />
          <span className="sr-only">Toggle user menu</span>
        </div>
      </div>
    </header>
  );
}
