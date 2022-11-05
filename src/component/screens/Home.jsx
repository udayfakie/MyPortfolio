import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
<<<<<<< HEAD
import SocialLinks from "../SocialLinks";
import { Text } from "../../constant";
import { trans } from "../../styles/GlobalStyles";
const Home = () => {
  return (
    <Container>
      <Title>Uday Fakie </Title>
      <AboutMe>{Text}</AboutMe>
=======
import Icons from "../Icons";

const Home = () => {
  return (
    <Container>
      <Title>
        Hey there,<br></br>I'm a FullStack Developer
      </Title>
      <Decription>
        with basic knowledge in developing
        great user interface and real life interactions.
      </Decription>
>>>>>>> parent of 31f8b30 ( chech)
      <ButtonsContainer>
        <Button to="/project">View My Work</Button>
        <Resume href="UdayFakieCV.pdf" download="UdayFakieCV.pdf">
          CV
        </Resume>
      </ButtonsContainer>
<<<<<<< HEAD
      <SocialLinks />
=======
      <Icons />
>>>>>>> parent of 31f8b30 ( chech)
    </Container>
  );
};

export default Home;

const Container = styled.div`
<<<<<<< HEAD
  animation: ${trans} 0.75s;
=======
>>>>>>> parent of 31f8b30 ( chech)
  display: flex;
  width: 100%;
  height: 600px;
  flex-direction: column;
<<<<<<< HEAD
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in-out;
  @media (max-width: 740px) {
    padding: 15rem;
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
=======
  padding: 5rem ;
  align-items: center;
  

  `;

const Title = styled.h1`
  font-family: sans-serif;
  color: #f5f5f5;
  text-align: center;
  @media (max-width: 740px) {
    font-size: 18px;
  }
  `;

const Decription = styled.p`
margin-top: -6px;
margin-bottom: 20px;
display: flex;
  flex-wrap: wrap;
  width: 30%;
  font-size: 20px;
  text-align: center;
  color: gray;
  @media (max-width: 740px) {
    width: 100%;
>>>>>>> parent of 31f8b30 ( chech)
  }

`;

const ButtonsContainer = styled.div`
<<<<<<< HEAD
  height: 50px;
  width: 240px;
  align-items: center;
  justify-content: center;
=======
>>>>>>> parent of 31f8b30 ( chech)
  display: flex;
  `;
const Resume = styled.a`
  text-decoration: none;
  margin-left: 5px;
  font-weight: bold;
  color: #000;
  background: linear-gradient(to right, aliceblue 50%, orange 50%);
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
  background: linear-gradient(to right, aliceblue 50%, orange 50%);
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
