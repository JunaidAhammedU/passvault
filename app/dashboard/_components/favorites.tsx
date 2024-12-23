"use client";
import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import getIcon from "./icons";
import { ViewDrawer } from "./viewDialog";

export default function Favorites() {
  const data = [
    {
      id: 1,
      name: "Linkedin",
      url: "linkedin.com",
    },
    {
      id: 2,
      name: "Twitter",
      url: "twitter.com",
    },
    {
      id: 3,
      name: "GitHub",
      url: "github.com",
    },
    {
      id: 4,
      name: "Amazon",
      url: "amazon.com",
    },
    {
      id: 5,
      name: "Google",
      url: "google.com",
    },
    {
      id: 6,
      name: "Facebook",
      url: "facebook.com",
    },
  ];
  const [openOutputDialog, setOpenOutputDialog] = useState(false);
  const [selectedFavorite, setSelectedFavorite] = useState<any>({});

  return (
    <>
      <div className="bg-white shadow-sm relative rounded-xl px-6 py-9 mt-4">
        <div className="flex items-center gap-2 absolute top-4 left-6">
          <CiStar className="text-2xl " />
          <h1 className="text-[20px] font-semibold">Favorites</h1>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-8"
          onClick={() => setOpenOutputDialog(true)}
        >
          {data.map((favorite) => (
            <div
              key={favorite.id}
              className="flex items-center gap-2"
              onClick={() => setSelectedFavorite(favorite)}
            >
              <div className="w-8 h-8 bg-[#FFF96F] rounded-full flex items-center justify-center">
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
      <ViewDrawer
        openOutputDialog={openOutputDialog}
        closeOutputDialog={() => setOpenOutputDialog(false)}
        name={selectedFavorite.name}
        url={selectedFavorite.url}
      />
    </>
  );
}
