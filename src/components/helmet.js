import React from "react"
import { Helmet } from "react-helmet-async"

export const HelmetComponent = ({ title, metaDescription, metaTitle }) => (
  <Helmet>
    <title>{title} </title>
    {metaDescription && <meta name="description" content={metaDescription} />}
    {metaTitle && <meta name="title" content={metaTitle} />}
  </Helmet>
)
