import React from "react"
import Styled, { css } from "styled-components"
import { ifProp } from "styled-tools"

const Line = Styled.div`
border-right: ${props =>
  props.blackBoard ? "2px solid white" : "2px solid black"} ;
min-width:125px;
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

const ArticleContainer = Styled.div`
display:flex;
align-items:center;
width:100%;
`
const ArticleTitle = Styled.h1`
font-size: 30px;
text-align:center;
font-family: 'Poiret One';

`
const ArticleText = Styled.div`
flex:1;
white-space: break-spaces;
padding:100px;
`

const ArticleImage = Styled.div`
order:${props => (props.order === "true" ? 0 : 1)};

`
const ArticleAll = Styled.div`
margin:20px 0;
justify-content: space-between;
`

const ArticleLittleTitle = Styled.h2`
font-family: 'Montserrat', sans-serif;
font-size:20px;
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
}) => (
  <ArticlesWrapper blackBoard={blackBoard}>
    <Line blackBoard={blackBoard} />
    <ArticleAll>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleContainer>
        <ArticleImage order={order.toString()}>
          <img src={articleImage} />
        </ArticleImage>
        <ArticleText>
          <ArticleLittleTitle>{articleTitle}</ArticleLittleTitle>
          <ArticleTextText>{articleText}</ArticleTextText>
        </ArticleText>
      </ArticleContainer>
    </ArticleAll>
  </ArticlesWrapper>
)
