"use client";

import React, { useState, useEffect } from "react";
import { CiStar } from "react-icons/ci";
import getIcon from "./icons";
import { ViewDrawer } from "./viewDrawer";
import ViewDialoge from "./viewDialog";
import axios from "axios";
import { SkeletonDiv } from "./skeleton";

export default function Favorites() {
  const [openOutput, setOpenOutput] = useState(false);
  const [selectedFavorite, setSelectedFavorite] = useState<any>({});
  const [isMobile, setIsMobile] = useState(false);
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  // window resize.
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openFavorite = (favorite: any) => {
    setSelectedFavorite(favorite);
    setOpenOutput(true);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/favorite-pwd");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching favorite passwords:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-white shadow-sm relative rounded-xl px-6 py-9 mt-4">
        <div className="flex items-center gap-2 absolute top-4 left-6">
          <CiStar className="text-2xl" />
          <h1 className="text-[20px] font-semibold">Favorites</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-8">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <SkeletonDiv key={index} />
              ))
            : data.map((val: any) => (
                <div
                  key={val.id}
                  className="flex items-center gap-5 cursor-pointer p-2 shadow-sm rounded-lg hover:shadow-md"
                  onClick={() => openFavorite(val)}
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
      {isMobile ? (
        <ViewDrawer
          openOutputDrawer={openOutput}
          closeOutputDrawer={() => setOpenOutput(false)}
          name={selectedFavorite.username}
          url={selectedFavorite.password}
        />
      ) : (
        <ViewDialoge
          openOutputDialog={openOutput}
          closeOutputDialog={() => setOpenOutput(false)}
          name={selectedFavorite.username}
          url={selectedFavorite.password}
        />
      )}
    </>
  );
}
