import React from "react";
import Heading from "./Headings";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../../src/assets/basket-full-vegetables.png";

const Values = () => {
  const LeftSide = value.slice(0,2).map((item) => {
    return (
      <div key={item.id} className="flex md:flex-row-reverse items-center gap-7">
        <div>
          <span className="flex justify-center items-center text-white text-3xl bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full ">{item.icon}</span>
        </div>
        <div className="md:text-right">
          <h3 className="text-zinc-800 text-2xl md:text-3xl font-bold">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });

  const RightSide = value.slice(2).map((item) => {
    return (
      <div key={item.id} className="flex items-center gap-7 ">
        <div>
          <span className="flex justify-center items-center text-white text-3xl bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full ">{item.icon}</span>
        </div>
        <div >
          <h3 className="text-zinc-800 text-2xl md:text-3xl font-bold">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });
  

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10">
        <Heading highlight="Our" heading="Value" />

        <div className="flex flex-col md:flex-row gap-13 md:gap-5 mt-15">
          {/* Left side */}
          <div className="md:min-h-100 flex flex-col justify-between gap-13">{LeftSide}</div>

          {/* Middle image */}
          <div className=" hidden md:flex w-1/2">
            <img src={Basket} alt="MiddleBasket" />
          </div>

          {/* Right side */}
          <div  className="md:min-h-100 flex flex-col justify-between gap-13">{RightSide}</div>
        </div>
      </div>
    </section>
  );
};

export default Values;

const value = [
  {
    id: 1,
    title: "Trust",
    para: "We build lasting relationships with our customers by delivering quality you can rely on, every single time. ",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "From farm to table, our products are handled with care to ensure you enjoy the freshest taste possible. ",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "We follow strict hygiene and safety standards to make sure every bite is safe and wholesome.",
    icon: <FaShieldAlt />,
  },

  {
    id: 4,
    title: "100% Organic",
    para: "Our produce is grown naturally, free from harmful chemicals, so you get pure and healthy goodness. ",
    icon: <FaSeedling />,
  },
];
