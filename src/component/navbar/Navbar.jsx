import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <Container>
      <Left>
        <Logo to="/">UdayFakie</Logo>
      </Left>

      <Center>
        <Menu>
          <NavbarLinks to="/">Home</NavbarLinks>
          <NavbarLinks to="/about">About</NavbarLinks>
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

const Container = styled.div`
  /* position: fixed; */
  width: 100%;
  height: 10%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  // Mobile
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 8%;
  }
  // tablets and medium screens
  @media only screen and (min-width: 600px) {
    width: 100%;
    height: 5%;
  }
  //laptops and desktop
  @media only screen and (min-width: 992px) {
    width: 100%;
    height: 10%;
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: space-around;
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
const Logo = styled(NavLink)`
  text-decoration: none;
  font-weight: 900;
  font-size: 20px;
  color: darkblue;
  cursor: pointer;
`;
const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 200px;
`;
const NavbarLinks = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
  color: gray;
  cursor: pointer;
  &:hover {
    color: darkblue;
    transition: 0.3s;
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
  @media only screen and (max-width: 600px) {
    display: flex;
    position: relative;
    right: 580px;
    top: 90px;
  }
  @media only screen and (min-width: 600px) {
  padding: 8px 15px;
  }
  @media only screen and (min-width: 992px) {
   padding: 10px 20px;
  }
`;
