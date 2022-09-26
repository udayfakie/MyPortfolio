import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import Global from "../../global.jpg";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Home = () => {
  return (
    <Container>
      <Left>
        <Title>Hey I'm FullStack Developer </Title>
        <Decription>
        specialist in frontend development with basic knowledge
         in developing great user interface and real life interactions  
        </Decription>
        <ButtonsContainer>
          <Button to="/project">View Project</Button>
          <Button to="/resume">CV</Button>
        </ButtonsContainer>
      </Left>
      <Right>
        <A href="https://www.linkedin.com/in/uday-fakie/">
          <BsLinkedin />
        </A>
        <A href="https://github.com/udayfakie">
          <AiFillGithub />
        </A>
        <MailNavLink to="/contact">
          <SiGmail />
        </MailNavLink>
      </Right>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 90%;
  display: flex;

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

const MailNavLink = styled(NavLink)`
  font-size: 50px;
  color: darkblue;

`;

const A = styled.a`
  padding: 10px;
  font-size: 50px;
  color: darkblue;
`;
const Left = styled.div`
  width: 60%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 120px;

  @media only screen and (min-width: 600px) {
    width: 50%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 992px) {
    width: 60%;
  }
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: darkblue;
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
  width: 70%;
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
const Right = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  width: 60%;
  background-color: #fff;

  @media only screen and (max-width: 600px) {
    display: block;
    margin-top: 50px;
    padding: 10px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
`;
const Button = styled(NavLink)`
  text-decoration: none;
  margin-left: 5px;
  font-weight: bold;
  color: white;
  background-color: darkblue;
  padding: 10px 30px;
  cursor: pointer;
  border: 2px solid darkblue;
  border-radius: 10px;
  background: linear-gradient(to right, aliceblue 50%, darkblue 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-in-out;
  :hover {
    color: darkblue;
    border: 2px solid blue;
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
