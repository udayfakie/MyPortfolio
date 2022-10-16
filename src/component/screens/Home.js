import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icons from "../Icons";

const Home = () => {
  return (
    <Container>
      <Title>
        HEY THERE<br></br>I'm FullStack Developer{" "}
      </Title>
      <Decription>
        specialist in frontend development with basic knowledge in developing
        great user interface and real life interactions
      </Decription>
      <ButtonsContainer>
        <Button to="/project">View Project</Button>
        <Resume href="UdayFakieCV.pdf" download="UdayFakieCV.pdf">
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
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  width: 60%;
  text-align: center;
  transition-duration: all 0.5s;
  @media (max-width: 740px) {
    font-size: 22px;
  }
`;

const Decription = styled.p`
  flex-wrap: wrap;
  width: 30%;
  height: 450px;
  height: auto;
  font-size: 20px;
  color: gray;
  text-align: center;
  padding: 10px;
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
`;
