import React from "react";
import styled from "styled-components";
import { trans } from "../../styles/GlobalStyles";
import Progress from "./Progress";


const Skills = ({ forwardeRef }) => {
  return (
    <Container ref={forwardeRef}>
     
      <Progress />
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  display: flex;
  animation: ${trans} 0.75s;
  height: 600px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 414px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-family: "poppinse", sans-serif;
  color: gray;
  &:hover {
    color: white;
  }
`;
