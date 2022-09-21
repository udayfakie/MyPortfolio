import styled from "styled-components";

export const Card = styled.div`
  width: 350px;
  margin: 10px 10px;
-webkit-box-shadow: 5px 4px 15px -8px #000000;
box-shadow:  5px 4px 15px -8px #000000;

  

`;
export const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  color: darkblue;
`;

export const Description = styled.div`
  color: gray;
  font-size: 15px;
`;
export const Button = styled.a`
  color: red;
  font-weight: bold;
  padding: 30px;
  cursor: pointer;
`;
