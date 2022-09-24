import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <LeftContainer>
        <H1>About & Skills</H1>
        <Hr></Hr>
        <P>
          I'm a Junior Full Stack Developer who loves creative problem solving
          and passionate about emerging technologies. I'm a fast learner who is
          looking for my first job as a developer. Experienced with: JavaScript,
          React.js, Node.js, MongoDB, HTML, CSS, APIs, JSON
        </P>
      </LeftContainer>
      <RightContainer>
        
      </RightContainer>
    </Container>
  );
};

export default About;

const Container = styled.div`
  width: 100%;
  height: 92vh;
  display: flex;
  text-align: center;
`;

const H1 = styled.h1`
  font-weight: bold;
  font-size: 70px;
  color: darkblue;
`;
const P = styled.p`
  font-weight: bold;
  width: 500px;
  color: darkblue;
  margin-left: 71px;
  margin-top: 19px;
`;
const LeftContainer = styled.div`
  width: 50%;
  height: 92vh;
`;
const RightContainer = styled.div`
  width: 50%;
  height: 92vh;
  background-color: lightblue;
`;
const Hr = styled.hr`
  width: 400px;
  height: 3px;
  margin-left: 130px;
  background-color: black;
`;
