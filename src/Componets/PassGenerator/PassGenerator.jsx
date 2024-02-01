import React, { useState } from "react";
import passwordGenerator from "../../Helper/usePassword_Generator";
import { TbClipboardText, TbClipboardCheck } from "react-icons/tb";
import { TbSparkles } from "react-icons/tb";
//--------------------------------------------------------------------

const PassGenerator = () => {
  const [length, setLength] = useState(0);
  const [isCopied, setIsCopied] = useState(false);
  const [checkbox, setCheckbox] = useState([
    { title: "ABC", state: false },
    { title: "abc", state: false },
    { title: "123", state: false },
    { title: "#$&", state: false },
  ]); 

  // checkbox handle function
  const handleCheckbox = (i) => {
    const updatedData = [...checkbox];
    updatedData[i].state = !updatedData[i].state;
    setCheckbox(updatedData);
  };

  const { errorMessage, password, generatePassword } = passwordGenerator();

  // function for copy the password
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <>
      <div>
        <section className="flex justify-center items-center p-2 h-screen">
          <div className="sm:w-full md:w-1/2 rounded-lg ">
            <h1 className="text-[#191919] font-bold text-2xl md:text-3xl lg:text-4xl font-Poppins text-center">
              GENERATE YOUR PASSWORD
            </h1>
            {password && (
              <div className="p-3 items-center bg-[#e3caf3] rounded-2xl border mt-2">
                <div className="flex items-center overflow-hidden py-4 px-2 relative ">
                  <div className="w-[85%] overflow-hidden truncate pl-4">
                    <h1 className="font-sans font-semibold">{password}</h1>
                  </div>
                  {isCopied ? (
                    <div
                      className="absolute top-50% right-0 tooltip tooltip-left"
                      data-tip="copied"
                    >
                      <button className="btn bg-transparent hover:bg-transparent shadow-none border-none relative">
                        <TbSparkles className="absolute rotate-45 top-1 left-2 text-[#7756ee]" />
                        <TbClipboardCheck className="text-2xl text-[#7756ee] -rotate-12" />
                      </button>
                    </div>
                  ) : (
                    <div className="absolute top-50% right-0">
                      <button className="btn bg-transparent hover:bg-transparent shadow-none border-none">
                        <TbClipboardText
                          onClick={handleCopy}
                          className="text-2xl hover:text-black text-gray-500 transition duration-300 cursor-pointer"
                        />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="mt-4 rounded-2xl bg-[#FFF2FB] p-2 border">
              <div className="p-3 mt-2">
                <div className="flex justify-between px-5 mb-2">
                  <label className="font-Poppins">Password length</label>
                  <h1>{length}</h1>
                </div>
                <input
                  id="large-range"
                  type="range"
                  min="3"
                  max="27"
                  className="w-full h-3 bg-white rounded-lg appearance-none cursor-pointer range-lg "
                  onChange={(e) => {
                    setLength(e.target.value),
                      generatePassword(checkbox, length);
                  }}
                  value={length}
                />
              </div>
              <div className="">
                <h1 className="ml-8 font-Poppins">Characters used:</h1>
                {errorMessage && (
                  <div>
                    <h1 className="text-red-700 text-center">{errorMessage}</h1>
                  </div>
                )}
                <div className="flex gap-5 justify-around p-5">
                  {checkbox.map((data, ind) => {
                    return (
                      <div
                        className="flex gap-2 justify-center items-center"
                        key={ind}
                      >
                        <input
                          type="checkbox"
                          className="checkbox"
                          checked={data.state}
                          onChange={() => {
                            handleCheckbox(ind);
                          }}
                        />
                        <h1 className="font-sans font-bold text-lg">
                          {data.title}
                        </h1>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex justify-center items-center p-3">
                <button
                  className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg hover:bg-[#2D1D60] bg-[#3f2986] w-[50%] text-white font-Poppins relative "
                  onClick={() => generatePassword(checkbox, length)}
                >
                  Generate
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PassGenerator;
