"use client";

import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useContext, useState } from "react";
import { UserDetailContext } from "@/app/_context/userDetailsCOntext";
import { RiApps2Line, RiApps2AiLine } from "react-icons/ri";

const Navbar = () => {
  const context = useContext(UserDetailContext);
  const { user } = useUser();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between px-6 py-4 z-50 fixed w-full top-0 border-b border-gray-200 bg-white">
      <Link href={"/"}>
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            className="h-6 w-6 object-cover"
            width={24}
            height={24}
            priority
          />
          <span className="pl-2 mb-2 text-xl font-bold">passvault</span>
        </div>
      </Link>

      <div className="hidden md:flex absolute right-24 gap-3">
        <Link href={"/dashboard/manage-password/home"}>
          <div className="py-6 px-5 text-gray-700 hover:text-black  translate duration-300 ">
            Manage
          </div>
        </Link>
        <Link href={"/dashboard/manage-password/all-items"}>
          <div className="py-6 px-5 text-gray-700 hover:text-black  translate duration-300 ">
            Explore
          </div>
        </Link>
      </div>

      <div className="hidden md:flex">
        {user?.primaryEmailAddress?.emailAddress ? (
          <UserButton />
        ) : (
          <Link href={"/sign-in"}>
            Log in <span className="ml-1">→</span>
          </Link>
        )}
      </div>

      <div className="md:hidden flex items-center relative">
        <button className="focus:outline-none" onClick={toggleDropdown}>
          {dropdownOpen ? (
            <RiApps2AiLine className="text-2xl" />
          ) : (
            <RiApps2Line className="text-2xl" />
          )}
        </button>
        {dropdownOpen && (
          <div
            className={`absolute top-5 right-0 mt-2 w-48 border border-gray-200 rounded shadow-xl bg-white transition-all duration-300 ${
              dropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <Link href={"/dashboard/manage-password/home"}>
              <div className="py-2 px-4 text-gray-700 hover:text-black hover:bg-gray-100">
                Manage
              </div>
            </Link>
            <Link href={"/dashboard/manage-password/all-items"}>
              <div className="py-2 px-4 text-gray-700 hover:text-black hover:bg-gray-100">
                Explore
              </div>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
