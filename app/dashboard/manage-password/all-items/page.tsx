import React from "react";
import Sidebar from "../../_components/sidebar";
import ShowCards from "../../_components/showCards";
import AllItemsLIst from "../../_components/all-items-list";

export default function AllItems() {
  return (
    <>
      <Sidebar />
      <div className="w-auto h-screen md:pl-48 bg-[#F8F8F8]">
        <div className="p-4">
          <ShowCards />
          <AllItemsLIst />
        </div>
      </div>
    </>
  );
}
