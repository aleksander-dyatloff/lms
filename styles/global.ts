import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
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
    width: 100%;
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
