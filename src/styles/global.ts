import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --backgrond: #000000;
    --text-color: #FFFFFF;
    --button: #8257E5;
    --border: #29292E;
    --border-menu-mobile: #A8A8B3;
    --text-color-menu-mobile: #E1E1E6;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Manrope', sans-serif;
  }

  body {
    background: var(--backgrond)
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    border: none;
  }
`