import React from "react"
import Styled, { css } from "styled-components"
import { ifProp } from "styled-tools"
import {responsiveHelpers as rh} from "../../../styles/utils"

const Line = Styled.div`
  min-width:220px;
${rh.belowPortraitTablet`
  display:none;
`
  }
border-right: ${props =>
  props.blackBoard ? "4px solid white" : "4px solid black"} ;
  

`
const ArticlesWrapper = Styled.div`
display:flex;
height:100%;
flex:1;
${ifProp(
  "blackBoard",
  css`
    background: black;
    color: white;
  `
)}
`

const Button = Styled.a`
  border: 2px solid black;
  border-radius: 40px;
  padding: 10px 50px;
  margin-top:15px;
  width: min-content;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  cursor:pointer; 
  &:hover{
    background-color:black;
    color:white;
  }
`


const ArticleContainer = Styled.div`
display:flex;
align-items:center;
width:100%;
${rh.belowPortraitTablet`
flex-direction:column;
`} 

`
const ArticleTitle = Styled.h1`
font-size: 32px;
text-align:center;
font-family: 'Poiret One';
margin-bottom: 30px;
${rh.belowPortraitTablet`
  font-size: 22px;
`} 

`

const ArticleText = Styled.div`
flex:1;
white-space: break-spaces;
font-size:18px;
line-height:27px;
display: flex;
flex-direction: column;
padding-left:100px ;
padding-right:${props => (props.order ? 0 : '100px')};
${rh.belowPortraitTablet`
padding: 0 30px;
`} 
`

const ArticleImage = Styled.div`
order:${props => (props.order ? 0 : 1)};
display:flex;
&> img{
  width:100%;
 
}
`
const ArticleAll = Styled.div`
margin-top:36px;
justify-content: space-between;


`

const ArticleLittleTitle = Styled.h2`
font-family: 'Montserrat', sans-serif;
font-size:22px;
padding-bottom:10px;
font-weight: bold;
`

const ArticleTextText = Styled.p`
font-family: 'Montserrat', sans-serif;
`
export const Article = ({
  title,
  articleText,
  articleImage,
  articleTitle,
  blackBoard,
  order,
  button,
}) => (
  <ArticlesWrapper blackBoard={blackBoard}>
    <Line blackBoard={blackBoard} />
    <ArticleAll>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleContainer>
        <ArticleImage order={order} >
          <img src={articleImage} />
        </ArticleImage>
        <ArticleText>
          <ArticleLittleTitle>{articleTitle}</ArticleLittleTitle>
          <ArticleTextText>{articleText}</ArticleTextText>
       {button && <Button button={button}>Découvrir</Button> } 
        </ArticleText>

      </ArticleContainer>
    </ArticleAll>
  </ArticlesWrapper>
)
