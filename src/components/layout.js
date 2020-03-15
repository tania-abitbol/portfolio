import React from "react"
import { Hero } from "./hero"
import { Footer } from "./footer"
import { ResetGlobalStyle } from "../styles"

export const Layout = ({ children }) => {
  return (
    <>
      <ResetGlobalStyle />
      <Hero />
      {children}
      <Footer />
    </>
  )
}
