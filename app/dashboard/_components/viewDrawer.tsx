"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";

export function ViewDrawer({
  openOutputDrawer,
  closeOutputDrawer,
  name,
  url,
}: any) {
  const [isClicked, setIsClicked] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <Drawer open={openOutputDrawer} onOpenChange={closeOutputDrawer}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            <div className="text-center text-xl md:text-2xl">{name}</div>
          </DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col gap-5 p-4 items-center justify-center ">
          <div className="relative flex flex-col md:flex-row p-4 items-center justify-center w-full md:w-[50%]">
            <h1 className="text-lg md:mr-4 absolute left-5 top-0">Username</h1>
            <div className="border border-gray-300 text-black w-full rounded-md h-10 items-center flex px-4 mt-4">
              <h1>{name}</h1>
            </div>
          </div>
          <div className="relative flex flex-col md:flex-row p-4 items-center justify-center w-full md:w-[50%]">
            <h1 className="text-lg md:mr-4 absolute left-5 top-0">Password</h1>
            <div
              className="border border-gray-300 text-black w-full rounded-md h-10 items-center flex px-4 relative mt-4"
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
        <DrawerFooter>
          <div className="flex justify-center items-center">
            <Button onClick={closeOutputDrawer} className="w-full md:w-1/3">
              close
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
