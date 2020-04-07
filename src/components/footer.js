import React from "react"
import Styled from "styled-components"
import snakeImage from "../images/snake.png"

const FooterContainers = Styled.div`
background-color:black;
color:white;
display:flex;
font-size :18px;
`

const TitleFooter = Styled.h1`
font-size:30px;
font-family:'Poiret One';
text-align :center;
padding-top:20px;
`

const Line = Styled.div`
min-width:125px;
border-right:2px solid white;
`
const Cv = Styled.div`
display:flex;`

const Allitems = Styled.div`
display:flex;
margin:40px;
align-items:center;
`
const FooterText = Styled.div`
padding-right:460px;
font-family: 'Montserrat', sans-serif;
     `

export const Footer = () => (
  <FooterContainers>
    <Line />
    <div>
      <TitleFooter>Les contacts</TitleFooter>
      <Allitems>
        <FooterText>
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
        </FooterText>
        <img src={snakeImage} />
      </Allitems>
    </div>
  </FooterContainers>
)
