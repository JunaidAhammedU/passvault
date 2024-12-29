"use client";

import React, { useEffect, useState } from "react";
import getIcon from "./icons";
import axios from "axios";

export default function AllItemsList() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch data with pagination and search
  const handleFetch = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/get-all-pass");
      setData(response.data.pass);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, [searchQuery, page]);

  return (
    <div className="bg-white shadow-sm relative rounded-xl px-6 py-9 mt-4">
      <h1 className="text-[20px] font-semibold">Explore</h1>

      {isLoading ? (
        <div className="text-center mt-8">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-8">
          {data.map((item: any) => (
            <div
              key={item._id}
              className="flex items-center gap-5 cursor-pointer p-2 shadow-sm rounded-lg bg-slate-400"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                {getIcon(item.label.toLowerCase())}
              </div>
              <div>
                <h1 className="text-[15px] font-semibold">{item.label}</h1>
                <p className="text-[13px] text-[#7A7A7A]">{item.username}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
