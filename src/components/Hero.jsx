import React from "react";
import Grocery from '../../src/assets/grocery.png'
import Button from "./Button";

const Hero = () => {
  return (
    <section>
      <div className="max-w-[1400px] min-h-screen mx-auto px-10 flex flex-col md:flex-row items-center pt-35 md:pt-25">
        {/* Left Side Content  */}
        <div className="flex-1">
          <span className="bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full">Export Best Quality...</span>
          <h1 className=" text-5xl/14 md:text-7xl/19 font-bold mt-4">Tasty Organic <span className =" text-orange-500">Fruits</span> & <span className =" text-orange-500">Veggies</span> In Your City</h1>
          <p className="text-zinc-600 text-md md:text-lg max-w-[530px] mt-5 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sunt eius neque itaque sit 
          </p>
          <Button content="Shop Now"/>
        </div>

        {/* Right side Content */}
        <div className="flex-1  ">
            <img  src={Grocery} alt="Hero Image"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
