import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html {
    font-size: 62.5%;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }
  html, body, #root {
    height: 100%;

  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.body};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 400 1.6rem 'Nunito', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
  }

  textarea{
    resize: none;
  }
`
