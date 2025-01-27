import React from "react";
import AllItemsLIst from "../../_components/all-items-list";
import ShowCards from "../../_components/showCards";

export default function AllItems() {
  return (
    <>
      <div className="px-3 py-8 md:p-20 mt-[70px] mb-10 bg-[#F8F8F8] h-full">
        <ShowCards />
        <AllItemsLIst />
      </div>
    </>
  );
}
