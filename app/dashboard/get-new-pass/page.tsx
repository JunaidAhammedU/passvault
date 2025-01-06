"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Progress from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { getPasswordStrength } from "@/lib/getStrength";
import passwordGenerator from "@/lib/usePassword_Generator";
import React, { useState } from "react";
import { TbClipboardCheck, TbClipboardText, TbSparkles } from "react-icons/tb";
import ManagePassDialoge from "../_components/manage.pass.dialog";
import { useToast } from "@/lib/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useUser } from "@clerk/nextjs";

export default function Page() {
  const { user } = useUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress;
  const { toast } = useToast();
  const [length, setLength] = useState(4);
  const [isCopied, setIsCopied] = useState(false);
  const [checkbox, setCheckbox] = useState([
    { title: "ABC", state: false },
    { title: "abc", state: false },
    { title: "123", state: false },
    { title: "#$&", state: false },
  ]);

  const [customWords, setCustomWords] = useState("");
  const [count, setCount] = useState(6);
  const { errorMessage, password, generatePassword } = passwordGenerator();
  const [openOutput, setOpenOutput] = useState(false);

  const handleCheckbox = (i: number) => {
    const updatedData = [...checkbox];
    updatedData[i].state = !updatedData[i].state;
    setCheckbox(updatedData);
  };

  const handleCopy = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleCustomWords = (value: string) => {
    const cleanedValue = value.replace(/[^a-zA-Z0-9]/g, "").trim();
    setCount(6 - cleanedValue.length);
    setCustomWords(cleanedValue);
  };

  const { strength, color, value } = getPasswordStrength(password || "");

  const handleGeneratePassword = () => {
    generatePassword(checkbox, length, customWords);
    setTimeout(() => {
      toast({
        title: "Password Generated!",
        description: "Your new password is ready. Would you like to save it?",
        action: (
          <ToastAction
            onClick={() => setOpenOutput(true)}
            altText="Save your password"
          >
            Save
          </ToastAction>
        ),
      });
    }, 2000);
  };

  return (
    <>
      <div className="px-10 py-10 md:px-40 md:py-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-center">
            Generate Your Password
          </h2>
          <p>Choose the length of your password and include the following:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 sm:mt-5 md:mt-10 gap-10">
          <div>
            <label htmlFor="password" className="text-gray-500 p-1">
              Password
            </label>
            <div className="w-full h-[50px] border rounded-xl shadow-sm text-start px-5 items-center flex justify-between relative mt-1">
              <span className={password ? "" : "text-gray-500"}>
                {password || "Your password will appear here.."}
              </span>
              <Button
                className="absolute right-0 top-50% bg-transparent hover:bg-transparent shadow-none border-none"
                onClick={handleCopy}
                disabled={!password}
              >
                {isCopied ? (
                  <>
                    <TbSparkles className="absolute rotate-45 top-1 left-2 text-black" />
                    <TbClipboardCheck className="text-3xl text-black -rotate-12" />
                  </>
                ) : (
                  <TbClipboardText className="text-3xl hover:text-black text-gray-500 transition duration-300 cursor-pointer" />
                )}
              </Button>
            </div>
            <div className="w-full flex-col justify-start">
              <p className="text-[13px] text-gray-500 mt-6">
                Password Strength: {strength}
              </p>
              <Progress value={value} color={color} className="mt-2 w-full" />
            </div>

            <div className="w-full flex-col justify-start">
              <p className="text-xl text-gray-500 mt-6">
                Password Length: {length}
              </p>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="password" className="text-gray-500 p-1">
                Strength*
              </label>
              <Slider
                defaultValue={[8]}
                max={20}
                min={4}
                step={1}
                value={[length]}
                onValueChange={(value) => setLength(value[0])}
                className="w-full mt-2 bg-[#FBF967] mb-6"
              />
            </div>
            <label className="text-gray-500 p-1">Include*</label>
            <div className="grid grid-cols-2 gap-5 justify-around px-2 py-5">
              {checkbox.map((data, ind) => (
                <div
                  className={`flex items-center border rounded-xl shadow-sm w-full h-[50px] ${
                    data.state ? "border-black" : ""
                  }`}
                  key={data.title}
                >
                  <Checkbox
                    checked={data.state}
                    onCheckedChange={() => handleCheckbox(ind)}
                    className={`ml-5 rounded-xl h-[30px] w-[30px] bg-white ${
                      data.state ? " border border-black" : ""
                    }`}
                  />
                  <h1 className="font-bold text-xl ml-8 ">{data.title}</h1>
                </div>
              ))}
            </div>
            <label htmlFor="custom-words" className="text-gray-500 p-1">
              Custom words (optional)
            </label>
            <div className="grid grid-cols-1 gap-5 justify-around px-2 py-5 relative">
              <Input
                placeholder="Type your custom words..."
                className="w-full h-[50px] rounded-xl text-lg border border-gray-300 shadow-sm placeholder:text-gray-400"
                maxLength={6}
                onChange={(e) => handleCustomWords(e.target.value)}
              />
              <p className="text-gray-500 text-sm absolute right-8 bottom-8">
                {count}
              </p>
            </div>

            <Button
              onClick={handleGeneratePassword}
              className="w-full mt-5 bg-black text-white rounded-xl hover:bg-black/80 hover:text-white/80 transition duration-300"
            >
              Generate
            </Button>
            {errorMessage && (
              <p className="text-red-500 text-center mt-3">{errorMessage}</p>
            )}
          </div>
        </div>
      </div>
      <ManagePassDialoge
        openOutputDialog={openOutput}
        closeOutputDialog={() => setOpenOutput(false)}
        password={password}
        userEmail={userEmail}
      />
    </>
  );
}
