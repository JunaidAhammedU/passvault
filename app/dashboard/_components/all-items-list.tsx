"use client";

import React, { useEffect, useState } from "react";
import getIcon from "./icons";
import { FaWpexplorer } from "react-icons/fa6";
import axios from "axios";
import { TbCopyCheckFilled, TbCopyMinus } from "react-icons/tb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { decryptData } from "@/lib/cryptoHelper";
import { useToast } from "@/lib/hooks/use-toast";

interface PassItem {
  _id: string;
  label: string;
  username: string;
  isFavorite: boolean;
  password: string;
}

export default function AllItemsList() {
  const { toast } = useToast();
  const [data, setData] = useState<PassItem[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIds, setCopiedIds] = useState<string[]>([]); // Track copied item IDs

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

  const handleCopy = (selectedPSW: string, id: string) => {
    navigator.clipboard.writeText(selectedPSW);
    setCopiedIds((prev) => [...prev, id]);
    toast({
      description: "Password copied to clipboard",
    });
    setTimeout(() => {
      setCopiedIds((prev) => prev.filter((copiedId) => copiedId !== id));
    }, 2000);
  };

  return (
    <div className="bg-white shadow-sm relative rounded-xl px-6 py-9 mt-4 h-[95%]">
      <div className="flex items-center gap-2 absolute top-4 left-6">
        <FaWpexplorer className="text-2xl" />
        <h1 className="text-[20px] font-semibold">Explore</h1>
      </div>

      {isLoading ? (
        <div className="text-center mt-8">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 overflow-y-auto h-[80%] items-center">
          {data.map((item) => (
            <div
              key={item._id}
              className="flex items-center gap-4 cursor-pointer p-4 shadow-sm h-20 bg-[#F8F8F8] rounded-lg relative"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200">
                {getIcon(item.label.toLowerCase())}
              </div>
              <div>
                <h1 className="text-[15px] font-semibold">{item.label}</h1>
                <p className="text-[13px] text-[#7A7A7A]">{item.username}</p>
              </div>
              {copiedIds.includes(item._id) ? (
                <TbCopyCheckFilled className="absolute bottom-2 right-2 text-xl text-gray-600" />
              ) : (
                <TbCopyMinus
                  className="absolute bottom-2 right-2 text-xl text-gray-400 hover:text-gray-600"
                  onClick={() =>
                    handleCopy(decryptData(item.password), item._id)
                  }
                />
              )}

              {item.isFavorite && (
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] rotate-180 border-t-transparent border-l-[20px] border-l-[#3d33ce]"></div>
              )}
            </div>
          ))}
        </div>
      )}

      <Pagination className="absolute bottom-5 right-0 mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={handlePrevPage}
              aria-disabled={page === 1}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">{page}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={handleNextPage}
              aria-disabled={page === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
