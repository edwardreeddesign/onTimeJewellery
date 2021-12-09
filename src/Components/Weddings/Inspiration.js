import React from "react";
import styled from "styled-components";
import InspirationImg from "./InspirationImg";
import InspirationMessage from "./InspirationMessage";

import inspirationImg from "../../Images/Weddings/inspirationImg.jpg";

const Inspiration = () => {
  return (
    <StyledInspiration>
      <h1 className="title">INSPIRATION</h1>
      <div className="content">
        <InspirationImg />
        <InspirationMessage />
      </div>
    </StyledInspiration>
  );
};

const StyledInspiration = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  background: #fff;

  .title {
    text-align: center;
    margin-bottom: 5rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin: 4rem;

    @media (min-width: 820px) {
      flex-direction: row;
      gap: 4rem;
    }
  }
`;

export default Inspiration;
