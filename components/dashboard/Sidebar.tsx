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
} from "lucide-react";

const navigation = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/dashboard/projects", icon: FolderOpenDot },
  { name: "Blogs", href: "/dashboard/blogs", icon: FileText },
  { name: "Experiences", href: "/dashboard/experiences", icon: Briefcase },
  { name: "Educations", href: "/dashboard/educations", icon: GraduationCap },
  { name: "Services", href: "/dashboard/services", icon: Wrench },
  { name: "Skills", href: "/dashboard/skills", icon: LineChart },
  { name: "Contacts", href: "/dashboard/contacts", icon: MessageSquare },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden border-r bg-card md:block md:w-64 lg:w-72">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold text-primary">
            <LayoutDashboard className="h-6 w-6" />
            <span className="">Portfolio Admin</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4 mt-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all my-1",
                    isActive
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
