import React, { useState } from "react";
import { ifProp } from "styled-tools";
import Styled, { css } from "styled-components";
import heroImage from "../images/hero-image.png";
import nameImage from "../images/name.png";
import { responsiveHelpers as rh } from "../styles/utils";

const HeroContainers = Styled.div`
 background: black; 
 height:100vh;
 display:flex;
 justify-content: space-between;


  `;
export const Nav = Styled.div`
${rh.belowLandscapeTablet`
  display:none;
`} 
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
  `;
export const Link = Styled.a`
color:white;
font-family: 'Montserrat', sans-serif;
font-size:18px;
cursor:pointer;
text-decoration:none;
`;
const HeroRightSide = Styled.div`
display:flex;
flex-direction:column;
flex: 1;
justify-content: space-between;
&>div{
  &>div:first-child{
  margin-left:20px;

  &>img{
    ${rh.belowLandscapeTablet`
  width: 200px;
`}
 } 
}
}

`;

const HeroGirlImage = Styled.div`
  display:flex;
  justify-content:flex-end;

&>img{
  ${rh.belowLandscapeTablet`
  width: 100%;
  
`}
}
}

`;

const BurgerMenuIcon = Styled.div`
 ${rh.forLandscapeTabletUp`
display:none;
`}
${ifProp(
  "apparition",
  css`
    position: fixed;
    right: 0;
  `
)}
z-index:2;
color:white;
`;

const BurgerMenuLink = Styled.div`
text-align:center;
position:fixed;
width:100%;
background:black;
height:100%;
padding:50px;
&>div{
  margin-bottom:120px;
}
`;
const LinkBurgerMenu = Styled.a`
color:white;
font-family: 'Montserrat', sans-serif;
font-size:22px;
cursor:pointer;
text-decoration:none;
`;
const BurgerMenuIconBar = Styled.div`
display:flex;
flex-direction:column;
margin:15px;

&>div{
  margin:4px;
  height:2px;
  width:25px;
  background-color:white;
  transition: 0.4s;
  &:first-child{
   transform: ${props => props.apparition && "rotate(45deg)"};
  }
  &:last-child{
   transform: ${props => props.apparition && "rotate(-45deg)"};
   margin-top: ${props => props.apparition && "-5px"};
   
  }

}


`;

const HeroHeader = Styled.div`
display:flex;
justify-content:space-between;`;

export const Hero = () => {
  const [apparition, setApparition] = useState(false);
  return (
    <HeroContainers id="top">
      <Nav>
        <div>
          <Link href="#whoAmI"> Qui suis-je ?</Link>
        </div>
        <div>
          <Link href="#mySkills"> Mes compétences</Link>
        </div>
        <div>
          <Link href="#myProjets">Mes projets</Link>
        </div>
        <div>
          <Link href="#myContacts">Me contacter</Link>
        </div>
      </Nav>

      <HeroRightSide>
        <HeroHeader>
          <div>
            <img src={nameImage} alt="" />
          </div>

          <BurgerMenuIcon onClick={() => setApparition(!apparition)} apparition={apparition}>
            <BurgerMenuIconBar apparition={apparition}>
              {!apparition && <div> </div>}
              <div> </div>
              <div> </div>
            </BurgerMenuIconBar>
          </BurgerMenuIcon>
          {apparition ? (
            <BurgerMenuLink style={{ color: "white" }}>
              <div>
                <LinkBurgerMenu onClick={() => setApparition(!apparition)} href="#whoAmI">
                  Qui suis-je ?
                </LinkBurgerMenu>
              </div>
              <div>
                <LinkBurgerMenu onClick={() => setApparition(!apparition)} href="#mySkills">
                  Mes compétences
                </LinkBurgerMenu>
              </div>
              <div>
                <LinkBurgerMenu onClick={() => setApparition(!apparition)} href="#myProjets">
                  Mes projets
                </LinkBurgerMenu>
              </div>
              <div>
                <LinkBurgerMenu onClick={() => setApparition(!apparition)} href="#myContacts">
                  Me contacter
                </LinkBurgerMenu>
              </div>
            </BurgerMenuLink>
          ) : null}
        </HeroHeader>
        <HeroGirlImage>
          <img src={heroImage} alt="" />
        </HeroGirlImage>
      </HeroRightSide>
    </HeroContainers>
  );
};
