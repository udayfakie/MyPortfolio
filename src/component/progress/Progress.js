import React from "react";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

export const items = [
  {
    id: 1,
    name: "HTML",
    percentage: 57,
    icon: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
  },
  {
    id: 2,
    icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    name: "CSS",
    percentage: 87,
  },
  {
    id: 3,
    icon: "https://cdn-icons-png.flaticon.com/512/1260/1260667.png",
    name: "REACT",
    percentage: 99,
  },
  {
    id: 4,
    icon: "https://img.icons8.com/color/2x/nodejs.png",
    name: "NODEJS",
    percentage: 46,
  },
  {
    id: 5,
    icon: " https://img.icons8.com/color/2x/mongodb.png",
    name: "MONGODB",
    percentage: 66,
  },
  {
    id: 6,
    icon: "https://cdn-icons-png.flaticon.com/512/3098/3098090.png",
    name: "PYTHON",
    percentage: 23,
  },
  {
    id: 7,
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    name: "JAVASCRIPT",
    percentage: 100,
  },
];
const animation = keyframes`
0% {
  width: 10%;

}
100% {
 
}
`;
const Progress = () => {
  const [run, setRun] = useState(0);

  const percent = items.map((item) => item.percentage);
  const HandleRun = () => {
    setRun(percent);
  };
  console.log(percent);

  return (
    <>
      {items.map((item, index) => {
        return (
          <Container key={index}>
            <Text>{item.name}</Text>
            <Img src={item.icon} alt="skill" />
            <ProgressContainer>
              <Bar>{item.percentage}%</Bar>
            </ProgressContainer>
          </Container>
        );
      })}
    </>
  );
};

export default Progress;

const Container = styled.div`
  height: 100vh;
  width: 70%;
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
  margin: 10px;
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
  width: 30%;
  background-color: dodgerblue;
  border-radius: 20px;
  animation: ${animation} 1s linear;
  padding: 5px;
`;
