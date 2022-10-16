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
  display: flex;
  justify-content: center;
  text-align: center;
  width: 90%;
  height: 100vh;
`;
const IMAGE = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 5px;
  margin-left: 5px;
`;
