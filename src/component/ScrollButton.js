import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import styled from "styled-components";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button>
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </Button>
  );
};

export default ScrollButton;

const Button = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 43rem;
  bottom: 50px;
  width: 100%;
  height: 20px;
  font-size: 2.5rem;
  z-index: 1;
  cursor: pointer;
  color: gray;
  @media (max-width: 820px) {
    left: 20rem;
    bottom: 60px;
  }
  @media (max-width: 420px) {
    left: 8rem;
    bottom: 30px;

  }

`;
