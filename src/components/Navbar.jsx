import React, { useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { TbMenu2, TbMenu3 } from "react-icons/tb";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-white fixed top-0 right-0 left-0 ">
      <nav className="max-w-[1400px] mx-auto px-10 h-[12vh] md:h-[14vh] flex justify-between items-center ">
        {/* Logo */}
        <a href="#" className="text-3xl font-bold">
          <span className="text-orange-500">M</span>
          Daily<span className="text-orange-500">Fresh</span>
        </a>
        {/* Desktop Menu */}
        <ul className="md:flex  gap-x-15 hidden">
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Nav Action */}
        <div className="flex items-center gap-x-5">
          {/* Input field */}
          <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search.."
              autoComplete="off"
              className=" px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-xl text-white w-10 h-10 flex justify-center  items-center rounded-full ">
              <IoMdSearch />
            </button>
          </div>
          <a href="" className="text-zinc-800 text-2xl">
            <GoHeartFill />
          </a>
          <a href="" className="text-zinc-800 text-2xl">
            <HiMiniShoppingBag />
          </a>

          {/* Hamburger  */}
          <a
            href="#"
            onClick={toggleMenu}
            className="text-zinc-800 text-2xl md:hidden"
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </a>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl items-center rounded-xl p-10  gap-x-15 md:hidden absolute top-30 -left-full tranform -translate-x-1/2 transition-all duration-500  ${
            showMenu ? "left-1/2" : ""
          } `}
        >
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
          <li className="flex p-1 border-2 border-orange-500 rounded-full md:hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search.."
              autoComplete="off"
              className=" px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-xl text-white w-10 h-10 flex justify-center  items-center rounded-full ">
              <IoMdSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
