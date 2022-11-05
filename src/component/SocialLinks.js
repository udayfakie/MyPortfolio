import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
// import { AiOutlineWhatsApp } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { GITHUB, LINKEDIN } from "../constant";
// import ReactWhatsapp from "react-whatsapp";


const Icons = () => {
  return (
    <Container>
<<<<<<< HEAD:src/component/SocialLinks.js
=======
    
      {/* <ChatReactWhatsapp number="+972547084239" message="Hello !!!" /> */}
      {/* <Chat>
      <AiOutlineWhatsApp/>
      </Chat> */}

      <Link target="_blank" href={LINKEDIN}>
        <BsLinkedin />
      </Link>
>>>>>>> parent of 31f8b30 ( chech):src/component/Icons.js
      <Link target="_blank" href={GITHUB}>
        <AiFillGithub />
      </Link>
<<<<<<< HEAD:src/component/SocialLinks.js
      <Link target="_blank" href={LINKEDIN}>
        <LinkIn />
      </Link>
=======
      <MailNavLink to="/contact">
        <SiGmail />
      </MailNavLink>
>>>>>>> parent of 31f8b30 ( chech):src/component/Icons.js
    </Container>
  );
};

export default Icons;

const Container = styled.div`
<<<<<<< HEAD:src/component/SocialLinks.js
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
 
=======
  display: flex;
  align-items: center;
  margin-top: 40px;
`;
const MailNavLink = styled(NavLink)`
  font-size: 45px;
  color:#3f5668;
>>>>>>> parent of 31f8b30 ( chech):src/component/Icons.js
`;

const Link = styled.a`
  padding: 10px;
  font-size: 37px;
  color:#3f5668;
`;

<<<<<<< HEAD:src/component/SocialLinks.js
const Gmail = styled(SiGmail)`
font-size: 33px;
color: gray;
border-radius: 10px;
  transition: all 0.3s ease-in-out;
&:hover{
  color: #fff;
}
@media (max-width: 821px) {
    font-size: 35px;
    
  }
`
const Git = styled(AiFillGithub)`
font-size: 38px;
border-radius:15px;
color: gray;
  transition: all 0.3s ease-in-out;
&:hover{
  color: #fff;
}
@media (max-width: 821px) {
    font-size: 35px;
    
  }
`
const LinkIn = styled(BsLinkedin)`
font-size: 30px;
color: gray;
border-radius:15px;
  transition: all 0.3s ease-in-out;
&:hover{
  color: #fff;
}
@media (max-width: 821px) {
    font-size: 35px;
    
  }
`
=======
>>>>>>> parent of 31f8b30 ( chech):src/component/Icons.js
