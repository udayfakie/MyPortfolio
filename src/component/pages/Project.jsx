import React from 'react'
import styled from 'styled-components'

const Project = () => {
  return (
    <Container>
    <Title>Create Articals</Title>
<Subtitle>demo</Subtitle>
      
    </Container>
  )
}

export default Project



const Container = styled.div`
justify-content: center;
display: flex;
flex-direction: column;
align-items: center;
`

const Title = styled.div`
color: tomato;
`
const Subtitle = styled.div`
color:darkblue ;
font-size: 50px;
font-weight: bold;
margin: 5px;

`