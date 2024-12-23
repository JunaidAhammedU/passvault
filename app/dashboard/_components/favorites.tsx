import React from "react";
import { CiStar } from "react-icons/ci";
import {
  FaGoogle,
  FaFacebook,
  FaGithub,
  FaAmazon,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export default function Favorites() {
  return (
    <>
      <div className="bg-white shadow-sm relative rounded-xl px-6 py-9 mt-4">
        <div className="flex items-center gap-2 absolute top-4 left-6">
          <CiStar className="text-2xl " />
          <h1 className="text-[20px] font-semibold">Favorites</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FFF96F] rounded-full flex items-center justify-center">
              <FaLinkedin className="text-2xl" />
            </div>
            <div>
              <h1 className="text-[15px] font-semibold">Linkedin</h1>
              <p className="text-[13px] text-[#7A7A7A]">linkedin.com</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FFF96F] rounded-full flex items-center justify-center">
              <FaTwitter className="text-2xl" />
            </div>
            <div>
              <h1 className="text-[15px] font-semibold">Twitter</h1>
              <p className="text-[13px] text-[#7A7A7A]">twitter.com</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FFF96F] rounded-full flex items-center justify-center">
              <FaGithub className="text-2xl" />
            </div>
            <div>
              <h1 className="text-[15px] font-semibold">GitHub</h1>
              <p className="text-[13px] text-[#7A7A7A]">github.com</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FFF96F] rounded-full flex items-center justify-center">
              <FaAmazon className="text-2xl" />
            </div>
            <div>
              <h1 className="text-[15px] font-semibold">Amazon</h1>
              <p className="text-[13px] text-[#7A7A7A]">amazon.com</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FFF96F] rounded-full flex items-center justify-center">
              <FaGoogle className="text-2xl" />
            </div>
            <div>
              <h1 className="text-[15px] font-semibold">Google</h1>
              <p className="text-[13px] text-[#7A7A7A]">google.com</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FFF96F] rounded-full flex items-center justify-center">
              <FaFacebook className="text-2xl" />
            </div>
            <div>
              <h1 className="text-[15px] font-semibold">Facebook</h1>
              <p className="text-[13px] text-[#7A7A7A]">facebook.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
