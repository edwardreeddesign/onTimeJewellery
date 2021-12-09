import React from "react";
import styled from "styled-components";

import inspirationImg from "../../Images/Weddings/inspirationImg.jpg";

const InspirationImg = () => {
  return (
    <StyledImage>
      <img src={inspirationImg} alt="couple hugging in the sand" />
    </StyledImage>
  );
};

const StyledImage = styled.div`
  img {
    width: 100%;
    box-shadow: var(--box-shadow);
  }
`;

export default InspirationImg;
