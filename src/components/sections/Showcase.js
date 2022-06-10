import React from 'react'
import styled from 'styled-components';
import { keyframes } from 'styled-components';


import img1 from '../../assets/Nfts/bighead-1.svg';
import img2 from '../../assets/Nfts/bighead-2.svg';
import img3 from '../../assets/Nfts/bighead-3.svg';
import img4 from '../../assets/Nfts/bighead-4.svg';
import img5 from '../../assets/Nfts/bighead-5.svg';
import img6 from '../../assets/Nfts/bighead-6.svg';
import img7 from '../../assets/Nfts/bighead-7.svg';
import img8 from '../../assets/Nfts/bighead-8.svg';
import img9 from '../../assets/Nfts/bighead-9.svg';
import img10 from '../../assets/Nfts/bighead-10.svg';
import ETH from '../../assets/icons8-ethereum-48.png'


const Section=styled.section`
 min-height: 100vh;
 width: 100vw;
 background-color: ${props=> props.theme.text};
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 position: relative;
`
const move= keyframes`
0%{transform: translateX(100%)};
100%{transform:translateX(-100)};
`

const Row=styled.div`
background-color: ${props=> props.theme.text};
white-space: nowrap;
box-sizing: content-box;
margin: 2rem 0;
display: flex;
animation: ${move} 20s linear infinite ${props => props.direction};


`
const ImgContainer= styled.div`
width: 15rem;
margin: 0 1rem;
background-color: ${props=> props.theme.body};
border-radius: 20px;
cursor: pointer;

img{
  width: 100%;
  height: auto;
}
`
const Details=styled.div`
display: flex;
justify-content: space-around;
padding: 0.8rem 1rem;
background-color: ${props=> props.theme.text};
border: 2px  solid ${props=> `rgba(${props.theme.bodyRgba},0.5)`};
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
span{
  font-size:  ${props=> props.theme.fontsm};
  color: ${props=> `rgba(${props.theme.bodyRgba},0.5)`};
  font-weight: 600;
  line-height: 1.5rem;
}
h1{
  font-size: ${props=> props.theme.fontmd};
  color: ${props=> props.theme.body};
  font-weight: 600;
}
`

const Price=styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

img{
  width: 1rem;
  height: auto;
}
`


const NftItem= ({img, number=0, price=0}) => {
  return(
    <ImgContainer>
    <img src={img} alt="The Weirdos"/>
    <Details>
      <div>
        <span>Weirdos</span> <br/>
        <h1>#{number}</h1>
      </div>

      <div>
        <span>Price</span> <br/>
        <Price>
          <img src={ETH} alt="ETH"/>
        <h1>{Number(price).toFixed(1)}</h1>
        </Price>
      </div>
    </Details>
    </ImgContainer>
  )
}


const Showcase = () => {
  return (
    <Section>
      <Row direction="none">
        <NftItem img={img1} number={582} price={1.5}/>
        <NftItem img={img2} number={382} price={1.6}/>
        <NftItem img={img3} number={52} price={1.7}/>
        <NftItem img={img4} number={482} price={1.8}/>
        <NftItem img={img5} number={882} price={1.9}/>
      </Row>

      <Row direction="reverse">
      <NftItem img={img6} number={662} price={2.0}/>
      <NftItem img={img7} number={772} price={2.1}/>
      <NftItem img={img8} number={882} price={2.2}/>
      <NftItem img={img9} number={992} price={2.3}/>
      <NftItem img={img10} number={5182} price={2.4}/>
      </Row>
    </Section>
  )
}

export default Showcase;