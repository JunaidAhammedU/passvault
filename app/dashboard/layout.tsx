import React from "react";
import Navbar from "@/app/dashboard/_components/Header";
import Footer from "./_components/Footer";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-10 md:mt-24">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
