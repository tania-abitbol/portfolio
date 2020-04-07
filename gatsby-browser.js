/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { HelmetProvider } from "react-helmet-async"

const helmetContext = {}

export const wrapRootElement = ({ element }) => {
  return <HelmetProvider context={helmetContext}>{element}</HelmetProvider>
}
