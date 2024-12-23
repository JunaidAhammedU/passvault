import React from "react";
import Sidebar from "../_components/sidebar";
import Favorites from "../_components/favorites";

export default function page() {
  return (
    <>
      <Sidebar />
      <div className="w-auto h-screen md:pl-48 bg-[#F8F8F8]">
        <div className="p-4">
          <Favorites />
        </div>
      </div>
    </>
  );
}
