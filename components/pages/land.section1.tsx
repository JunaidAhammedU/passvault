import React from "react";

export default function LandSecOne() {
  return (
    <div className="px-4 sm:px-8 py-3">
      <h1 className="text-5xl text-center font-bold">
        The perfect tool for your security keys.
      </h1>

      <div className="border-t-2 border-l-2 border-r-2 border-black mt-4 p-4 rounded-tl-xl rounded-tr-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white hover:cursor-pointer">
          <div className="shadow-sm border border-[#FDF672] black bg-black h-52 rounded-xl">
            <h1>Personalized Password</h1>
          </div>
          <div className="shadow-sm border border-[#FDF672] black bg-black h-52 rounded-xl">
            <h1>Passwords including splecial charectors</h1>
          </div>
          <div className="shadow-sm border border-[#FDF672] black bg-black h-52 rounded-xl">
            <h1>Add Your numbers on you Passwods</h1>
          </div>
          <div className="shadow-sm border border-[#FDF672] black bg-black h-52 rounded-xl">
            <h1>Find Your Passwords Strength</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
