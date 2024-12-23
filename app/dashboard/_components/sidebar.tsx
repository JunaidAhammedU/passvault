"use client";
import { useState } from "react";
import {
  TbLayoutSidebarLeftExpand,
  TbLayoutSidebarRightExpand,
} from "react-icons/tb";
import { IoFileTrayFullOutline } from "react-icons/io5";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoMdFingerPrint,
} from "react-icons/io";
import { HiOutlineTag } from "react-icons/hi2";
import { FaHashtag } from "react-icons/fa6";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTagsOpen, setIsTagsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleTags = () => {
    setIsTagsOpen(!isTagsOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        aria-controls="default-sidebar"
        type="button"
        className="fixed top-[70px] left-[2px] text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">Close sidebar</span>
        <TbLayoutSidebarLeftExpand className="text-2xl" />
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-[68px] left-0 z-40 w-48 h-full transition-transform bg-white dark:bg-gray-800  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto relative">
          <button
            onClick={toggleSidebar}
            aria-controls="default-sidebar"
            type="button"
            className="absolute top-1 right-1 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          >
            <span className="sr-only">Close sidebar</span>
            <TbLayoutSidebarRightExpand className="text-2xl" />
          </button>

          <ul className="space-y-2 font-medium mt-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoMdFingerPrint className="2xl" />
                <span className="ml-3">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoFileTrayFullOutline className="text-xl" />
                <span className="flex-1 ml-3 whitespace-nowrap">All Items</span>
              </a>
            </li>
          </ul>
          <div className="mt-2 ">
            <button
              onClick={toggleTags}
              className="flex items-center relative w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <FaHashtag className="2xl" />
              <span className="ml-3">Tags</span>
              <IoIosArrowForward
                className={`absolute right-0 transition-transform ${
                  isTagsOpen ? "rotate-90" : "rotate-0"
                }`}
              />
              <IoIosArrowDown
                className={`absolute right-0 transition-transform ${
                  isTagsOpen ? "rotate-0" : "-rotate-90"
                }`}
              />
            </button>
          </div>
          <ul
            className={`space-y-2 font-medium mt-2 transition-all duration-300 ${
              isTagsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <HiOutlineTag className="text-xl bg-[#FFF96F] p-1 rounded-xl" />
                <span className="ml-3">Social</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <HiOutlineTag className="text-xl bg-[#CBCCBF] p-1 rounded-xl " />
                <span className="flex-1 ml-3 whitespace-nowrap">Finance</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
