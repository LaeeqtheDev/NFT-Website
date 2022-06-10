import React from 'react'
import styled from 'styled-components';
import img1 from '../../assets/Nfts/bighead-1.svg';
import img2 from '../../assets/Nfts/bighead-2.svg';
import img3 from '../../assets/Nfts/bighead-3.svg';
import img4 from '../../assets/Nfts/bighead-4.svg';
import ConfettiComponent from '../Confetti';




const Section=styled.section`
 min-height: 100vh;
 width: 100vw;
 background-color: ${props=> props.theme.body};
 position: relative;
 overflow: hidden;
`
const Title=styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props=> props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${props=> props.theme.text}; 
width: fit-content;
`;


const Container=styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
`
const ImageContainer= styled.div`
width: 80%;
margin: 0 auto;
background-color: ${props=> props.theme.carouselColor};
border: 1px solid ${props=> props.theme.text};
border-radius: 20px;
cursor: pointer;
padding: 1rem;

img{
  width: 100%;
  height: auto;
}
`
const Item=styled.div`
width: calc(20rem - 4vw);
padding: 1rem 0;
color: ${props => props.theme.body};
margin: 2rem 1rem;
position: relative;
border: 2px solid  ${props => props.theme.text};
border-radius: 20px;
transition: all 0.3 ease;
backdrop-filter: blur(4);
z-index: 5;

&:hover{
  img{
    transform: translateY(-2rem) scale(1.2) ;
  }
}

`

const Name=styled.h2`
font-size: ${props=> props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props=> props.theme.text};
margin-top: 1rem;
`

const Position=styled.h2`
font-size: ${props=> props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props=> `rgba(${props.theme.textRgba},0.9)`};
margin-top: 1rem;
font-weight: 400;
`




const MemberComponent = ({img, name= "", position=""}) => {
  return(
    <Item>
      <ImageContainer>
        <img src={img} alt={name}/>
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )
}


const Team = () => {
  return (
    <Section>
      <ConfettiComponent/>
      <Title>TEAM</Title>
      <Container>
        <MemberComponent img={img1} name="Laeeq" position='Ceo' />
        <MemberComponent img={img2} name="Ali"   position='CO-Ceo'  />
        <MemberComponent img={img3} name="Owais" position='CFO'  />
        <MemberComponent img={img4} name="Wasif"  position='Frontend Web DEV' />
      </Container>
    </Section>
  )
}

export default Team;