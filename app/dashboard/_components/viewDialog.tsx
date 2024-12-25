"use client";

import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { FaRegCopy } from "react-icons/fa";

function ViewDialoge({ openOutputDialog, closeOutputDialog, name, url }: any) {
  const { toast } = useToast();
  const [isClicked, setIsClicked] = useState(false);

  const handleCopy = () => {
    toast({
      description: "Copied to clipboard",
    });
    navigator.clipboard.writeText(url);
  };

  return (
    <AlertDialog open={openOutputDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-lg">
            <div className="text-center text-xl md:text-2xl">{name}</div>
          </AlertDialogTitle>
        </AlertDialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4 ">
            <label htmlFor="name" className="text-right">
              Username
            </label>
            <div className="border border-gray-300 text-black col-span-3 w-full rounded-md h-10 items-center flex px-4 mt-4">
              <h1>{name}</h1>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4 relative">
            <label htmlFor="username" className="text-right">
              Password
            </label>
            <div
              className="border border-gray-300 text-black col-span-3 rounded-md h-10 items-center flex px-4 relative mt-4"
              onClick={() => setIsClicked(true)}
            >
              <h1
                className={`${
                  !isClicked ? `absolute bottom-1` : `items-center`
                }`}
              >
                {isClicked ? url : "********"}
              </h1>
              <FaRegCopy
                className="absolute right-3 text-gray-600 cursor-pointer hover:text-gray-900"
                onClick={handleCopy}
              />
            </div>
          </div>
        </div>
        <Button onClick={() => closeOutputDialog(false)}>Close</Button>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ViewDialoge;
