import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
  * {
    margin:  0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body{
    background: #000;
    color: #FFF;
    font-size: 18px;
  }

  // Adicione quais mais regras desejar!
`;