import React from "react";
import styled from "styled-components";
import ProjectBanner from "../ProjectBanner/ProjectBanner";
import MJICALPLANET from "../../majical-planet-img.png"
import UDAYfAKIE from "../../uday-fakie-portfolio.png"
import {
  Button,
  Card,
  CardContent,
  CardTitle,
  Description,
} from "../styles/Style.Card";
import { MajicalPlanet } from "../styles/Style.Card";
import { ReactPortfolio } from "../styles/Style.Card";



const Project = () => {
  return (
    <>
      <ProjectBanner title={""} subtitle={"Projects"} />
      <Container>
        <Card>
          <CardContent>
            <CardTitle>{MajicalPlanet}</CardTitle>
            <Description>
            <Img src={MJICALPLANET} alt="MJICALPLANET"/> 
            </Description>
            <Button>
              <A href="https://majical-planet.netlify.app/">Take A Look</A>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>{ReactPortfolio}</CardTitle>
            <Description>
            <Img src={UDAYfAKIE} alt="MJICALPLANET"/> 
            </Description>
            <Button>
              <A href="https://udayswork.netlify.app/">Take A Look</A>
            </Button>
          </CardContent>
        </Card>

      </Container>
    </>
  );
};

export default Project;

const Container = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
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
`
const Img = styled.img`
width: 350px;
border-radius: 10px;

`
const A = styled.a`
  text-decoration: none;
  font-weight: bold;
  background-color: darkblue;
  cursor: pointer;
  border: 2px solid white;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  &:hover {
    background-color: aliceblue;
    color: darkblue;
    border: 2px solid darkblue;
  }
   `