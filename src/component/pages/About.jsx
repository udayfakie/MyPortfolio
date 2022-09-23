import React from 'react'
import styled from 'styled-components'


const About = () => {
  return (
    <Container>
    <LeftContainer>
      <H1>About Me</H1>
    </LeftContainer>
    <RightContainer>
    <H1>Skils</H1>
    </RightContainer>
    </Container>
  )
}

export default About


const Container = styled.div`
width: 100%;
height: 92vh;
display: flex;
text-align: center;
`

const H1 = styled.h1`
font-weight: bold;
color: darkblue;
`
const LeftContainer = styled.div`
background-color: lightgreen;
width: 50%;
height: 92vh;
`
const RightContainer = styled.div`
background-color: lightblue;
width: 50%;
height: 92vh;
`