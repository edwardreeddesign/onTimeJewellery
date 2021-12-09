import React from "react";
import styled from "styled-components";
import Specials from "../Components/Home/Specials";
import Content from "../Components/Jewellery/Content";
import JewelleryHero from "../Components/Jewellery/JewelleryHero";

const Jewellery = () => {
  return (
    <StyledJewellery>
      <JewelleryHero />
      <Specials />
      <Content />
    </StyledJewellery>
  );
};

const StyledJewellery = styled.div``;

export default Jewellery;
