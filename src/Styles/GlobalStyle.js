import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   
   :root {
        --clr-light: #FAF2F4;
        --clr-dark: #2E2E2E;
        --clr-accent:#E1A435;

        --ffMain: 'Cormorant Garamond', serif;
        --ffTitle: 'Bebas Neue', cursive;
        --ffAccent: 'Tangerine', cursive ;

        --box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),12.5px 12.5px 10px rgba(0, 0, 0, 0.035),22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),100px 100px 80px rgba(0, 0, 0, 0.07);
    }

*,
*::before,
*::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
    background-color: var(--clr-light);
    color: var(--clr-dark);
    font-family: var(--ffMain);
}

h1, h2, h3, a {
    font-family: var(--ffTitle);
    letter-spacing: .05rem;
}

a {
    text-decoration: none;
    color: var(--clr-dark);
  }
    
`;

export default GlobalStyle;
