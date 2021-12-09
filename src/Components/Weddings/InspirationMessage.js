import React from "react";
import styled from "styled-components";

const InspirationMessage = () => {
  return (
    <StyledMessage>
      <div className="message">
        <h2>SHOP</h2>
        <p>
          Discover our stunning collections of wedding bands and engagement
          rings to find a ring that's symbolic of your brilliant love.
        </p>
      </div>

      <div className="message">
        <h2>INSPIRE</h2>
        <p>
          From the first "I do" to your first anniversary and beyond, get
          inspired by our exquisite collections of engagement rings and wedding
          bands.
        </p>
      </div>

      <div className="message">
        <h2>EDUCATE</h2>
        <p>
          Explore our education guides to ensure you honor your beloved with an
          extraordinary piece of jewelry your partner will cherish.
        </p>
      </div>
    </StyledMessage>
  );
};

const StyledMessage = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 0 6rem; */

  h2 {
    margin: 1.25rem 0;
  }

  p {
    margin-bottom: 4rem;
  }

  @media (min-width: 820px) {
    p {
      margin-bottom: 7rem;
    }
  }
`;

export default InspirationMessage;
