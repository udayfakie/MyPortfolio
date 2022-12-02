import { GlobalStyles } from "./styles/GlobalStyles";
import Navbar from "./components/navbar/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./component/screens/Home";
// import Project from "./component/screens/Project";
// import Contact from "./component/screens/Contact";
// import Skills from "./component/progress/Skills";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import ScrollToTop from "./components/ScrollButton";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Router>
          <Navbar />
          <ScrollToTop />
          {/* <Routes>
            <Route path="/" element={<Home to="/" />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> */}
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
