import React, { Component, useState, useEffect } from "react"
import { Hero } from "./hero"
import { Footer } from "./footer"
import { ResetGlobalStyle } from "../styles"
import { Start } from "./start"

export const Layout = ({ children }) => {
  const [displayLoading, setDisplayLoading] = useState(true)

  const callbackFunction = childData => {
    setDisplayLoading(childData)
  }

  return (
    <>
      {displayLoading ? (
        <Start parentCallback={callbackFunction} />
      ) : (
        <>
          <ResetGlobalStyle />
          <Hero />
          {children}
          <Footer />
        </>
      )}
    </>
  )
}
