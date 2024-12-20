import React from "react";
import Logo from "./logo.jsx";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

function navBar() {
  return (
    <>
      <div className="h-16 shadow-md ">
        <div className="h-full container  mx-auto flex items-center pa-4 justify-between">
          <div className="logo">
            <Logo w={100} h={60} />
          </div>

          <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md">
            <input
              type="text "
              placeholder="search products here..."
              className="w-full outline-none pl-2"
            />
            <div className="flex items-center min-w-[50px]  ailgn-center justify-center text-gl w-13 h-8 text-white bg-red-600  rounded-r-full cursor-pointer ">
              <CiSearch />
            </div>
          </div>

          <div className="items flex gap-7  ">
            <div className="icons">
              <FaRegUserCircle className="text-3xl cursor-pointer" />
            </div>

            <div className="cardIcon relative">
              <span>
                <FiShoppingCart className="text-3xl cursor-pointer " />
              </span>
              <div className="bg-red-600 h-5 text-white flex w-5 p-1 items-center justify-center rounded-full absolute -top-3  -right-3  ">
                <p className="text-xs">0</p>
              </div>
            </div>

            <div className="loginButton">
              <button className="px-3 py-1 bg-red-600 rounded-full text-white  hover:bg-red-700 ">
                login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default navBar;
