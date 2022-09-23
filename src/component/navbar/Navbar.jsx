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
          <NavbarLinks to="/contact">Contact</NavbarLinks>
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
  width: 100%;
  height: 10%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;
