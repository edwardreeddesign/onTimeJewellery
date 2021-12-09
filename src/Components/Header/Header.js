import React from "react";
import styled from "styled-components";
import LogoHeader from "./LogoHeader";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <StyledHeader>
      <LogoHeader />
      <Navigation />
    </StyledHeader>
  );
};

const StyledHeader = styled.div``;

export default Header;
