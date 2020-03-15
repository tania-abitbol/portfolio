import React from "react"
import Styled from "styled-components"
import snakeImage from "../images/snake.png"

const FooterContainers = Styled.div`
background-color:black;
color:white;
border-right:  "2px solid white";
min-width:125px;
`
const ContactContainer = Styled.div`
font-size :18px;
display:flex;
align-items:center;

`
const TitleFooter = Styled.h1`
font-size:30px;
font-family:'Poiret One';
text-align :center;
padding-top:20px;
`

const Line = Styled.div`
height:100%;
width:125px;
border-right:2px solid white;
`
const Cv = Styled.div`
display:flex;`

export const Footer = () => 
<FooterContainers>
     <Line>
    <TitleFooter>Les contacts</TitleFooter>
     <Line/>
    <ContactContainer>
      <div>
        <p>Mon numéro de télephone : 06 95 85 33 43</p>
        <br />
        <p>Mon adresse email : tania.abitbol@hetic.net</p>
        <br />
        <p>Mon Linkdin : Tania Abitbol</p>
        <br />
        <Cv>
          <p>Mon curcuillium vitae :</p>
          <button>DÉCOUVRIR</button>
        </Cv>
      </div>
      <img src={snakeImage} />
    </ContactContainer>
</FooterContainers>
