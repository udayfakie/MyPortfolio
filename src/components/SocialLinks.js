import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import styled from "styled-components";
import { LINKS } from "../constants";

const Icons = () => {
  return (
    <Container>
      <Link target="_blank" href={LINKS.GITHUB}>
        <Git />
      </Link>
      <Link target="_blank" href={LINKS.GMAIL}>
        <Gmail />
      </Link>
      <Link target="_blank" href={LINKS.LINKEDIN}>
        <LinkIn />
      </Link>
    </Container>
  );
};

export default Icons;

const Container = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 821px) {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    margin: 15px;
  }
`;

const Link = styled.a`
  color: #fff;
  padding: 5px;
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

const Gmail = styled(SiGmail)`
  font-size: 33px;
  color: gray;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #fff;
  }
  @media (max-width: 821px) {
    font-size: 32px;
  }
`;
const Git = styled(AiFillGithub)`
  font-size: 38px;
  border-radius: 15px;
  color: gray;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #fff;
  }
  @media (max-width: 821px) {
    font-size: 35px;
  }
`;
const LinkIn = styled(BsLinkedin)`
  font-size: 30px;
  color: gray;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #fff;
  }
  @media (max-width: 821px) {
    font-size: 30px;
  }
`;
