import React from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

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
      <Title>Contact Me</Title>
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
  display: flex;
  padding-top: 30px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
// const Right = styled.div`
//   flex: 70%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;
// const Left = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   flex: 30%;
// `;
const Form = styled.form`
  text-align: center;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 35px;
  color: gray;
  text-align: center;
`;

const Input = styled.input`
  display: block;
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
  border: 2px solid hsla(0, 0%, 100%, 0.2);
  @media only screen and (max-width: 600px) {
    width: 80%;
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
  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;
const Submit = styled.button`
  text-decoration: none;
  font-weight: bold;
  color: black;
  padding: 10px 30px;
  cursor: pointer;
  border-radius: 10px;
  background: linear-gradient(to right, aliceblue 50%, orange 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-in-out;
  :hover {
    color: darkblue;
    background-position: left bottom;
    cursor: pointer;
  }
  @media only screen and (max-width: 600px) {
    margin-right: 50px;
  }
`;
