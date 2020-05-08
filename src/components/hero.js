import React from "react";
import Styled from "styled-components";
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
&>div:first-child{
  margin-left:20px;
  &>img{
    ${rh.belowLandscapeTablet`
  width: 200px;
`}
 } 
}
&>div:last-child{
 &> img{
  ${rh.belowLandscapeTablet`
  width: 100%;
`}
  }
  align-self:flex-end;
}
`;

export const Hero = () => {
  return (
    <HeroContainers>
      <Nav>
        <div>
          <Link href="#whoAmI"> Qui suis-je ?</Link>
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
        <div>
          <img src={nameImage} alt="" />
        </div>
        <div>
          <img src={heroImage} alt="" />
        </div>
      </HeroRightSide>
    </HeroContainers>
  );
};
