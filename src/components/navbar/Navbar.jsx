import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { trans } from "../../styles/GlobalStyles";
import { useRef } from "react";
import Skills from "../progress/Skills";
import Project from "../../screens/Projects";
import Contact from "../../screens/Contact";
import Home from "../../screens/Home";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const ski = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);
  const ScrollTo = (eleRef) => {
    window.scrollTo({
      top: eleRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Container>
        <Left>
          <Logo to="/">Uday</Logo>
        </Left>
        <Menu>
          <NavbarLinks end to="/">
            Home
          </NavbarLinks>
          <NavbarLinks onClick={() => ScrollTo(ski)} to="/skills">
            Skills
          </NavbarLinks>
          <NavbarLinks onClick={() => ScrollTo(project)} to="/project">
            Projects
          </NavbarLinks>
          <NavbarLinks onClick={() => ScrollTo(contact)} to="/contact">
            Contact
          </NavbarLinks>
        </Menu>
        <StyledMenu open={open} onClick={() => setOpen(!open)}>
          <NavLink to="/">Home</NavLink>
          <NavLink onClick={() => ScrollTo(project)} to="/project">
            Projects
          </NavLink>
          <NavLink onClick={() => ScrollTo(ski)} to="/skills">
            Skills
          </NavLink>
          <NavLink onClick={() => ScrollTo(contact)} to="/contact">
            Contact
          </NavLink>
        </StyledMenu>
        {/* <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger> */}
      </Container>
      <Home />
      <Skills forwardeRef={ski} />
      <Project forwardeRef={project} />
      <Contact forwardeRef={contact} />
    </>
  );
};

export default Navbar;

const Container = styled.nav`
  animation: ${trans} 0.75s;
  width: 100%;
  padding: 1.5rem;
  display: flex;
  align-items: center;

  & :hover {
    color: lightgray;
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
  z-index: 10;
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
const rotate = keyframes`
from{
transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
}
`;
const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 200px;

  .active {
    color: orange;
  }
  @media (max-width: 820px) {
    display: none;
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: center;
`;
const Logo = styled(Link)`
  text-decoration: none;
  font-weight: 900;
  font-size: 25px;
  color: #fff;
  cursor: pointer;
  transition: all 1s ease-in-out;
  &:hover {
    animation: ${rotate} 5s linear;
    color: #fff;
  }
`;
const NavbarLinks = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  margin-right: 30px;
  color: gray;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    text-decoration: underline #3c2305 0rem;
    text-underline-offset: 0.5em;
  }
`;
