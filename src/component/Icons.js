import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import styled from "styled-components";
import { GITHUB, LINKEDIN, GMAIL_url } from "../constant";

const Icons = () => {
  return (
    <Container>
      <Link target="_blank" href={LINKEDIN}>
        <LinkIn />
      </Link>
      <Link target="_blank" href={GITHUB}>
        <Git />
      </Link>
      <Link target="_blank" href={GMAIL_url}>
        <Gmail />
      </Link>
    </Container>
  );
};

export default Icons;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  align-items: center;
  @media (max-width: 821px) {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    margin: 15px;
  }
`;

const Link = styled.a`
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Gmail = styled(SiGmail)`
  font-size: 40px;
  color: gray;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #fff;
  }
  @media (max-width: 821px) {
    font-size: 35px;
  }
`;
const Git = styled(AiFillGithub)`
  font-size: 40px;
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
  font-size: 40px;
  color: gray;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #fff;
  }
  @media (max-width: 821px) {
    font-size: 35px;
  }
`;
