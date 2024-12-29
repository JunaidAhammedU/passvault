import React from "react";
import Sidebar from "../../_components/sidebar";
import AllItemsLIst from "../../_components/all-items-list";

export default function AllItems() {
  return (
    <>
      <Sidebar />
      <div className="w-auto h-screen md:pl-48 bg-[#F8F8F8]">
        <div className="p-6 h-full">
          <div>
            <h1>home - all items</h1>
          </div>
          <AllItemsLIst />
        </div>
      </div>
    </>
  );
}
