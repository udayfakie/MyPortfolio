import React from "react";
import { NavLink } from "react-router-dom";
import styled ,{keyframes} from "styled-components";

const Home = () => {
  return (
    <Container>
      <Title2>Uday Fakie </Title2>
      <Title>Full-Stack Developer</Title>
      <ButtonsContainer>
        <Button to="/project">View Work</Button>
        <Resume href="UdayFakieCV.pdf" download="UdayFakieCV.pdf">
          CV
        </Resume>
      </ButtonsContainer>
    </Container>
  );
};

export default Home;
const trans = keyframes`
from{
opacity: 0;
transform: rotateY(-20deg);
}
to{
  opacity: 1;
transform: rotateX(0);
}
`;
const Container = styled.div`
 animation: ${trans} 0.75s;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 10rem;
  align-items: center;
  @media (max-width: 740px) {
    padding: 15rem;
  }
`;

const Title = styled.h1`
  width: 500px;
  font-family: "Poppins", sans-serif;
  color: #f5f5f5;
  text-align: center;
  display: flex;
  justify-content: center;
  @media (max-width: 740px) {
    font-size: 18px;
  }
`;
const Title2 = styled.h3`
  width: 400px;
  margin: 0px;
  font-family: "Poppins", sans-serif;
  color: #f5f5f5;
  text-align: center;
  display: flex;
  justify-content: center;

 
  @media (max-width: 740px) {
    font-size: 18px;
  }
`;

const ButtonsContainer = styled.div`
  width: 400px;
  height: auto;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
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
    font-size:10px;
  }
`;
