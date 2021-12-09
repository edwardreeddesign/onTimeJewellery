import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { StyledContent } from "../../Styles/styles";

//images
import ringsBanner from "../../Images/Jewellery/ringsBanner.jpg";
import earingsBanner from "../../Images/Jewellery/earingsBanner.jpg";
import necklaceBanner from "../../Images/Jewellery/necklaceBanner.jpg";
import braceletBanner from "../../Images/Jewellery/braceletBanner.jpg";
import watchesBanner from "../../Images/Jewellery/watchesBanner.jpg";
import background from "../../Images/Backgrounds/background.jpg";

const Content = () => {
  return (
    <StyledJewelleryContent>
      <div className="banner">
        <div className="img">
          <img src={ringsBanner} alt="ring" />
        </div>
        <div className="text">
          <h1>RINGS</h1>
          <h3>Spark a Conversation with our Sparkling Rings.</h3>
          <Button secondary>SHOP RINGS BY STYLE</Button>
        </div>
      </div>
      <div className="banner">
        <div className="img">
          <img src={earingsBanner} alt="ring" />
        </div>
        <div className="text">
          <h1>EARINGS</h1>
          <h3>Stand out with Stunning Earings.</h3>
          <Button secondary>SHOP RINGS BY STYLE</Button>
        </div>
      </div>
      <div className="banner">
        <div className="img">
          <img src={necklaceBanner} alt="ring" />
        </div>
        <div className="text">
          <h1>NECKLACES</h1>
          <h3>Eye Catching Necklaces that Turn Heads.</h3>
          <Button secondary>SHOP RINGS BY STYLE</Button>
        </div>
      </div>
      <div className="banner">
        <div className="img">
          <img src={braceletBanner} alt="ring" />
        </div>
        <div className="text">
          <h1>BRACELETS</h1>
          <h3>Beautiful Braclets to Embrace the Day.</h3>
          <Button secondary>SHOP BRACELETS BY STYLE</Button>
        </div>
      </div>
      <div className="banner">
        <div className="img">
          <img src={watchesBanner} alt="ring" />
        </div>
        <div className="text">
          <h1>WATCHES</h1>
          <h3>Stylish Watches to Own Every Moment.</h3>
          <Button secondary>SHOP WATCHES BY STYLE</Button>
        </div>
      </div>
    </StyledJewelleryContent>
  );
};

const StyledJewelleryContent = styled(StyledContent)`
  .banner {
    background-image: url(${background});
  }
`;
export default Content;
