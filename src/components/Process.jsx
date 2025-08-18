import React from "react";
import Heading from "./Headings";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const Process = () => {
  const renderSteps = steps.map((items) => {
    return (
      <div className={`flex-1 ${items.id % 2 === 0 ? "md:-mt-50" : ""}`}>
        <span className="flex w-18 h-18 justify-center items-center rounded-full text-8xl text-white bg-zinc-800 outline-[3px] outline-offset-8 outline-zinc-800 outline-dashed mx-auto">
          {items.number}
        </span>
        <div className="flex mt-5 gap-x-5 ">
          <span className="flex justify-center items-center text-3xl bg-gradient-to-b from-orange-400 to-orange-500 w-13 h-13 rounded-full text-white mt-3">
            {items.icon}
          </span>

          <div className="flex-1 mb-14 ">
            <h4 className="text-zinc-800 text-2xl font-bold">{items.title}</h4>
            <p className="text-zinc-600 mt-2">{items.para}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-16">
        <div className="w-fit mr-auto">
          <Heading highlight="Our" heading="Process" />
        </div>
        <div className=" md:flex   item-center justify-center md:mt-20 mt-10  md:pt-50 ">
          {renderSteps}
        </div>
      </div>
    </section>
  );
};

export default Process;

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "It is long established fact that ",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "It is long established fact that ",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "It is long established fact that ",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "It is long established fact that ",
    icon: <BsTruck />,
  },
];
