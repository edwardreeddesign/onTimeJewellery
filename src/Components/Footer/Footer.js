import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <h1>ON TIME JEWELLERS</h1>
      <div className="links">
        <ul>
          <li>Home</li>
          <li>Weddings</li>
          <li>Womens</li>
          <li>Mens</li>
          <li>Gifts</li>
          <li>Service</li>
        </ul>
        <ul>
          <li>Refunds</li>
          <li>Frequently Asked Questions</li>
          <li>Shipping</li>
          <li>Schedule Appointment</li>
        </ul>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--clr-dark);
  color: var(--clr-light);
  padding: 2rem 0;
  h1 {
    color: var(--clr-accent);
    letter-spacing: 0.2rem;
  }
  .links {
    width: 100%;
    display: flex;
    justify-content: space-around;

    ul {
      list-style-type: none;
    }
  }
`;

export default Footer;
