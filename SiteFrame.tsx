import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
