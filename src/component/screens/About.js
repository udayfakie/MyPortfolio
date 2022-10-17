import React from "react";
import styled from "styled-components";
import Uday from '../../assets/Uday.JPG'
import { Text } from "../../constant";

const About = () => {
  return (
    <Container>
      <SubContainer>
        <Image src={Uday} alt="img" />
        <TextContainer>
          <Title>About Us</Title>
          <SubTitle>I'm A FullStack Web Developer</SubTitle>
          <AboutMe>
        {Text}
          </AboutMe>
        </TextContainer>
      </SubContainer>
    </Container>
  );
};

export default About;

const Container = styled.section`
  width: 100%;
 padding: 78px 0px ;

`;
const Title = styled.h1`
  color: #fff;
  font-size: 80px;
  text-transform: capitalize;
  margin-bottom: 20px;
`;
const SubTitle = styled.h2`
color: gray;
font-size: 25px;
text-transform: capitalize;
margin-bottom: 25px;
letter-spacing: 2px;
`;
const AboutMe = styled.div`
  color: #fff;
  letter-spacing: 1px;
  line-height: 28px;
  font-size: 18px;
  margin-bottom: 45px;
`;

const Image = styled.img`
  width: 420px;
  height: auto;
  border-radius: 25px;
`;

const SubContainer = styled.div`
  width: 1130;
  max-width: 95%;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: space-around;
 
`;

const TextContainer = styled.div`
width: 550px;
`
const StyledSpan = styled.span`
color: #676668;
`
