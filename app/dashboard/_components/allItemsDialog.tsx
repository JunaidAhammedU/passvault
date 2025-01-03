"use client";

import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/lib/hooks/use-toast";
import { FaRegCopy, FaStar } from "react-icons/fa";
import getIcon from "./icons";
import { decryptData } from "@/lib/cryptoHelper";
import axios from "axios";

function AllItemDialog({ openOutputDialog, closeOutputDialog, data }: any) {
  const { toast } = useToast();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFavorite, setIsFavorite] = useState(data?.isFavorite || false);

  useEffect(() => {
    if (openOutputDialog) {
      setIsPasswordVisible(false);
    }
  }, [openOutputDialog]);

  const handleCopy = () => {
    const decryptedPassword = decryptData(data?.password);
    navigator.clipboard.writeText(decryptedPassword);
    toast({
      description: "Password copied to clipboard!",
    });
  };

  const handleFavorite = async () => {
    try {
      const response = await axios.put("/api/make-fav-pwd", { id: data._id });
      if (response.status === 200) {
        setIsFavorite(true); // Update UI
        toast({
          description: response.data.message,
        });
      }
    } catch (error) {
      console.error("Failed to mark as favorite:", error);
      toast({
        description: "Failed to mark as favorite. Please try again.",
      });
    }
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
            <FaStar
              onClick={handleFavorite}
              className={`absolute top-0 right-0 text-sm sm:text-xl cursor-pointer ${
                isFavorite
                  ? "text-yellow-500"
                  : "text-gray-400 hover:text-yellow-500"
              }`}
            />
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
              className="border border-gray-300 text-black col-span-1 sm:col-span-3 rounded-md h-10 flex items-center px-4 relative cursor-pointer"
              onClick={() => setIsPasswordVisible((prev) => !prev)}
            >
              <h1 className={`${!isPasswordVisible ? "blur-sm" : ""}`}>
                {isPasswordVisible ? decryptData(data?.password) : "********"}
              </h1>
              {isPasswordVisible && (
                <FaRegCopy
                  className="absolute right-3 text-gray-600 cursor-pointer hover:text-gray-900"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopy();
                  }}
                />
              )}
            </div>
          </div>
        </div>
        <Button
          className="mt-4 w-full sm:w-auto"
          onClick={() => closeOutputDialog(false)}
        >
          Close
        </Button>
        <p className="text-center text-sm text-gray-500">
          Click on the blurred password to reveal it. <br /> You can copy it by
          clicking the copy icon.
        </p>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AllItemDialog;
