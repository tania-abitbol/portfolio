import React from "react"
import { Layout } from "../../components/layout"
import { Article } from "./local-components/article"
import { articleData } from "./data"
const IndexPage = () => {
  return (
    <Layout>
      {articleData.map((value, index) => (
        <Article
          key={index}
          title={value.title}
          articleTitle={value.articleTitle}
          articleText={value.articleText}
          articleImage={value.articleImage}
          blackBoard={value.blackBoard}
          order={index % 2 === 0}
        />
      ))}
    </Layout>
  )
}

export default IndexPage
