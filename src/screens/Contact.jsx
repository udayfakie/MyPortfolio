import React from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { trans } from "../styles/GlobalStyles";
import { LABELS } from "../constants";

const Contact = ({ forwardeRef }) => {
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
    <Container ref={forwardeRef}>
      <Title>{LABELS["CONTACT"]}</Title>
      <Form onSubmit={SendEmails}>
        <Input type="text" placeholder="Name" name="name" required />
        <Input type="email" placeholder="Email" name="email" required />
        <TextArea
          name="message"
          rows="7"
          placeholder="Message"
          required
        ></TextArea>
        <Submit>Submit </Submit>
      </Form>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  width: 100%;
  height: 600px;
  animation: ${trans} 0.75s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition-duration: 2s;
  transition: all 0.5s ease-in-out;
  @media (max-width: 821px) {
    padding: 50px 0px;
    height: 100vh;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Title = styled.span`
  font-size: 40px;
  font-family: "poppinse", sans-serif;
  color: gray;
  transition: all 0.5s ease-in-out;
  margin-bottom: 10px;
  &:hover {
    color: #fff;
  }
  transition: all 0.5s ease-in-out;
  @media (max-width: 821px) {
    font-size: 25px;
    margin: 20px;
  }
`;

const Input = styled.input`
  display: flex;
  width: 400px;
  padding: 0 20px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  height: 35px;
  line-height: 46px;
  margin: 10px 0px;
  outline: none;
  color: #000;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.1px;
  background-color: #fff;
  transition: all 0.5s ease-in-out;
  @media only screen and (max-width: 821px) {
    width: 100%;
  }
`;
const TextArea = styled.textarea`
  display: block;
  width: 400px;
  padding: 0 20px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  height: 100px;
  line-height: 46px;
  margin: 10px 0px;
  outline: none;
  color: #000;
  font-size: 15px;
  letter-spacing: 0.1px;
  background-color: #fff;
  transition: all 0.5s ease-in-out;
  @media only screen and (max-width: 821px) {
    width: 100%;
  }
`;
const Submit = styled.button`
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  color: black;
  padding: 10px 30px;
  margin: 10px 0px;
  cursor: pointer;
  border-radius: 10px;
  background: linear-gradient(to right, orange 50%, gray 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-in-out;
  :hover {
    color: white;
    background-position: left bottom;
    cursor: pointer;
  }
  @media (max-width: 821px) {
    height: 40px;
  }
`;
