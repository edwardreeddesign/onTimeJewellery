import React from "react";
import styled from "styled-components";
import wedding from "../../Images/homePage/wedding.jpg";
import womens from "../../Images/homePage/womens.jpg";
import mens from "../../Images/homePage/mens.jpg";
import gifts from "../../Images/homePage/gifts.jpg";
import service from "../../Images/homePage/service.jpg";

const ContentSection = () => {
  return (
    <StyledContent>
      <div className="title">
        <h1>WEDDINGS</h1>
        <img src={wedding} alt="" />
      </div>
      <div className="title">
        <h1>WOMENS</h1>
        <img src={womens} alt="" />
      </div>
      <div className="title">
        <h1>MENS</h1>
        <img src={mens} alt="" />
      </div>
      <div className="title">
        <h1>GIFTS</h1>
        <img src={gifts} alt="" />
      </div>
      <div className="title">
        <h1>SERVICE</h1>
        <img src={service} alt="" />
      </div>
    </StyledContent>
  );
};

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media (min-width: 768px) {
      padding: 0 5rem;
      flex-direction: row;
      align-items: flex-start;

      &:nth-child(odd) {
        flex-direction: row-reverse;
      }
    }

    h1 {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      background: var(--clr-dark);
      color: var(--clr-light);
      height: 165px;
      box-shadow: var(--box-shadow);

      @media (min-width: 768px) {
        height: 330px;
        width: 489px;
      }
    }

    img {
      width: 100%;
      height: 508px;
      object-fit: cover;
      object-position: center;
      box-shadow: var(--box-shadow);

      @media (min-width: 768px) {
        width: 60%;
      }

      @media (min-width: 968px) {
        width: 100%;
      }
    }
  }
`;

export default ContentSection;
