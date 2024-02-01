import React, { useState } from "react";
import { IoLockOpen, IoLockClosed } from "react-icons/io5";
import { MdOutlineManageSearch } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  const [locked, setLocked] = useState(false);

  return (
    <div>
      <section className="h-screen relative">
        <div className="absolute -z-50">
          <img src="/back.png" alt="" className="w-full h-[50%] object-cover" />
        </div>
        <div className="flex flex-col justify-center items-center h-screen relative">
          <div>
            <img src="/bpic2.png" alt="" className="w-72 h-72 object-cover" />
          </div>
          <div className="sm:w-1/2 md:w-4/5 lg:w-3/5 xl:w-2/3">
            <div className="text-center flex flex-col justify-center">
              <h1 className="text-[#191919] font-bold text-2xl md:text-3xl lg:text-4xl font-Poppins">
                Empower Your
                <span className="font-caveat text-[#8360ff] text-3xl md:text-4xl lg:text-5xl">
                  Digital World
                </span>{" "}
                with Strong Passwords!
              </h1>
              <p className="font-Inter text-lg mt-5">
                Effortlessly secure your accounts with our{" "}
                <span className="font-caveat text-[#8360ff] text-2xl font-bold">
                  magical
                </span>{" "}
                password generator!
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center mt-3 md:gap-3">
              <Link to={"/pass-generator"}>
                <button
                  className="btn hover:bg-[#2D1D60] bg-[#3f2986] text-white w-[80%] md:w-64 md:mr-3 relative"
                  onClick={() => {
                    setLocked(true);
                  }}
                >
                  GENERATE PASSWORD
                  {locked ? (
                    <IoLockClosed className="absolute text-lg text-white left-5 font-bold" />
                  ) : (
                    <IoLockOpen className="absolute text-lg text-white left-5 font-bold " />
                  )}
                </button>
              </Link>
              <button
                className="btn hover:bg-[#d7c7d2] bg-[#FFF2FB] text-[#2D1D60] w-[80%] md:w-64 mt-3 md:mt-0 relative"
                onClick={() => {
                  setLocked(true);
                }}
              >
                MANAGE PASSWORD
                <MdOutlineManageSearch className="absolute text-xl text-[#2D1D60] left-5 font-bold" />
              </button>
            </div>

            <p className="text-[#392A69] text-center text-sm mt-3">
              No credit required
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
