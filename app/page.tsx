"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoLockOpen, IoLockClosed } from "react-icons/io5";
import { MdOutlineManageSearch } from "react-icons/md";
import { Caveat, Dosis } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const caveat = Caveat({ subsets: ["latin"], weight: "400" });
const dosis = Dosis({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [locked, setLocked] = useState(false);
  const router = useRouter();

  return (
    <div>
      <section className="h-screen relative">
        <div className="flex flex-col justify-center items-center h-screen relative">
          <div>
            <img src="/bpic2.png" alt="" className="w-72 h-72 object-cover" />
          </div>
          <div className="sm:w-1/2 md:w-4/5 lg:w-3/5 xl:w-2/3">
            <div className="text-center flex flex-col justify-center">
              <h1
                className={` ${dosis.className}  text-[#191919] font-extrabold text-3xl md:text-3xl lg:text-4xl font-Poppins`}
              >
                Empower Your
                <span
                  className={` ${caveat.className}  text-[#8360ff] text-3xl md:text-4xl lg:text-5xl`}
                >
                  Digital World
                </span>{" "}
                with Strong Passwords!
              </h1>
              <p className="font-Inter text-lg mt-5">
                Effortlessly secure your accounts with our{" "}
                <span
                  className={` ${caveat.className}  text-[#8360ff] text-2xl font-bold`}
                >
                  magical
                </span>{" "}
                password generator!
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center mt-3 md:gap-3">
              <Link href="/get-new-pass">
                <Button className="rounded-xl hover:bg-[#2D1D60] bg-[#3f2986] text-white w-[80%] md:w-64 md:mr-3 relative">
                  GENERATE PASSWORD
                </Button>
              </Link>
              <Button className="rounded-xl hover:bg-[#d7c7d2] bg-[#FFF2FB] text-[#2D1D60] w-[80%] md:w-64 mt-3 md:mt-0 relative">
                MANAGE PASSWORD
              </Button>
            </div>

            <p className="text-[#392A69] text-center text-sm mt-3">
              No credit required
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
