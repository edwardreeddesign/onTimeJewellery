import styled from "styled-components";

export const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  min-height: 75vh;
  background-size: cover;
  background-position: center;

  .title {
    h1 {
      font-family: var(--ffAccent);
      color: var(--clr-light);
      font-size: clamp(2.7rem, 3vw, 3.5rem);
      text-shadow: 3px 3px rgba(0, 0, 0, 0.8);
      line-height: 3rem;
    }
  }

  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @media (min-width: 620px) {
      flex-direction: row;
    }
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 4rem;
  margin-bottom: 5rem;
  .banner {
    padding: 2rem;
    box-shadow: var(--box-shadow);
    /* margin-bottom: 3rem; */
    width: 80%;
    margin: 0 auto;

    @media (min-width: 830px) {
      display: flex;
      margin: 0 5rem;

      &:nth-child(odd) {
        flex-direction: row-reverse;

        img:nth-child(odd) {
          transform: rotate(21deg);
          margin: 2rem -4rem 0 4rem;

          &:hover {
            transform: scale(1.05) rotate(21deg);
          }
        }

        .text {
          margin: 2rem 7rem;
        }
      }
    }
    .img {
      img {
        width: 100%;
        border: 1.5rem solid #fff;
        box-shadow: var(--box-shadow);
        margin-bottom: 3rem;
        transition: all 300ms ease-in-out;

        @media (min-width: 830px) {
          height: 400px;
          width: 600px;
          transform: rotate(-21deg);
          margin: 2rem 4rem 0 -4rem;

          &:hover {
            transform: scale(0.95) rotate(-21deg);
          }
        }
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      margin: 2rem 1rem;
      h1,
      h3 {
        color: var(--clr-light);
      }
      h1 {
        margin-bottom: 2rem;
      }
      h3 {
        font-family: var(--ffMain);
        margin-bottom: 3rem;
      }
    }
  }
`;
