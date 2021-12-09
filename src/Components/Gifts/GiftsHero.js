import React from "react";
import styled from "styled-components";
import { StyledHero } from "../../Styles/styles";
import giftsHero from "../../Images/Gifts/giftsHero.jpg";
import Button from "../Button";

const GiftsHero = () => {
  return (
    <StyledGiftsHero>
      <div className="title">
        <h1>Gifts for all</h1>
        <h1>Occasions and</h1>
        <h1>Celebrations.</h1>
      </div>
      <div className="btns">
        <Button primary>SHOP GIFTS</Button>
        <Button secondary>SHOP BY STYLE</Button>
      </div>
    </StyledGiftsHero>
  );
};

const StyledGiftsHero = styled(StyledHero)`
  background-image: url(${giftsHero});
`;
export default GiftsHero;
