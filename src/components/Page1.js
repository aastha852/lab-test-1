import React from "react";
import HeaderComponent from "./HeaderComponent";
import Hero from "./Hero";
import Navbar from "./Navbar";
const Page1 = () => {
  return (
    <div>
      <Navbar />
      <h1>This is page1</h1>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
        autem laborum pariatur rerum magnam fugit accusantium? Tempore
        accusantium qui ad.
      </h2>
      <Hero />
    </div>
  );
};

export default Page1;
