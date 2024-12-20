import Image from "next/image";
import React from "react";
import { SiAwssecretsmanager } from "react-icons/si";

export default function LandSecOne() {
  return (
    <div className="px-4 sm:px-8 py-3">
      <h1 className="text-3xl md:text-5xl text-center">
        The perfect tool for your security keys.
      </h1>

      <div className=" mt-4 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-black hover:cursor-pointer">
          <div className="shadow-sm border border-gray-500 bg-[#F9F96C] h-44 rounded-xl relative overflow-hidden">
            <h1 className="text-xl font-semibold absolute top-[25%] left-2 p-2">
              Manage Your Passwords
            </h1>
            <p className="text-sm absolute top-[43%] left-2 p-2 text-start">
              Store all your passwords in one <br />
              place. Access them anytime. <br />
              Anywhere. Any device. <br />
            </p>
            <Image
              alt="pattern"
              src="/pattern3.png"
              width={500}
              height={500}
              className="absolute right-0 top-0 z-10 object-cover"
            />
          </div>
          <div className="shadow-sm border border-gray-500 bg-[#F9F96C] h-44 rounded-xl relative overflow-hidden">
            <h1 className="text-xl font-semibold absolute top-[25%] left-2 p-2">
              Personalized Password
            </h1>
            <p className="text-sm absolute top-[43%] left-2 p-2 text-start">
              Create a personalized password <br />
              with our password generator. <br />
              with our password generator. <br />
            </p>
            <Image
              alt="pattern"
              src="/pattern1.png"
              width={500}
              height={500}
              className="absolute right-0 top-0 z-10 object-cover"
            />
          </div>
          <div className="shadow-sm border border-gray-500 bg-[#F9F96C] h-44 rounded-xl relative overflow-hidden">
            <h1 className="text-xl font-semibold text-start absolute top-[25%] left-2 p-2">
              Find Your Passwords <br />
              Strength
            </h1>
            <p className="text-sm absolute top-[58%] left-2 p-2 text-start">
              Check the strength of your <br /> passwords with our tool.
            </p>
            <Image
              alt="pattern"
              src="/pattern4.png"
              width={500}
              height={500}
              className="absolute right-0 top-0 z-10 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
