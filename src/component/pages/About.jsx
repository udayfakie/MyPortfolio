import React from "react";
import styled from "styled-components";
import Uday from '../Uday.JPG'

const About = () => {
  return (
    <Container>
      <LeftContainer>
        <Title>About Me</Title>
        <Description>
          I'm a Junior Full Stack Developer who loves creative problem solving
          and passionate about emerging technologies. I'm a fast learner who is
          looking for my first job as a developer. Experienced with: JavaScript,
          React.js, Node.js, MongoDB, HTML, CSS, APIs, JSON
        </Description>

      </LeftContainer>
      <RightContainer>
        <Img src={Uday} alt="uday"/>
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
  
  
  @media only screen and (max-width: 600px) {
    height: 60%;
  }
  @media only screen and (min-width: 600px) {
    height: 40%;
  }
  @media only screen and (min-width: 992px) {
    height: 80%;
  }
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: darkblue;
  width: 60%;
  text-align: center;
  bottom: 80px;
 position: relative;

  @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 30px;
  }
  @media only screen and (min-width: 600px) {
    width: 85%;
    font-size: 30px;
  }
  @media only screen and (min-width: 992px) {
    width: 85%;
  }
`;

const Description = styled.div`
  color: gray;
  font-size: 15px;
  bottom: 80px;
 position: relative;
  
  @media only screen and (max-width: 600px) {
    width: 80%;
    text-align: center;
   
  }
  @media only screen and (min-width: 600px) {
    width: 70%;
    
  }
  @media only screen and (min-width: 992px) {
    width: 70%;
  }
`;

const LeftContainer = styled.div`
  width: 60%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media only screen and (min-width: 600px) {
    width: 50%;
  
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    position: relative;
    top: 80px;
  }
  @media only screen and (min-width: 992px) {
    width: 60%;
  }
`;
const RightContainer = styled.div`
  width: 50%;
  height: 92vh;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Img = styled.img`
width: 300px;
border-radius: 10px;
position: relative;
  top: 80px;
  left: 20px;


@media only screen and (min-width: 600px) {
    width: 400px;
    
  }
  @media only screen and (min-width: 992px) {
    width: 500px;
  }
`
