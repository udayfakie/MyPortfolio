import React from "react";
import styled, { keyframes } from "styled-components";

import { Text } from "../../constant";

const About = () => {
  return (
    <Container>
      {/* <Title>About Me</Title> */}
      <AboutMe>{Text}</AboutMe>
    </Container>
  );
};

export default About;
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.5s ease-in-out;
  @media (max-width: 821px) {
    padding: 200px;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  width: 450px;
  transition: all 0.5s ease-in-out;
  text-decoration: underline red 0rem;
  text-underline-offset: 0.5em;

  @media (max-width: 821px) {
  }
`;

const AboutMe = styled.div`
  color: #fff;
  width: 550px;
  letter-spacing: 1px;
  line-height: 28px;
  font-size: 18px;
  margin-bottom: 45px;
  transition: all 0.5s ease-in-out;
  @media (max-width: 821px) {
    width: 350px;
  }
`;
