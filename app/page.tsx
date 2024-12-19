"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Mona_Sans } from "next/font/google";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const mona = Mona_Sans({ subsets: ["latin"], weight: "400" });
import {
  BsFacebook,
  BsLinkedin,
  BsGoogle,
  BsThreadsFill,
  BsTwitch,
  BsTwitterX,
} from "react-icons/bs";
import Navbar from "@/components/ui/Header";
import Link from "next/link";
import LandSecOne from "@/components/pages/land.section1";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:p-5 md:px-6 xl:gap-32">
          <div className="flex flex-col text-start justify-center items-center relative">
            <div className="text-start mt-12 lg:mt-24">
              <h1
                className={`${mona.className} text-4xl md:text-7xl lg:text-7xl text-black font-extrabold leading-tight`}
              >
                Safe place <br />
                for all your <br /> passwords
              </h1>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-4">
              <Link href={"/get-new-pass"}>
                <Button className="bg-black text-white text-lg py-3 px-6 hover:bg-gray-800 transition rounded-sm">
                  Generate Password*
                </Button>
              </Link>
              <Button className="bg-white text-black text-lg py-3 px-6 hover:bg-gray-100 transition rounded-sm">
                Manage Passwords
              </Button>
            </div>
            <div className="mt-4 md:mt-12">
              <p className="text-sm mt-4 text-gray-700">
                Over 10,000 business-friendly passwords and counting...
              </p>
              <div className="flex justify-center gap-4 mt-4 text-gray-700">
                <BsGoogle />
                <BsFacebook />
                <BsLinkedin />
                <BsThreadsFill />
                <BsTwitch />
                <BsTwitterX />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center p-10 md:p-2">
            <Image
              src="/landing2.png"
              alt="Password management illustration"
              className="object-contain rounded-md  "
              width={500}
              height={500}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
      <LandSecOne />
    </>
  );
}
