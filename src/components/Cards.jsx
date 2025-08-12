import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "./Button";

const Cards = ({image,name,price}) => {
  return (
    <div className="p-5 rounded-xl shadow-lg shadow-zinc-200 transition-all duration-300 hover:shadow-xl hover:shadow-orange-300/50 hover:scale-100">
  

      <div className="flex justify-between "> 
        <span className="">
          <FaHeart />
        </span>
        <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white  text-xl px-2 py-2 rounded-lg ">
          <FaPlus />
        </button>
      </div>

      <div className="w-full h-50 ">
        <img src={image} className="w-full h-full object-contain" />
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="text-2xl font-bold mt-4 mb-3 ">₹{price.toFixed(2)}</p>
        <Button content="Shop Now" />
      </div>
    </div>
  );
};

export default Cards;
