import { ReactNode } from "react";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { CustomCursor } from "@/components/common/CustomCursor";

export default function RootPortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <CustomCursor />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
