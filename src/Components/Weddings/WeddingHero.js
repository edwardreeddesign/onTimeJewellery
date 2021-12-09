import React from "react";
import styled from "styled-components";
import heroBg from "../../Images/Weddings/weddingHero.jpg";
import Button from "../Button";

import { StyledHero } from "../../Styles/styles";

const WeddingHero = () => {
  return (
    <StyledWeddingHero>
      <div className="title">
        <h1>To a Lifetime of</h1>
        <h1>Adventures Together...</h1>
      </div>
      <div className="btns">
        <Button primary>SHOP WOMENS</Button>
        <Button secondary>SHOP MENS</Button>
      </div>
    </StyledWeddingHero>
  );
};

const StyledWeddingHero = styled(StyledHero)`
  background-image: url(${heroBg});
`;

export default WeddingHero;
