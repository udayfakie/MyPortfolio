import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SocialLinks from "../SocialLinks";
import { Text } from "../../constant";
import { trans } from "../../styles/GlobalStyles";


const Home = () => {
  return (
    <>
      <Container>
        <Title>Uday Fakie </Title>
        <AboutMe>{Text}</AboutMe>
        <ButtonsContainer>
          <Button to="/project">View Work</Button>
          <Resume href="UdayFakieCV.pdf" download="UdayFakieCV.pdf">
            CV
          </Resume>
        </ButtonsContainer>
        <SocialLinks />
      </Container>
      
    </>
  );
};

export default Home;

const Container = styled.div`
  animation: ${trans} 0.75s;
  display: flex;
  width: 100%;
  height: 600px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in-out;
  @media (max-width: 414px) {
    padding: 15rem;
    width: 100%;

  }
`;
const AboutMe = styled.div`
  padding: 10px;
  color: #fff;
  width: 550px;
  letter-spacing: 1px;
  line-height: 28px;
  font-size: 18px;
  /* margin-bottom: 45px; */
  transition: all 0.5s ease-in-out;
  @media (max-width: 821px) {
    width: 300px;
  }
`;

const Title = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  font-family: "Poppins", sans-serif;
  font-size: 40px;
  transition: all 1s ease-in-out;
  @media (max-width: 740px) {
    font-size: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ButtonsContainer = styled.div`
  height: 50px;
  width: 240px;
  align-items: center;
  justify-content: center;
  display: flex;
`;
const Resume = styled.a`
  text-decoration: none;
  margin-left: 5px;
  font-weight: bold;
  color: #000;
  background: linear-gradient(to right, aliceblue 40%, orange 50%);
  padding: 10px 30px;
  cursor: pointer;
  border-radius: 10px;
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.7s ease-in-out;
  :hover {
    background-position: left bottom;
    cursor: pointer;
  }
  @media (max-width: 740px) {
    font-size: 10px;
  }
`;
const Button = styled(NavLink)`
  text-decoration: none;
  margin-left: 5px;
  font-weight: bold;
  color: #000;
  background: linear-gradient(to right, aliceblue 40%, orange 50%);
  padding: 10px 30px;
  cursor: pointer;
  border-radius: 10px;
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.7s ease-in-out;

  :hover {
    background-position: left bottom;
    cursor: pointer;
  }

  @media (max-width: 740px) {
    font-size: 10px;
  }
`;
