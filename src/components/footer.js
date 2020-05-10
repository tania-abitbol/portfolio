import React from "react";
import Styled from "styled-components";
import snakeImage from "../images/snake.png";
import bottomArrow from "../images/buttom-arrow.png";
import { responsiveHelpers as rh } from "../styles/utils";

import pdf from "../images/CV.pdf";

const FooterContainers = Styled.div`
background-color:black;
color:white;
display:flex;
font-size :18px;
`;

const TitleFooter = Styled.h1`
font-size:36px;
font-family:'Poiret One';
margin-top:36px;
${rh.belowLandscapeTablet`
  font-size: 26px;
`} 
`;

const Line = Styled.div`
min-width:220px;
border-right:4px solid white;
${rh.belowLandscapeTablet`
  display:none;
`}
`;
const Cv = Styled.div`
display:flex;
align-items: center;
&>a{
  border: solid white 2px;
  border-radius: 40px;
  margin:10px;
  padding: 10px 30px;
  font-size: 18px;
font-family: 'Montserrat', sans-serif;
text-decoration: none;
color:white;
cursor:pointer;
&:hover{
    background-color:white;
    color:black;
  }
}
`;

const Allitems = Styled.div`
display:flex;
align-items:center;
width: 100%;
justify-content: space-between;
${rh.belowLandscapeTablet`
flex-direction : column;
`}
`;

const FooterWrap = Styled.div`
display: flex;
flex-direction : column;
justify-contents: space-between;
align-items:center;
width:100%;
`;
const FooterTexts = Styled.div`
padding:40px;
& p{
  font-size: 22px;
font-family: 'Montserrat', sans-serif;
${rh.belowLandscapeTablet`
  font-size: 18px;
`} 
} `;
const FooterImages = Styled.div`
  ${rh.belowLandscapeTablet`
display:flex;
flex-direction:column;
align-items:center;
`}
&>img{
  width:100%;
}
`;
const ArrowLink = Styled.a`
cursor:pointer;`;

const BottomArrow = Styled.img`
margin:30px 50px;`;
export const Footer = () => (
  <FooterContainers id="myContacts">
    <Line />
    <FooterWrap>
      <TitleFooter>Les contacts</TitleFooter>
      <Allitems>
        <FooterTexts>
          <p>Mon adresse email : taniabitbol@gmail.com</p>
          <br />
          <p>Mon Linkdin : Tania Abitbol</p>
          <br />
          <Cv>
            <p>Mon CV : </p>
            <a href={pdf}>Découvrir</a>
          </Cv>
        </FooterTexts>
        <FooterImages>
          <img src={snakeImage} alt="" />
          <ArrowLink href="#top">
            <BottomArrow src={bottomArrow} />
          </ArrowLink>
        </FooterImages>
      </Allitems>
    </FooterWrap>
  </FooterContainers>
);
