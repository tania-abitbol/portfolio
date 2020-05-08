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
font-size:36px;
font-family:'Poiret One';
margin-top:36px;
`

const Line = Styled.div`
min-width:220px;
border-right:4px solid white;
`
const Cv = Styled.div`
display:flex;
align-items: center;
&>a{
  border: solid white 2px;
  border-radius: 40px;
  padding: 15px 40px;
  margin:15px;
  font-size: 18px;
font-family: 'Montserrat', sans-serif;
cursor:pointer;
&:hover{
    background-color:white;
    color:black;
  }
}
`

const Allitems = Styled.div`
display:flex;
align-items:center;
width: 100%;
justify-content: space-between;
`

const FooterWrap = Styled.div`
display: flex;
flex-direction : column;
justify-contents: space-between;
align-items:center;
width:100%;
`
const FooterTexts = Styled.div`
padding:40px;
& p{
  font-size: 22px;
font-family: 'Montserrat', sans-serif;

} `

export const Footer = () => (
  <FooterContainers>
    <Line />
    <FooterWrap>
      <TitleFooter>Les contacts</TitleFooter>
      <Allitems>
        <FooterTexts>
          <p>Mon numéro de télephone : 06 95 85 33 43</p>
          <br />
          <p>Mon adresse email : tania.abitbol@hetic.net</p>
          <br />
          <p>Mon Linkdin : Tania Abitbol</p>
          <br />
          <Cv>
            <p>Mon CV : </p>
            <a>Découvrir</a>
          </Cv>
        </FooterTexts>
        <div>
        <img src={snakeImage} />
        </div>
        
      </Allitems>
    </FooterWrap>
  </FooterContainers>
)
