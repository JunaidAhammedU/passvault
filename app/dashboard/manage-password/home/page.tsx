import React from "react";
import Sidebar from "../../_components/sidebar";
import Favorites from "../../_components/favorites";
import RecentlyCreated from "../../_components/recent";
import ShowCards from "../../_components/showCards";

export default function page() {
  return (
    <>
      <Sidebar />
      <div className="w-auto h-screen md:pl-48 bg-[#F8F8F8]">
        <div className="p-4">
          <ShowCards />
          <Favorites />
          <RecentlyCreated />
        </div>
      </div>
    </>
  );
}
