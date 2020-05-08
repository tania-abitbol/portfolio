import React, { useState } from "react";
import { Hero } from "./hero";
import { Footer } from "./footer";
import { ResetGlobalStyle } from "../styles";
import { Start } from "./start";

export const Layout = ({ children }) => {
  const [displayLoading, setDisplayLoading] = useState(true);

  const callbackFunction = childData => {
    setDisplayLoading(childData);
  };

  return (
    <>
      <ResetGlobalStyle />
      {displayLoading ? (
        <Start parentCallback={callbackFunction} />
      ) : (
        <>
          <Hero />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};
