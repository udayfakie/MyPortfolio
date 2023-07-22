import React from "react";
import styled from "styled-components";
import { SKILLS } from "../../constants";
import { widthFildAnimation } from "../../styles/GlobalStyles";

const sortByPercentage = (array) =>
  array.sort((a, b) => b.percentage - a.percentage);

const Progress = () => {
  const updatedSkills = sortByPercentage(SKILLS);
  return (
    <>
      {updatedSkills.map((skill, index) => {
        const { icon, percentage } = skill;

        return (
          <Container key={index}>
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 4px;
  height: 45px;
  @media (max-width: 430px) {
    width: 80%;
  }
`;
const Img = styled.img`
  width: 50px;
  height: 40px;
  margin: 10px;
  @media (max-width: 430px) {
    width: 30px;
    height: 30px;
  }
`;
const Text = styled.span`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 150px;
  @media (max-width: 821px) {
    font-size: 15px;
  }
`;

const ProgressContainer = styled.div`
  position: relative;
  margin: 10px;
  width: 100%;
  height: 15px;
  border-radius: 20px;
  box-shadow: 0 0 1px inset;
  display: flex;
  align-items: center;
  @media (max-width: 430px) {
    /* width: 30px;
    height: 30px; */
  }
`;
const Bar = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  height: 100%;
  width: ${({ progress }) => progress}%;
  background-color: dodgerblue;
  border-radius: 20px;
  animation: ${widthFildAnimation} 1s linear;
`;
