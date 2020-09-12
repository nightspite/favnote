import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`${css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    padding: 0;
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }
`}`;

export default GlobalStyle;
