import React from 'react'
import styled from 'styled-components';
import Global from "../../global.jpg"


const Container = styled.div`
height: 90%;
display: flex;
`
const Left = styled.div`
width: 60%;
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Title = styled.div`
font-size: 40px;
font-weight: bold;
color: darkblue;
width:60%;
text-align: center;
`

const Decription = styled.p`
width: 70%;
font-size: 20px;
color: gray;
`
const Right = styled.div`
display: flex;
align-items: center;
width: 40%;
background-color: white;
`

const Image = styled.img`
width:500px;
`

const ButtonsContainer = styled.div`
display: flex;
`
const Button = styled.button`
margin-left: 5px;
font-weight: bold;
color: white;
background-color: darkblue;
padding: 10px 30px;
cursor: pointer;
border: 2px solid darkblue;
border-radius:10px ;
background: linear-gradient(to right, aliceblue 50%, darkblue 50%);
background-size:200% 100% ;
background-position: right bottom;
transition: all 0.5s ease-in-out;
:hover{
    color: darkblue;
    border: 2px solid blue;
    background-position: left bottom;
    cursor: pointer;
}
`



const Hero = () => {
return (
<Container>
<Left>
    <Title>Frontend Developer</Title>
    <Decription>
    I'm a Junior Full Stack Developer who loves creative problem solving and passionate about emerging technologies. I'm a very fast learner who is looking for my first job as a developer.
    Experienced with: JavaScript, React.js, Node.js, MongoDB, HTML, CSS,APIs,
    </Decription>
    <ButtonsContainer>
        <Button> View Project</Button>
        <Button>CV</Button>
    </ButtonsContainer>
</Left>{""}
<Right>
    <Image src={Global} alt="img"/>
</Right>
</Container>
)
}

export default Hero
