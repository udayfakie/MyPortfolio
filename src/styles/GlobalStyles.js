<<<<<<< HEAD

import { createGlobalStyle, keyframes} from "styled-components";
=======
import { createGlobalStyle } from "styled-components";
>>>>>>> parent of 31f8b30 ( chech)

export const GlobalStyles = createGlobalStyle`
  html, body {
  margin: 0;
    padding: 0;
  }
   *, *::after, *::before {
  box-sizing: border-box;
  }
  body {
    justify-content: center;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    color: #EFFFFA;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    
  }
  `;
export const widthFildAnimation = keyframes`
0% {
  width: 10%;

}
100% {
 
}
`;

export const trans = keyframes`
from{
opacity: 0;
transform: rotateY(-20deg);
}
to{
  opacity: 1;
transform: rotateX(0);
}
`;