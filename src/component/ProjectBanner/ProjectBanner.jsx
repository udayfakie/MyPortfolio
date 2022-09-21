
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
`

const Title = styled.div`
color: tomato;
font-weight: bold;
`
const Subtitle = styled.div`
color:darkblue ;
font-size: 50px;
font-weight: bold;
margin: 5px;

`