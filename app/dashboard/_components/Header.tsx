"use client";

import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useContext } from "react";
import { UserDetailContext } from "@/app/_context/userDetailsCOntext";

const Navbar = () => {
  const context = useContext(UserDetailContext);
  const { user } = useUser();
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

      <div className="hidden md:flex absolute right-24">
        <Link href={"/"}>div</Link>
        <Link href={"/about"}>
          <p className="hidden md:block ml-4">About</p>
        </Link>
        <Link href={"/contact"}>
          <p className="hidden md:block ml-4">Contact</p>
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

      <div className="md:hidden flex items-center">
        <button className="focus:outline-none">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
