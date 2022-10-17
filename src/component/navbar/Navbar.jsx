import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <Left>
        <Logo to="/">UdayFakie</Logo>
      </Left>
      <Menu>
        <NavbarLinks end to="/">
          Home
        </NavbarLinks>
        <NavbarLinks to="/about">About Us</NavbarLinks>
        <NavbarLinks to="/skills">Skills</NavbarLinks>
        <NavbarLinks to="/project">Project</NavbarLinks>
        <NavbarLinks to="/contact">Contact Us</NavbarLinks>
      </Menu>
      <StyledBurger>
        <div />
        <div />
        <div />
      </StyledBurger>
    </Container>
  );
};

export default Navbar;

const Container = styled.nav`
  width: 100%;
  padding: 1.5rem;
  margin: 0 auto;
  display: flex;
  max-width: 1280px;
  justify-content: space-between;
  align-items: center;
  .active {
    color: #704106;
  }
  @media (max-width: 763px) {
    width: 90%;
  }
`;

const StyledBurger = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  border: none;
  cursor: pointer;
  background: transparent;
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 1.5rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#030303" : "#030303")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    position: relative;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
  }
`;
const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 200px;
  .ative {
    color: orange;
  }

  @media (max-width: 740px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    gap: 2rem;
  }
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-weight: 900;
  font-size: 25px;
  color: #fff;
  cursor: pointer;
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
