import React from "react";
import Navbar from "@/app/dashboard/_components/Header";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="pt-[70px]">{children}</div>
    </div>
  );
}

export default DashboardLayout;
