import React from "react";
import styled from "styled-components";
import MJICALPLANET from "../assets/majical-planet-img.png";
import STUDENT_ROLL from "../assets/roll.png"
import DJ_SCREEN_SHOT from "../assets/dj_screen_shot_fit.png";
import { trans } from "../styles/GlobalStyles";
import { LINKS, LABELS, TEXTS } from "../constants";
import ProjectCard from "../components/Projects/ProjectCard";

const Project = ({ forwardeRef }) => {
  return (
    <Container ref={forwardeRef}>
      <MainTitle>{LABELS.PROJECTS}</MainTitle>
      <ProjectsContainer>
        <ProjectCard
          title={LABELS.DJ_DARGHAM}
          description={TEXTS.DJ}
          image={DJ_SCREEN_SHOT}
          link={LINKS.DARGHAM}
          alt="img"
        />
        <ProjectCard
          title={LABELS.MAGICAL_PLANET}
          description={TEXTS.PLANET_TEXT}
          image={MJICALPLANET}
          link={LINKS.PLANET}
          alt="PLANET"
        />
        <ProjectCard
          title={LABELS.TODO}
          description={TEXTS.STUDENT}
          image={STUDENT_ROLL}
          link={LINKS.LOCAL_STORAGE}
          alt="localstorge"
        />
      </ProjectsContainer>
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
  display: flex;
  transition: all 0.5s ease-in-out;
  @media (max-width: 821px) {
    flex-wrap: wrap;
    height: 60%;
    padding: 40px;
  }
`;

const ProjectsContainer = styled.span`
  width: 100%;
  flex-wrap: wrap;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.8s ease-in-out;
`;

const MainTitle = styled.h1`
  font-family: "poppinse", sans-serif;
  color: gray;
  &:hover {
    color: white;
  }
`;
