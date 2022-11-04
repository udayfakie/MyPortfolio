import React from "react";
import styled from "styled-components";
import { trans } from "../../styles/GlobalStyles";
import Progress from "./Progress";

const Skills = () => {
  return (
    <Container>
      <Title>Technology</Title>
      <Progress />
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  animation: ${trans} 0.75s;
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
font-family: "poppinse", sans-serif;
  color: gray;
  &:hover {
    color: white;
  }
`;
