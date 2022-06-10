import React from 'react'
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Carousel from '../Carousel';
import Button from '../Button';
import {dark} from '../../styles/Themes';

const Section=styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
color: ${props=> props.theme.body};
display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const Container=styled.div`
width: 75%;
margin: 0 auto;
/*background-color: lightblue; */

display: flex;
align-items: center;
`

const Box=styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


const Title=styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props=> props.theme.body};
align-self: flex-start;
width: 80%;
margin: 0 auto;
`

const SubTextLight=styled.p`
font-size: ${props => props.theme.fontlg};
text-transform: capitalize;
color: ${props=> props.theme.body};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;
align-self: flex-start;
width: 80%;
margin: 0 auto;
`
const SubText=styled.p`
font-size: ${props => props.theme.fontlg};
text-transform: capitalize;
color: ${props=> props.theme.body};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;
align-self: flex-start;
width: 80%;
margin: 0 auto;`

const ButtonContainer=styled.div`
width: 80%;
align-self: flex-start;
margin: 1rem auto;
`
const About = () => {
  return (
    <Section>
      <Container>
        <Box><Carousel/></Box>
        <Box>
          <Title>
          Welcome To The Weirdos Club.
          </Title>
          <SubText>
          The WEIRDOS CLUB is a private collection of NFTs—unique digital collectibles. The Weirdos are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
          </SubText>
          <SubTextLight> With more than 200+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.</SubTextLight>
          <ButtonContainer>
          <ThemeProvider theme={dark}>
            <Button text="Join our Discord" link="#" />
          </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  )
}

export default About;