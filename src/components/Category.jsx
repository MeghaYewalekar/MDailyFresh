import React from "react";
import Heading from "./Headings";
import fruits_and_veggies from "../../src/assets/fruits-and-veggies.png";
import dairy_and_eggs from "../../src/assets/dairy-and-eggs.png";
import meat_and_seafood from "../../src/assets/meat-and-seafood.png";
import Button from "./Button";

const Category = () => {
  const renderCards = category.map((card) => {
    return (
      <div className="flex-1 ">
        {/* card image */}
        <div className=" w-full min-h-[30vh] relative -mb-10">
          <img src={card.image} className="absolute bottom-0"/>
        </div>

        {/* card content*/}
        <div className="bg-zinc-100 pt-17 p-8 rounded-xl">
          <h3 className="text-zinc-800 text-3xl font-bold">{card.title}</h3>
          <p className="text-zinc-600  mt-3 mb-9">{card.description}</p>

          <Button content="See All" />
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="py-20 max-w-[1400px] mx-auto px-10">
        <Heading highlight="Shop" heading="by Category" />

        {/* Category Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10  md:mt-15 ">{renderCards}</div>

        {/* <Heading highlight="Our" heading="Values"/>
      <Heading highlight="Our" heading="Products"/> */}
      </div>
    </section>
  );
};

export default Category;

const category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description:
       "Fresh, seasonal fruits and green veggies picked daily for your healthy meals.",
    image: fruits_and_veggies,
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Farm-fresh milk, curd, cheese, and eggs — straight from trusted local dairies.",
    image: dairy_and_eggs,
  },
  {
    id: 3,
    title: "Meat & Seafood",
    description:
      "High-quality meat and seafood — cleaned, packed, and delivered with care.",
    image: meat_and_seafood,
  },
];
