import React from 'react'
import styled from 'styled-components';
import Accordion from '../Accordion';




const Section=styled.section`
 min-height: 100vh;
 width: 100vw;
 background-color: ${props=> props.theme.text};
 color: ${props=> props.theme.body};
 position: relative;
display: flex;
justify-content: center;
flex-direction: column;

`
const Title=styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: uppercase;
color: ${props=> props.theme.body};

margin: 1rem auto;
border-bottom: 2px solid ${props=> props.theme.carouselColor}; 
width: fit-content;
`;

const Container=styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;
`

const Box = styled.div`
width: 45%;

`

const Faq = () => {
  return (
    <Section>
      <Title>Faq</Title>
        <Container>
        <Box>
          <Accordion title="WHERE CAN I VIEW MY NFTS" >Once mnted or bought connect to your OpenSea account to view your NFTs.</Accordion>
        </Box>

          <Box>
          <Accordion title="WHERE CAN I VIEW MY NFTS" >Once mnted or bought connect to your OpenSea account to view your NFTs.</Accordion>
          </Box>
        </Container>
      
    </Section>
  )
}

export default Faq;