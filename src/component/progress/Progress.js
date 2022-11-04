import React from "react";
import styled, { keyframes } from "styled-components";
import { skills } from "../../constant";
import { widthFillAnimation } from "../../styles/GlobalStyles";

const Progress = () => {
  return (
    <>
      {skills
        .sort((a, b) => b.percentage - a.percentage)
        .map((skill, index) => {
          const { name, icon, percentage } = skill;
          return (
            <Container key={index}>
              <Text>{name}</Text>
              <Img src={icon} alt="skill" />
              <ProgressContainer>
                <Bar progress={percentage}>{percentage}%</Bar>
              </ProgressContainer>
            </Container>
          );
        })}
    </>
  );
};

export default Progress;

const Container = styled.div`
  height: 20vh;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 50px;
  height: 40px;
`;
const Text = styled.span`
  font-size: 20px;
  margin-right: 10px;
  font-family: "poppinse", sans-serif;
`;

const ProgressContainer = styled.div`
  position: relative;
  margin: 10px;
  width: 100%;
  height: 15px;
  border-radius: 20px;
  box-shadow: 0 0 1px inset;
`;
const Bar = styled.span`
  font-size: 13px;
  color: darkblue;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  height: 100%;
  width: ${({ progress }) => progress}%;
  background-color: dodgerblue;
  border-radius: 20px;
  animation: ${widthFillAnimation} 1s linear;
  padding: 5px;
`;
