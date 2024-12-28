import React from "react";
import Navbar from "@/app/dashboard/_components/Header";
import Footer from "./_components/Footer";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="pt-[70px]">{children}</div>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
