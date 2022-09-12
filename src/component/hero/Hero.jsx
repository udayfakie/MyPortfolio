import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
height: 90%;
display: flex;
`
const Left = styled.div`
`
const Right = styled.div`
`


const Hero = () => {
  return (
    <Container>
   <Left>left</Left>
   <Right>right</Right>
    </Container>
  )
}

export default Hero
