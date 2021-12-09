import React from "react";
import GiftsContent from "../Components/Gifts/GiftsContent";
import GiftsHero from "../Components/Gifts/GiftsHero";
import Specials from "../Components/Home/Specials";

const Gifts = () => {
  return (
    <div>
      <GiftsHero />
      <Specials />
      <GiftsContent />
    </div>
  );
};

export default Gifts;
