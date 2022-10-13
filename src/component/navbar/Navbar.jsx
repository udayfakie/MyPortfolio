import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <Left>
        <Logo to="/">UdayFakie</Logo>
      </Left>
      <Center>
        <Menu>
          <NavbarLinks end to="/">
            Home
          </NavbarLinks>
          <NavbarLinks to="/about">About Us</NavbarLinks>
          <NavbarLinks to="/skills">Skills</NavbarLinks>
          <NavbarLinks to="/project">Project</NavbarLinks>
        </Menu>
      </Center>
      <Right>
        <ContactlinkButton to="/Contact">Let's Talk</ContactlinkButton>
      </Right>
    </Container>
  );
};

export default Navbar;

const Container = styled.nav`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  .active {
    color: darkorange;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 8%;
  }
  @media only screen and (min-width: 600px) {
  }

  @media only screen and (min-width: 992px) {
  }
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  align-items: center;
`;
const Center = styled.div`
  display: flex;
  flex: 2;
  @media only screen and (max-width: 600px) {
    display: flex;
    position: relative;
    right: 190px;
    top: 30px;
  }
  @media only screen and (min-width: 600px) {
    display: flex;
  }
  @media only screen and (min-width: 992px) {
    display: flex;
  }
`;
const Logo = styled(Link)`
  text-decoration: none;
  font-weight: 900;
  font-size: 25px;
  color: #fff;
  cursor: pointer;
`;
const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 200px;
  .ative {
    color: orange;
  }
`;
const NavbarLinks = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
  color: gray;
  cursor: pointer;

  &:hover {
  }
  @media only screen and (min-width: 600px) {
    font-size: 15px;
    margin-right: 15px;
  }
  @media only screen and (min-width: 992px) {
    font-size: 20px;
    margin-right: 30px;
  }
`;
const ContactlinkButton = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  background-color: orange;
  cursor: pointer;
  color: #000;
  padding: 10px 20px;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: aliceblue;
    color: #000;
    background-position: left bottom;
  }

  @media only screen and (min-width: 600px) {
    padding: 8px 15px;
  }
  @media only screen and (min-width: 992px) {
    padding: 10px 20px;
  }
`;
