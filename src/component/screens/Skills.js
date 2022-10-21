import React from "react";
import styled from "styled-components";
import HTML from "../../assets/html.png";
import JAVASCRIPT from "../../assets/javascript.png";
import NODEJS from "../../assets/node.png";
import MONGODB from "../../assets/mongo.png";
import GITHUB from "../../assets/github.png";
import REACT from "../../assets/react.png";
import CSS from "../../assets/css.png";
import PYTHON from "../../assets/python.png";

const Skills = () => {
  return (
    <Container>
      <IMAGE src={HTML} alt="" />
      <IMAGE src={CSS} alt="" />
      <IMAGE src={NODEJS} alt="" />
      <IMAGE src={MONGODB} alt="" />
      <IMAGE src={REACT} alt="" />
      <IMAGE src={JAVASCRIPT} alt="" />
      <IMAGE src={GITHUB} alt="" />
      <IMAGE src={PYTHON} alt="" />
    </Container>
  );
};

export default Skills;

const Container = styled.div`
width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;
const IMAGE = styled.img`
  flex-wrap: wrap;
  align-items: center;

  margin: 20px;
  display: flex; 
  border-radius: 30px; 
  transition: all 0.5s ease-in-out;
  animation: rotation 3s infinite linear;
  width: 70px;
  @keyframes rotation {
  0% {
    transform: translate(-50%, 100%) rotate(-360deg);
   
  }
  }
`;
