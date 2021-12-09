import React from "react";
import Specials from "../Components/Home/Specials";
import Category from "../Components/Weddings/Category";
import Inspiration from "../Components/Weddings/Inspiration";
import WeddingHero from "../Components/Weddings/WeddingHero";

const Weddings = () => {
  return (
    <div>
      <WeddingHero />
      <Specials />
      <Category />
      <Inspiration />
    </div>
  );
};

export default Weddings;
