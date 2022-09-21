import React from "react";
import styled from "styled-components";
import ProjectBanner from "../ProjectBanner/ProjectBanner";
import MJICALPLANET from "../../majical-planet-img.png"
import {
  Button,
  Card,
  CardContent,
  CardTitle,
  Description,
} from "../styles/Style.Card";



const Project = () => {
  return (
    <>
      <ProjectBanner title={"Title"} subtitle={"subtitle"} />
      <Container>
        <Card>
          <CardContent>
            <CardTitle>Majical Planet</CardTitle>
            <Description>
            <Img src={MJICALPLANET} alt="MJICALPLANET"/> 
            </Description>
            <Button>
              <A href="https://majical-planet.netlify.app/">Take A Look</A>
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
`
const Img = styled.img`
width: 350px;
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