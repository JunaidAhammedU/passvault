import React from "react";
import Favorites from "../../_components/favorites";
import RecentlyCreated from "../../_components/recent";
import ShowCards from "../../_components/showCards";

export default function page() {
  return (
    <>
      <div className="px-3 py-8 md:p-20 mt-[70px] mb-10 bg-[#F8F8F8] h-full">
        <ShowCards />
        <Favorites />
        <RecentlyCreated />
      </div>
    </>
  );
}
