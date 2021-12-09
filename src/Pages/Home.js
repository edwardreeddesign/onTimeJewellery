import React from "react";
import ContentSection from "../Components/Home/ContentSection";
import Hero from "../Components/Home/Hero";
import Specials from "../Components/Home/Specials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Specials />
      <ContentSection />
    </div>
  );
};

export default Home;
