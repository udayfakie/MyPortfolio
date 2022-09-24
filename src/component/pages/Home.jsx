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
        <Title>Frontend Developer</Title>
        <Decription>Hi I'm Uday Frontend Developer</Decription>
        <ButtonsContainer>
          <Button to="/project"> View Project</Button>
          <Button to="/resume">CV</Button>
        </ButtonsContainer>
      </Left>
      <Right>
        <a href="https://www.linkedin.com/in/uday-fakie/">
          <BsLinkedin style={{ color: "darkblue", fontSize: 45, margin: 10 }} />
        </a>
        <a href="https://github.com/udayfakie">
          <AiFillGithub
            style={{ color: "darkblue", fontSize: 45, margin: 10 }}
          />
        </a>
        <NavLink to="/contact">
          <SiGmail style={{ color: "darkblue", fontSize: 45, margin: 10 }} />
        </NavLink>
      </Right>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 90%;
  display: flex;
`;
const Left = styled.div`
  width: 60%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: darkblue;
  width: 60%;
  text-align: center;
`;

const Decription = styled.p`
  width: 70%;
  font-size: 20px;
  color: gray;
  text-align: center;
  padding: 10px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  background-color: white;
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
`;
