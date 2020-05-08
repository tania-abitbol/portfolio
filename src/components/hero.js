import React from "react"
import Styled from "styled-components"
import heroImage from "../images/hero-image.png"
import nameImage from "../images/name.png"

const HeroContainers = Styled.div`
 background: black; 
 height:100vh;
 display:flex;
 justify-content: space-between;

 
  `
export const Nav = Styled.div`
  height:100%;
align-items:center;

  width:220px;
  border-right:4px solid white;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  &> div{
    &:first-child{
      margin-top:70px;

    }
    &:last-child{
      margin-bottom:70px;
    }
   
  }

  `
export const Link = Styled.a`
color:white;
font-family: 'Montserrat', sans-serif;
font-size:18px;

`
const HeroRightSide = Styled.div`
display:flex;
flex-direction:column;
flex: 1;
justify-content: space-between;
&>div:first-child{
  margin-left:20px;
}
&>div:last-child{
  align-self:flex-end;
}

`
export const Hero = () => (
  <HeroContainers>
    <Nav>
      <div>
        <Link> Qui suis-je ?</Link>
      </div>
      <div>
        <Link> Mes compétences</Link>
      </div>
      <div>
        <Link>Mes projets</Link>
      </div>
      <div>
        <Link>Me contacter</Link>
      </div>
    </Nav>
    <HeroRightSide>
      <div>
        <img src={nameImage} />
      </div>
      <div>
        <img src={heroImage} />
      </div>
    </HeroRightSide>
  </HeroContainers>
)
