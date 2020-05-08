import React from "react"
import { Layout } from "../../components/layout"
import { Article } from "./local-components/article"
import { articleData } from "./data"
import { HelmetComponent } from "../../components/helmet"

export const IndexPage = () => (
  <Layout >
    <HelmetComponent title="Portfolio Tania Abitbol" />
    {articleData.map((value, index) => (
      <Article
        key={index}
        title={value.title}
        articleTitle={value.articleTitle}
        articleText={value.articleText}
        articleImage={value.articleImage}
        blackBoard={value.blackBoard}
        button={value.button}
        order={index % 2 === 0}
      />
    ))}
  </Layout>
)
