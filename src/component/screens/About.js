import React from "react";
import styled from "styled-components";

import { Text } from "../../constant";

const About = () => {
  return (
    <Container>
      <Title>About Me</Title>
      <SubTitle>I'm A FullStack Developer</SubTitle>
      <AboutMe>{Text}</AboutMe>
    </Container>
  );
};

export default About;

  const Container = styled.div`
    width: 100%;
    padding: 78px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all .5s ease-in-out;
    @media (max-width: 821px) {
      padding: 200px;
}
  `;

const Title = styled.h1`
  color: #fff;
  font-size: 50px;
  text-transform: capitalize;
  margin-bottom: 20px;
  transition: all .5s ease-in-out;
    @media (max-width: 821px) {
      font-size: 60px;
      
     
}
`;
const SubTitle = styled.h2`
  color: gray;
  font-size: 25px;
  text-transform: capitalize;
  margin-bottom: 25px;
  letter-spacing: 2px;
  transition: all .5s ease-in-out;
  @media (max-width: 821px) {
    width: 350px;

}
`;
const AboutMe = styled.div`
  color: #fff;
  width: 550px;
  letter-spacing: 1px;
  line-height: 28px;
  font-size: 18px;
  margin-bottom: 45px;
  transition: all .5s ease-in-out;
  @media (max-width: 821px) {
    width: 350px;
}
`;

