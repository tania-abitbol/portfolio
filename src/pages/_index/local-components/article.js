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

height: 284px;
width:100%;
`
const ArticleTitle = Styled.h1`
font-size: 30px;
text-align:center;
`
const ArticleText = Styled.div`
flex:1;
white-space: break-spaces;
`

const ArticleImage = Styled.div`
flex:1;
order:${props => (props.order === "true" ? 0 : 1)};
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
    <div>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleContainer>
        <ArticleImage order={order.toString()}>
          <img src={articleImage} />
        </ArticleImage>
        <ArticleText>
          <h2>{articleTitle}</h2>
          <p>{articleText}</p>
        </ArticleText>
      </ArticleContainer>
    </div>
  </ArticlesWrapper>
)
