import React from "react";
import styled, { keyframes } from "styled-components";
import Progress from "./Progress";

const Skills = () => {
  return (
    <Container>
      <Progress />
    </Container>
  );
};

export default Skills;

const trans = keyframes`
from{
opacity: 0;
transform: rotateY(-20deg);

}
to{
  opacity: 1;
transform: rotateX(0);
}
`;
const Container = styled.div`
  animation: ${trans} 0.75s;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
