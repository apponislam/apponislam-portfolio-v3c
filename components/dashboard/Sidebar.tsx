"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FolderOpenDot,
  FileText,
  Briefcase,
  GraduationCap,
  Wrench,
  LineChart,
  MessageSquare,
  Activity,
} from "lucide-react";

const navigation = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Skills", href: "/dashboard/skills", icon: LineChart },
  { name: "Projects", href: "/dashboard/projects", icon: FolderOpenDot },
  { name: "Experiences", href: "/dashboard/experiences", icon: Briefcase },
  { name: "Educations", href: "/dashboard/educations", icon: GraduationCap },
  { name: "Services", href: "/dashboard/services", icon: Wrench },
  { name: "Blogs", href: "/dashboard/blogs", icon: FileText },
  { name: "Contacts", href: "/dashboard/contacts", icon: MessageSquare },
  { name: "Audit Logs", href: "/dashboard/audit", icon: Activity },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex flex-col w-64 lg:w-72 bg-card/40 backdrop-blur-xl border-r border-border/50 relative z-20">
      <div className="flex h-16 items-center px-6 border-b border-border/50 mb-4">
        <Link href="/" className="flex items-center gap-3 font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">
          <div className="p-1.5 rounded-lg bg-gradient-to-br from-primary to-purple-600 shadow-md shadow-primary/20">
             <LayoutDashboard className="h-5 w-5 text-white" />
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">Admin<span className="font-light">Panel</span></span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar px-3">
        <nav className="grid items-start gap-1 pb-4 text-sm font-medium">
          <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/60 mb-1">
             Main Menu
          </div>
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-300 group",
                  isActive
                    ? "bg-primary/10 text-primary font-semibold shadow-sm overflow-hidden"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                )}
              >
                {isActive && (
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-purple-500 rounded-r-md shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                )}
                <item.icon className={cn("h-[18px] w-[18px] transition-transform duration-300", isActive ? "scale-110" : "group-hover:scale-110")} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Modern Bottom Profile Widget */}
      <div className="p-4 mt-auto border-t border-border/50">
         <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer border border-transparent hover:border-border/50">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center text-white font-bold shadow-md">
               A
            </div>
            <div className="flex-1 overflow-hidden">
               <p className="text-sm font-semibold truncate">Appon Islam</p>
               <p className="text-xs text-muted-foreground truncate">appon@example.com</p>
            </div>
         </div>
      </div>
    </div>
  );
}
