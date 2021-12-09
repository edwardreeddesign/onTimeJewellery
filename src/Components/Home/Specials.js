import React from "react";
import styled from "styled-components";

const Specials = () => {
  return (
    <StyledSpecials>
      <h1>Insert any specials you have here.</h1>
    </StyledSpecials>
  );
};

const StyledSpecials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 25vh;
`;

export default Specials;
