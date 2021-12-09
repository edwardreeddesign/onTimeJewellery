import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  // const { pathname} = useLocation()
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/weddings">WEDDINGS</Link>
        </li>
        <li>
          <Link to="/jewellery">JEWELLERY</Link>
        </li>
        <li>
          <Link to="/gifts">GIFTS</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
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
