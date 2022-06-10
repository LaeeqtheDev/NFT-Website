import React from 'react';
import styled from "styled-components";
import Logo from './Logo';
import Button from './Button';

const Section= styled.section`
  width: 100vw;
  background-color: ${props => props.theme.body};
`

const Menu=styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;
 
`

const MenuItem=styled.li`

margin: 0.5rem;
color: ${props => props.theme.text};
cursor: pointer;
width: 100%;
position: relative;

&::after{
  content: '';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;
}
&:hover::after{
  width: 100%;
}

`

const Navbar=styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: ${props => props.theme.navHeight };
  margin: 0 auto;


`

const Navigation = () => {
  return (
    <Section >
      <Navbar>
        <Logo/>
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Roadmap</MenuItem>
          <MenuItem>Showcase</MenuItem>
          <MenuItem>Team</MenuItem>
          <MenuItem>Faq</MenuItem>
          
        </Menu>
        <Button text="Connect Wallet" Link="https://www.facebook.com/syedlaeeq.ahmed.3"/>
      </Navbar>
    </Section>
  )
}

export default Navigation;