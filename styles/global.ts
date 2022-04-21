import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  #__next {
    height: 100%;
  }

  .reset {
    // Reset styles
    padding: 0;
    margin: 0;
    font: inherit;
    letter-spacing: inherit;
    list-style: none;
    color: inherit;
    background-color: transparent;
    border: none;
    border-radius: 0;
    text-align: inherit;
    text-decoration: inherit;
    cursor: inherit;
    outline: none;
    caret-color: inherit;
  }

  .offTransition {
    transition-duration: 0ms !important;
  }
`

export default GlobalStyles
