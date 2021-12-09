import React from "react";
import styled from "styled-components";

const Navigation = () => {
  return (
    <StyledNav>
      <ul>
        <li>HOME</li>
        <li>WEDDINGS</li>
        <li>JEWELLERY</li>
        <li>GIFTS</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  background: var(--clr-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--ffTitle);
  height: 5vh;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
    list-style-type: none;
  }
`;

export default Navigation;
