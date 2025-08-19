import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-20">
      <div className="flex flex-wrap gap-y-10 max-w-[1400px] mx-auto px-10">
        <div className="flex-1 basis-[300px]">
          {/* Logo */}
          <a href="#" className="text-3xl font-bold">
            <span className="text-orange-500">M</span>
            Daily<span className="text-orange-500">Fresh</span>
          </a>
          <p className="text-zinc-600 mt-6 max-w-[350px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            quasi.
          </p>
          <p className="text-zinc-800 mt-6">2025 &copy; All Rights Reserved</p>
        </div>

          {/*list  */}
        <ul className="flex-1 mx-3">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold ">Company</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              About
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              FAQ's
            </a>
          </li>
        </ul>

        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold">Support</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              Support Center 
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              Feedback
            </a>
          </li>
           <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
             Contact Us
            </a>
          </li>
        </ul>
         
         {/* input email and feedback */}
        <div className="flex-1">
          <h5 className="text-zinc-800 text-2xl font-bold">Stay Connected </h5>
          <p className="mt-6 text-zinc-600">Questions or Feedback?<br/>
             We,d love to here from you.
          </p>
          <div className="flex bg-white p-1 rounded-lg mt-6 ">
            <input className="h-[5vh] pl-4 flex-1 focus:outline-none"  type="email" name="email" id="email" autoComplete="off" placeholder="Email Address" />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 p-2 text-white text-2xl rounded-lg hover:to-orange-600 cursor-pointer">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
