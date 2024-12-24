"use client";
import React, { useState, useEffect } from "react";
import { CiStar } from "react-icons/ci";
import getIcon from "./icons";
import { ViewDrawer } from "./viewDrawer";
import ViewDialoge from "./viewDialog";

export default function Favorites() {
  const data = [
    { id: 1, name: "Linkedin", url: "linkedin.com" },
    { id: 2, name: "Twitter", url: "twitter.com" },
    { id: 3, name: "GitHub", url: "github.com" },
    { id: 4, name: "Amazon", url: "amazon.com" },
    { id: 5, name: "Google", url: "google.com" },
    { id: 6, name: "Facebook", url: "facebook.com" },
  ];

  const [openOutput, setOpenOutput] = useState(false);
  const [selectedFavorite, setSelectedFavorite] = useState<any>({});
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <>
      <div className="bg-white shadow-sm relative rounded-xl px-6 py-9 mt-4">
        <div className="flex items-center gap-2 absolute top-4 left-6">
          <CiStar className="text-2xl " />
          <h1 className="text-[20px] font-semibold">Favorites</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-8">
          {data.map((favorite) => (
            <div
              key={favorite.id}
              className="flex items-center gap-5 cursor-pointer p-2 shadow-sm rounded-lg hover:shadow-md"
              onClick={() => openFavorite(favorite)}
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
      {isMobile ? (
        <ViewDrawer
          openOutputDrawer={openOutput}
          closeOutputDrawer={() => setOpenOutput(false)}
          name={selectedFavorite.name}
          url={selectedFavorite.url}
        />
      ) : (
        <ViewDialoge
          openOutputDialog={openOutput}
          closeOutputDialog={() => setOpenOutput(false)}
          name={selectedFavorite.name}
          url={selectedFavorite.url}
        />
      )}
    </>
  );
}
