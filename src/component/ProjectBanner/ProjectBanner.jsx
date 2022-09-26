
import React from 'react'
import styled from 'styled-components'

const ProjectBanner = ({title, subtitle}) => {
  return (
    <Container>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}

export default ProjectBanner



const Container = styled.div`
justify-content: center;
display: flex;
flex-direction: column;
align-items: center;

@media only screen and (max-width: 600px) {
    width: 100%;
    height: 8%;
  }
  // tablets and medium screens
  @media only screen and (min-width: 600px) {
    width: 100%;
    height: 5%;
  }
  //laptops and desktop
  @media only screen and (min-width: 992px) {
    width: 100%;
    height: 10%;
  }
`

const Title = styled.div`
color: tomato;
font-weight: bold;

@media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 30px;
  }
  @media only screen and (min-width: 600px) {
    width: 85%;
    font-size: 30px;
  }
  @media only screen and (min-width: 992px) {
    width: 85%;
  }
`
const Subtitle = styled.div`
color:darkblue ;
font-size: 50px;
font-weight: bold;
margin: 5px;

`