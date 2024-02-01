import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoMdLogIn, IoMdLogOut } from "react-icons/io";

const Header = () => {
  return (
    <>
      <div className="navbar z-50 fixed h-16 border-b backdrop:blur-2xl bg-white/90 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <IoIosArrowDown className="text-xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow backdrop-blur-3xl bg-white/30 rounded-box w-52"
            >
              <Link to={"/"}>
                <li>
                  <a className="text-[16px] font-semibold hover:text-gray-500 font-Poppins hover:bg-transparent">
                    Home
                  </a>
                </li>
              </Link>
              <Link to={"/pass-generator"}>
                <li>
                  <a className="text-[16px] font-semibold hover:text-gray-500 font-Poppins hover:bg-transparent mt-4">
                    Generate
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-2xl bg-transparent hover:bg-transparent border-none shadow-none">
            seePass
          </a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <IoMdLogIn className="text-2xl" />
            </div>
          </button>

          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <div className="avatar placeholder">
                <div className="bg-[#2D1D60] text-neutral-content rounded-full w-8">
                  <span className="text-xs">UI</span>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
