import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
  margin: 0;
    padding: 0;
  }
   *, *::after, *::before {
  box-sizing: border-box;
  }
  body {
    ${'' /* align-items: center; */}
    justify-content: center;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    color: #EFFFFA;
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    ${'' /* height: 100vh; */}
    ${'' /* justify-content: center; */}
    ${'' /* text-rendering: optimizeLegibility; */}
    
  }
  `;
