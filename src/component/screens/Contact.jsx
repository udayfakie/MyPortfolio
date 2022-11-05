import React from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
<<<<<<< HEAD
import { trans } from "../../styles/GlobalStyles";
=======
>>>>>>> parent of 31f8b30 ( chech)

const Contact = () => {
  const SendEmails = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_yjx2tqc",
      "template_d9httz8",
      e.target,
      "_Q0B1Rl4rY9YU5gJA"
    );
    e.target.reset();
    alert("successfully");
  };

  return (
    <Container>
      <Title>Contact</Title>
      <Form onSubmit={SendEmails}>
        <Input type="text" placeholder="Name" name="name" required />
        <Input type="email" placeholder="Email" name="email" required />
        <Texteara
          name="message"
          rows="7"
          placeholder="Message"
          required
        ></Texteara>
        <Submit>Submit </Submit>
      </Form>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
<<<<<<< HEAD
  width: 100%;
  height: 600px;
  animation: ${trans} 0.75s;
=======
>>>>>>> parent of 31f8b30 ( chech)
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all .5s ease-in-out;
  @media (max-width: 821px) {
<<<<<<< HEAD
    padding: 50px 0px;
    height: 100vh;
=======
    padding: 78px 0px;
>>>>>>> parent of 31f8b30 ( chech)
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

<<<<<<< HEAD
const Title = styled.span`
  font-size: 40px;
  font-family: "poppinse", sans-serif;
  color: gray;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: #fff;
  }
  transition: all 0.5s ease-in-out;
  @media (max-width: 821px) {
    font-size: 25px;
    margin: 20px;
  }
=======
const Title = styled.h1`
  font-weight: bold;
  font-size: 35px;
  color: gray;
  text-align: center;
>>>>>>> parent of 31f8b30 ( chech)
`;

const Input = styled.input`
  display: flex;
  width: 550px;
  padding: 0 20px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  height: 50px;
  line-height: 46px;
  margin: 20px 0px;
  outline: none;
  color: #fff;
  font-size: 15px;
  letter-spacing: 0.1px;
  background-color: transparent;
  transition: all .5s ease-in-out;
  border: 2px solid hsla(0, 0%, 100%, 0.2);
  @media only screen and (max-width: 821px) {
    width: 100%;
  }
`;
const Texteara = styled.textarea`
  display: block;
  width: 550px;
  padding: 0 20px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  height: 150px;
  line-height: 46px;
  margin: 20px 0px;
  outline: none;
  color: #fff;
  font-size: 15px;
  letter-spacing: 0.1px;
  background-color: transparent;
  border: 2px solid hsla(0, 0%, 100%, 0.2);
  transition: all .5s ease-in-out;
  @media only screen and (max-width: 821px) {
    width: 100%;
  }
`;
const Submit = styled.button`
  text-decoration: none;
  font-weight: bold;
<<<<<<< HEAD
  font-size: 25px;
=======
>>>>>>> parent of 31f8b30 ( chech)
  color: black;
  padding: 10px 30px;
  cursor: pointer;
  border-radius: 10px;
<<<<<<< HEAD
  background: linear-gradient(to right, orange 50%, gray 50%);
=======
  background: linear-gradient(to right, aliceblue 50%, orange 50%);
>>>>>>> parent of 31f8b30 ( chech)
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-in-out;
  :hover {
<<<<<<< HEAD
    color: white;
=======
    color: darkblue;
>>>>>>> parent of 31f8b30 ( chech)
    background-position: left bottom;
    cursor: pointer;
  }
`;
