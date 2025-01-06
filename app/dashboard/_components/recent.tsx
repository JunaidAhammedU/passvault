"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { LuHistory } from "react-icons/lu";
import getIcon from "./icons";
import { SkeletonDiv } from "./skeleton";
import { useUser } from "@clerk/nextjs";

export default function RecentlyCreated() {
  const { user } = useUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress;
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const handleFetch = async () => {
    try {
      const response = await axios.get("/api/recently-created", {
        params: { email: userEmail },
      });
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <div className="bg-white shadow-sm relative rounded-xl px-6 py-9 mt-4 h-full">
        <div className="flex items-center gap-2 absolute top-4 left-6">
          <LuHistory className="text-2xl " />
          <h1 className="text-[20px] font-semibold"> Recently Created</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-8">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <SkeletonDiv key={index} />
              ))
            : data.map((val) => (
                <div
                  key={val.id}
                  className="flex items-center gap-5 cursor-pointer p-2 shadow-sm rounded-lg hover:shadow-md"
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center">
                    {getIcon(val.label.toLowerCase())}
                  </div>
                  <div>
                    <h1 className="text-[15px] font-semibold">{val.label}</h1>
                    <p className="text-[13px] text-[#7A7A7A]">{val.username}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}
