import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../Images/Logos/onTimeLogo.png";

// icons
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

const LogoHeader = () => {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  };

  return (
    <StyledLogo>
      <img src={Logo} alt="" />
      <div className="icons">
        <AiFillInstagram className="icon" />
        <AiFillFacebook className="icon" />
        <AiOutlineShoppingCart className="icon" />
        <div className="search">
          <input
            type="text"
            className={active ? "active input" : "input"}
            placeholder="Search..."
          />
          <AiOutlineSearch
            className={active ? "active icon search-btn" : "icon search-btn "}
            onClick={toggle}
          />
        </div>
      </div>
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  img {
    width: 300px;
    filter: drop-shadow(2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02))
      drop-shadow(6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028))
      drop-shadow(12.5px 12.5px 10px rgba(0, 0, 0, 0.035))
      drop-shadow(22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042))
      drop-shadow(41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05))
      drop-shadow(100px 100px 80px rgba(0, 0, 0, 0.07));
  }

  .icons {
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 1rem;
    gap: 2rem;
    transition: all 300ms ease;

    .icon {
      font-size: 2rem;
      color: var(--clr-dark);
      /* background: var(--clr-light); */
      filter: drop-shadow(2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02))
        drop-shadow(6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028))
        drop-shadow(12.5px 12.5px 10px rgba(0, 0, 0, 0.035))
        drop-shadow(22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042))
        drop-shadow(41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05))
        drop-shadow(100px 100px 80px rgba(0, 0, 0, 0.07));
      transition: all 350ms ease-in-out;

      &:hover {
        transform: scale(1.05);
      }
    }
    .search {
      display: flex;
      position: relative;
      height: 2rem;

      .input {
        border: none;
        border-radius: 0.2rem;
        font-size: 1.5rem;
        height: 2rem;
        width: 2rem;
        transition: all 350ms ease;

        &:focus {
          outline: none;
        }

        &.active {
          width: 11rem;
        }
      }

      .search-btn {
        position: absolute;
        inset: 0;
        background: var(--clr-light);
        border-radius: 0.2rem;
        transition: all 350ms ease;

        &.active {
          transform: translateX(11rem);
        }
      }
    }
  }
`;

export default LogoHeader;
