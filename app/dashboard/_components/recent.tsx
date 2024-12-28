"use client";

import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { LuHistory } from "react-icons/lu";
import getIcon from "./icons";

export default function RecentlyCreated() {
  const [data, setData] = useState<any[]>([]);

  const handleFetch = async () => {
    try {
      const response = await axios.get("/api/recently-created");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  return (
    <>
      <div className="bg-white shadow-sm relative rounded-xl px-6 py-9 mt-4">
        <div className="flex items-center gap-2 absolute top-4 left-6">
          <LuHistory className="text-2xl " />
          <h1 className="text-[20px] font-semibold"> Recently Created</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-8">
          {data.map((favorite) => (
            <div
              key={favorite.id}
              className="flex items-center gap-5 cursor-pointer p-2 shadow-sm rounded-lg hover:shadow-md"
              // onClick={() => openFavorite(favorite)}
            >
              <div className="w-8 h-8  rounded-full flex items-center justify-center">
                {getIcon(favorite.name.toLowerCase())}
              </div>
              <div>
                <h1 className="text-[15px] font-semibold">{favorite.name}</h1>
                <p className="text-[13px] text-[#7A7A7A]">{favorite.url}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
