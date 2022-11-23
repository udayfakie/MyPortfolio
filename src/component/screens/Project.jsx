import React from "react";
import styled from "styled-components";
import MJICALPLANET from "../../assets/majical-planet-img.png";
import DJ_SCREEN_SHOT from "../../assets/dj_screen_shot_fit.png";
import {
  DJ_DARGHAM_LINK,
  MagicalPlanet,
  MAJICAL_PLANET_LINK,
} from "../../constant";

import { DJ_DRGHAM_SITE } from "../../constant";
import { trans } from "../../styles/GlobalStyles";

const Project = ({forwardeRef}) => {
  return (
  
      <Container ref={forwardeRef}>
        <Card>
          <Content>
            <Title>{DJ_DRGHAM_SITE}</Title>
            <Description>Resposive Dj Website technology React.js </Description>
            <ImgWrapper>
              <Img src={DJ_SCREEN_SHOT} alt="img" />
            </ImgWrapper>
            <ViewProject>
              <Link target="_blank" href={DJ_DARGHAM_LINK}>
                Take A Look
              </Link>
            </ViewProject>
          </Content>
        </Card>
        <Card>
          <Content>
            <Title>{MagicalPlanet}</Title>
            <Description>Beautifull Design. technology HTML & CSS</Description>
            <ImgWrapper>
              <Img src={MJICALPLANET} alt="PLANET" />
            </ImgWrapper>
            <ViewProject>
              <Link target="_blank" href={MAJICAL_PLANET_LINK}>
                Take A Look
              </Link>
            </ViewProject>
          </Content>
        </Card>
      </Container>
    
  );
};

export default Project;

const Container = styled.div`
 animation: ${trans} 0.75s;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100vh;

  display: flex;
  transition: all 0.5s ease-in-out;
  @media (max-width: 821px) {
    flex-wrap: wrap;
    height: 60%;
    padding: 100px;
  }
`;
const Description = styled.span`
width: 250px;
margin: 15px;
letter-spacing: .1em;
font-size: 13px;
font-family: 'poppins', sans-serif;
font-weight: bold;
`
const Img = styled.img`
  width: 300px;
  height: 140px;
  border-radius: 10px;
`;
const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  background-color: orange;
  cursor: pointer;

  color: #000;
  padding: 10px 20px;
  border-radius: 10px;
  &:hover {
    background-color: gray;
  }
`;
const Card = styled.div`
  width: 350px;
  margin: 10px 10px;
  transition: all 0.8s ease-in-out;
  &:hover {
    padding: 8px;
    background: left, bottom;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-direction: column;
`;

const Title = styled.h3`
  color: gray;
  font-weight: 800;
  margin: 15px;
  margin: 0px;
  transition: all 0.5s ease-in-out;
  &:hover{
    color: #fff;
  }
`;

const ImgWrapper = styled.div`
  color: gray;
  font-size: 15px;
`;
const ViewProject = styled.div`
  font-weight: bold;
  padding: 30px;
  cursor: pointer;
`;
