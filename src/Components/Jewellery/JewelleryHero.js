import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { StyledHero } from "../../Styles/styles";
import jewelleryHero from "../../Images/Jewellery/jewelleryHero.jpg";

const JewelleryHero = () => {
  return (
    <StyledJewelleryHero>
      <div className="title">
        <h1>Find the Perfect</h1>
        <h1>Piece of Jewellery</h1>
        <h1>for any Occasion</h1>
      </div>
      <div className="btns">
        <Button primary>SHOP WOMENS</Button>
        <Button secondary>SHOP MENS</Button>
      </div>
    </StyledJewelleryHero>
  );
};

const StyledJewelleryHero = styled(StyledHero)`
  background-image: url(${jewelleryHero});
`;

export default JewelleryHero;
