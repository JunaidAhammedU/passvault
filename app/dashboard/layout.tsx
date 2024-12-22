import React from "react";
import Navbar from "@/components/ui/Header";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="pt-20 px-10 md:px-20 lg:px-40 xl:px-60">{children}</div>
    </div>
  );
}

export default DashboardLayout;
