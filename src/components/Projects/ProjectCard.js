import React from "react";
import styled from "styled-components";
import { TEXTS } from "../../constants";

const ProjectCard = ({ title, description, image, link, alt }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Img src={image} alt={alt} />
      <ViewProject>
        <Link target="_blank" href={link}>
          {TEXTS.LOOK}
        </Link>
      </ViewProject>
    </Card>
  );
};

export default ProjectCard;

const Card = styled.div`
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-direction: column;
  margin: 10px 10px;
  transition: all 0.8s ease-in-out;
  &:hover {
    padding: 8px;
    background: left, bottom;
  }
`;
const ViewProject = styled.div`
  font-weight: bold;
  padding: 30px;
  cursor: pointer;
`;
const Title = styled.h3`
  color: gray;
  font-weight: 800;
  margin: 15px;
  margin: 0px;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: #fff;
  }
`;

const Description = styled.span`
  width: 250px;
  margin: 15px;
  letter-spacing: 0.1em;
  font-size: 13px;
  font-family: "poppins", sans-serif;
  font-weight: bold;
`;

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
