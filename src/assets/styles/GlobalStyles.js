import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
