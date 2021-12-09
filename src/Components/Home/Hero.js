import React from "react";
import styled from "styled-components";
import heroBg from "../../Images/homePage/hero.jpg";
import Button from "../Button";
import { StyledHero } from "../../Styles/styles";

const Hero = () => {
  return (
    <StyledMainHero>
      <div className="title">
        <h1>Be Beautiful,</h1>
        <h1 className="secondaryTitle">Be You...</h1>
      </div>
      <div className="btns">
        <Button primary>TOP SELLERS</Button>
        <Button secondary>SHOP SPECIALS</Button>
      </div>
    </StyledMainHero>
  );
};

const StyledMainHero = styled(StyledHero)`
  background-image: url(${heroBg});

  .secondaryTitle {
    margin-left: 5rem;
  }
`;

export default Hero;
