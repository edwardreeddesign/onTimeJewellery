import React from "react";
import styled from "styled-components";

const Button = ({ children, primary, secondary, outline }) => {
  return (
    <StyledButton primary={primary} secondary={secondary} outline={outline}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.div`
  cursor: pointer;
  font-family: var(--ffTitle);
  letter-spacing: 0.2rem;
  text-decoration: none;
  display: flex;
  border-radius: 0.2rem;
  align-items: center;
  justify-content: center;
  width: fit-content;
  font-size: clamp(0.7rem, 3vw, 1.1rem);
  padding: 1.25rem 2.25rem;
  border: none;
  box-shadow: ${(p) => (p.outline ? "none" : "var(--box-shadow)")};
  background: ${(p) =>
    p.primary
      ? "var(--clr-accent)"
      : p.secondary
      ? "var(--clr-light)"
      : p.outline
      ? "transparent"
      : ""};
  transition: all 350ms ease-in-out;

  &:hover {
    transform: scale(0.9);
    background: ${(p) =>
      p.primary ? "#dfae52" : p.secondary ? "#dfdcdd" : ""};
  }
`;

export default Button;
