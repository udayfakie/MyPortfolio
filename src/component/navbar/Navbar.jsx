import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Left>
        <Logo to="/">UdayFakie</Logo>
      </Left>
      <Menu>
        <NavbarLinks end to="/">
          Home
        </NavbarLinks>
        <NavbarLinks to="/about">About Me</NavbarLinks>
        <NavbarLinks to="/skills">Skills</NavbarLinks>
        <NavbarLinks to="/project">Projects</NavbarLinks>
        <NavbarLinks to="/contact">Contact</NavbarLinks>
      </Menu>
      <StyledMenu open={open}>
      <a href="/">Home</a>
      <a href="/about">About Ms</a>
      <a href="/project">projects</a>
      <a href="/contact">Contact</a>
      <a href="/skills">Skills</a>
    </StyledMenu>
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
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
  display: flex;
  max-width: 1280px;
  justify-content: space-between;
  align-items: center;
  .active {
    color: #704106;
  }
  @media (max-width: 820px) {
    width: 50%;
  }
`;
const StyledBurger = styled.button`
position: absolute;
top: 5%;
right: 2rem;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 2rem;
height: 2rem;
background: transparent;
border: none;
cursor: pointer;
padding: 0;
z-index: 10;
@media (min-width: 821px) {
  display: none;
}
&:focus {
  outline: none;
}

div {
  width: 2rem;
  height: 0.25rem;
  background: ${({ theme, open }) =>
    open ? theme.primaryDark : theme.primaryLight};
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;

  :first-child {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
  }

  :nth-child(2) {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
  }

  :nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
  }
}



`;

const StyledMenu = styled.nav`
  transform: ${({ open }) => (open ? "translatex(0)" : "translateY(-100%)")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
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
  @media (max-width:820px){
    display: none;
  }
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
`;

const Logo = styled(Link)`
position: absolute;
top: 5%;
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
