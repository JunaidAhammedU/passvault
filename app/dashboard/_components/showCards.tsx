import Image from "next/image";
import React from "react";

export default function ShowCards() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-black hover:cursor-pointer">
        <div className=" bg-[#CBCCBF] h-44 rounded-xl relative overflow-hidden">
          <h1 className="text-xl font-semibold absolute top-[20%] left-2 p-2">
            Secure Vault
          </h1>
          <p className="text-sm absolute top-[40%] left-2 p-2 text-start">
            Keep all your sensitive information safe and easily <br />{" "}
            accessible. Store your passwords, personal data,
            <br /> and other confidential information in an encrypted vault
            <br /> that only you can access.
          </p>
          <Image
            alt="pattern"
            src="/pattern3.png"
            width={500}
            height={500}
            className="absolute right-0 top-0 z-10 object-cover"
          />
        </div>
        <div className=" bg-[#FFF96F] h-44 rounded-xl relative overflow-hidden">
          <h1 className="text-xl font-semibold absolute top-[20%] left-2 p-2">
            Custom Passwords
          </h1>
          <p className="text-sm absolute top-[40%] left-2 p-2 text-start">
            Create passwords that are both strong and <br /> memorable with our
            smart generator. Customize <br />
            your passwords to include specific characters, <br /> patterns, and
            lengths to meet your security needs. <br />
          </p>
          <Image
            alt="pattern"
            src="/pattern1.png"
            width={500}
            height={500}
            className="absolute right-0 top-0 z-10 object-cover"
          />
        </div>
        <div className=" bg-[#CBCCBF] h-44 rounded-xl relative overflow-hidden hidden md:block">
          <h1 className="text-xl font-semibold text-start absolute top-[20%] left-2 p-2">
            Password Analyzer
          </h1>
          <p className="text-sm absolute top-[40%] left-2 p-2 text-start">
            Analyze your passwords for strength and get <br /> detailed,
            actionable security tips to improve your <br /> password hygiene and
            protect your accounts from <br /> potential threats.
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
    </>
  );
}
