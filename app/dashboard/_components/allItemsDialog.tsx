"use client";

import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/lib/hooks/use-toast";
import { FaRegCopy } from "react-icons/fa";
import getIcon from "./icons";
import { FaStar } from "react-icons/fa";

function AllItemDialoge({ openOutputDialog, closeOutputDialog, data }: any) {
  const { toast } = useToast();
  const [isClicked, setIsClicked] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("sasa");
    toast({
      description: "Copied to clipboard!",
    });
  };

  return (
    <AlertDialog open={openOutputDialog}>
      <AlertDialogContent className="w-full max-w-[500px] p-6 sm:p-8">
        <AlertDialogHeader>
          <div className="flex items-center gap-4 relative">
            {getIcon(data?.label?.toLowerCase() || "", "text-4xl sm:text-6xl")}
            <AlertDialogTitle className="text-center text-lg sm:text-xl md:text-2xl">
              {data?.label}
            </AlertDialogTitle>
            <FaStar className="absolute top-0 right-0 text-sm sm:text-xl" />
          </div>
        </AlertDialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right sm:col-span-1">
              Username
            </label>
            <div className="border border-gray-300 text-black col-span-1 sm:col-span-3 w-full rounded-md h-10 flex items-center px-4">
              <h1>{data?.username}</h1>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4">
            <label htmlFor="password" className="text-right sm:col-span-1">
              Password
            </label>
            <div
              className="border border-gray-300 text-black col-span-1 sm:col-span-3 rounded-md h-10 flex items-center px-4 relative"
              onClick={() => setIsClicked(true)}
            >
              <h1 className={`${!isClicked ? "blur-sm" : ""}`}>
                {isClicked ? data?.password : "********"}
              </h1>
              <FaRegCopy
                className="absolute right-3 text-gray-600 cursor-pointer hover:text-gray-900"
                onClick={handleCopy}
              />
            </div>
          </div>
        </div>
        <Button
          className="mt-4 w-full sm:w-auto"
          onClick={() => closeOutputDialog(false)}
        >
          Close
        </Button>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AllItemDialoge;
