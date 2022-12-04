import { GlobalStyles } from "./styles/GlobalStyles";
import Navbar from "./components/navbar/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Project from "./screens/Projects";
import Contact from "./screens/Contact";
import Skills from "./components/progress/Skills";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home to="/" />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
