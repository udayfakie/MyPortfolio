import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Container>
      <Form action="">
        <Input type="text" name="name" placeholder="Your Full Name" required />
        <Input type="email" name="email" placeholder="Your Email" required />
        <Textarea
          name="message"
          rows="7"
          placeholder="Your Message"
          required
        ></Textarea>
        <ContactButton type="submit"> Send Message</ContactButton>
      </Form>
    </Container>
  );
};

export default Contact;


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 38% 58%;
  gap: 12%;
  padding: 1.2rem;
`;
const ContactButton = styled.button`
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  /* margin-left: 50%; */
  justify-content: center;
`;
const Input = styled.input`
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: 2px solid darkblue;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: 2px solid darkblue;
`;
