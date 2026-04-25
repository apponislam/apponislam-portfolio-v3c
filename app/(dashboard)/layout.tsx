import { ReactNode } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Topbar } from "@/components/dashboard/Topbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-full bg-background overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 w-full max-w-full h-full overflow-hidden">
        <Topbar />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}
