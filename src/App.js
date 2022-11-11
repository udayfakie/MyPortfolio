import {GlobalStyles} from './styles/GlobalStyles'
import Navbar from "./component/navbar/Navbar";
import { HashRouter  as Router, Routes, Route } from "react-router-dom";
import Home from "./component/screens/Home";
import Project from "./component/screens/Project";
import Contact from "./component/screens/Contact";
import Skills from "./component/progress/Skills";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Router basename="/">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
