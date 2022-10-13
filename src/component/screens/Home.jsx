import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import Icons from "../Icons";

const Home = () => {
  return (
    <Container>
      <Title>HEY THERE, I'm FullStack Developer </Title>
      <Decription>
        specialist in frontend development with basic knowledge in developing
        great user interface and real life interactions
      </Decription>
      <ButtonsContainer>
        <Button to="/project">View Project</Button>
        <Resume href="UdayFakieCV.pdf" download=" Uday Fakie UdayFakieCV.pdf">
          CV
        </Resume>
      </ButtonsContainer>
      <Icons />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
  

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
  color: #fff;
  width: 60%;
  text-align: center;

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

const Decription = styled.p`
flex-wrap: wrap;
  width: 300%;
  
  height: 100px;
  font-size: 20px;
  color: gray;
  text-align: center;
  padding: 10px;

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

const ButtonsContainer = styled.div`
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

  @media only screen and (max-width: 600px) {
    padding: 10px 25px;
  }
  @media only screen and (min-width: 600px) {
    padding: 10px 30px;
  }
  @media only screen and (min-width: 992px) {
    padding: 15px 30px;
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

  @media only screen and (max-width: 600px) {
    padding: 10px 25px;
  }
  @media only screen and (min-width: 600px) {
    padding: 10px 30px;
  }
  @media only screen and (min-width: 992px) {
    padding: 15px 30px;
  }
`;
