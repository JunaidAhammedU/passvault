"use client";

import React, { useEffect, useState } from "react";
import getIcon from "./icons";
import axios from "axios";

interface PassItem {
  _id: string;
  label: string;
  username: string;
}

export default function AllItemsList() {
  const [data, setData] = useState<PassItem[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetch = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/get-all-pass", {
        params: {
          page,
          limit: 10,
        },
      });
      setPage(response.data.page);
      setTotalPages(response.data.totalPages);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  return (
    <div className="bg-white shadow-sm relative rounded-xl px-6 py-9 mt-4">
      <h1 className="text-[20px] font-semibold">Explore</h1>

      {isLoading ? (
        <div className="text-center mt-8">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-8">
          {data.map((item) => (
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

      {/* Pagination Controls */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
