import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Navbar from "./component/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Project from "./component/pages/Project";
import Contact from "./component/pages/Contact";

const GlobalStyles = createGlobalStyle`
body{
background-color:"white";
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;1,100&family=Open+Sans&family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&family=Roboto:wght@300&display=swap');
 *{
    font-family: 'Roboto', sans-serif;
  }
}
`;
// ToDo

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router basename="/">
        <Container>
          <Navbar />
        </Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
const Container = styled.div`
  background-color: #fff;
  /* height: 100vh; */
`;
