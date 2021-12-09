import React from "react";
import styled from "styled-components";

//images
import anniversary from "../../Images/rings/anniversary.jpg";
import weddingBand from "../../Images/rings/weddingBand.jpg";
import engagement from "../../Images/rings/engagement.png";
import bridalSet from "../../Images/rings/bridalSet.jpg";

const Category = () => {
  return (
    <StyledCategory>
      <h1>SHOP BY CATEGORY</h1>
      <div className="imgs">
        <div className="ring">
          <img src={engagement} alt="engagement ring" />
          <label htmlFor="text">ENGAGEMENT</label>
        </div>
        <div className="ring">
          <img src={weddingBand} alt="wedding ring" />
          <label htmlFor="text">WEDDING BANDS</label>
        </div>
        <div className="ring">
          <img src={anniversary} alt="anniversary ring" />
          <label htmlFor="text">ANNIVERSARY BANDS</label>
        </div>
        <div className="ring">
          <img src={bridalSet} alt="bridal Sets" />
          <label htmlFor="text">BRIDAL SETS</label>
        </div>
      </div>
    </StyledCategory>
  );
};

const StyledCategory = styled.div`
  min-height: 40vh;
  background: var(--clr-dark);
  text-align: center;
  padding: 5rem 0;
  color: var(--clr-light);
  h1 {
    margin-bottom: 2rem;
  }
  .imgs {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    text-align: center;

    label {
      margin: 1rem 0;
    }
  }
  .ring {
    display: flex;
    flex-direction: column;
  }
  img {
    height: 260px;
    width: 260px;
    box-shadow: var(--box-shadow);
  }
`;

export default Category;
