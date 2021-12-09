import React from "react";
import styled from "styled-components";
import Button from "../Button";

import { StyledContent } from "../../Styles/styles";
import background from "../../Images/Backgrounds/background.jpg";

//images
import bridalBanner from "../../Images/Gifts/bridalPartyGiftBanner.jpg";
import anniversaryBanner from "../../Images/Gifts/anniversaryGiftBanner.jpg";
import luxuryBanner from "../../Images/Gifts/luxuryGiftBanner.jpg";
import birthdayBanner from "../../Images/Gifts/birthdayGiftBanner.jpg";
import holidayBanner from "../../Images/Gifts/holidayGiftBanner.jpg";

const GiftsContent = () => {
  return (
    <StyledGiftsContent>
      <div className="banner">
        <div className="img">
          <img src={bridalBanner} alt="ring" />
        </div>
        <div className="text">
          <h1>BRIDAL PARTY GIFTS</h1>
          <h3>
            On your Wedding Day, You’re not doing this Alone. Show Them how Much
            you Appreciate Their Support.
          </h3>
          <Button secondary>SHOP BRIDAL PARTY GIFTS</Button>
        </div>
      </div>
      <div className="banner">
        <div className="img">
          <img src={anniversaryBanner} alt="ring" />
        </div>
        <div className="text">
          <h1>ANNIVERSARY GIFTS</h1>
          <h3>
            Sharing your Love can’t wait. Anniversary Jewelry Gifts are a Great
            way to Remind your Partner of the Loving Devotion you Share all Year
            Long.
          </h3>
          <Button secondary>SHOP ANNIVERSARY GIFTS</Button>
        </div>
      </div>
      <div className="banner">
        <div className="img">
          <img src={luxuryBanner} alt="ring" />
        </div>
        <div className="text">
          <h1>LUXURY GIFTS</h1>
          <h3>
            There’s no Better way to Show your Loved Ones Just How Much They
            Mean to you Than With Something Luxurious.
          </h3>
          <Button secondary>SHOP LUXURY GIFTS</Button>
        </div>
      </div>
      <div className="banner">
        <div className="img">
          <img src={birthdayBanner} alt="ring" />
        </div>
        <div className="text">
          <h1>BIRTHDAY GIFTS</h1>
          <h3>
            Birthdays are the Days we Lift our Loved ones High and let them Know
            how Much they Mean to Us.
          </h3>
          <Button secondary>SHOP BIRTHDAY GIFTS</Button>
        </div>
      </div>
      <div className="banner">
        <div className="img">
          <img src={holidayBanner} alt="ring" />
        </div>
        <div className="text">
          <h1>HOLIDAY GIFTS</h1>
          <h3>
            Holidays are a Joyous Time Filled with Family, Friends and Love.
          </h3>
          <Button secondary>SHOP HOLIDAY GIFTS</Button>
        </div>
      </div>
    </StyledGiftsContent>
  );
};

const StyledGiftsContent = styled(StyledContent)`
  .banner {
    background-image: url(${background});
  }
`;

export default GiftsContent;
