import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Category from "../Category";
import Values from "../Values";
import Products from "../products";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Values />
      <Products />
    </div>
  );
};

export default Home;
