import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import Hero from './component/hero/Hero';
import Navbar from './component/navbar/Navbar';
// import { ThemeProvider } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body{
background-color:"white";
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;1,100&family=Open+Sans&family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&family=Roboto:wght@300&display=swap');
 *{
    font-family: 'Roboto', sans-serif;
  }
}
`

const Container = styled.div`
background-color: #fff;
height: 100vh;

`
// const Titel = styled.h1``



function App() {
  return (
  <>
 
  <GlobalStyles/>
  <Container> 
  <Navbar/>
  <Hero/>
  </Container>
  
  </>
);
}

export default App;
