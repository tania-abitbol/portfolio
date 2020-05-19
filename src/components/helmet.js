import React from "react";
import { Helmet } from "react-helmet-async";

import eyesImage from "../images/eyes.png";

export const HelmetComponent = () => (
  <Helmet>
    <title>Tania Abitbol</title>
    <meta name="title" content="Tania Abitbol - Portfolio" />
    <meta
      name="description"
      content="Voici le Portfolio d'une étudiante en web à la recherche d'une alternance."
    />
    <meta name="og:title" content="Tania Abitbol - Portfolio" />
    <meta
      name="og:description"
      content="Voici le Portfolio d'une étudiante en web à la recherche d'une alternance."
    />
    <meta name="og:image" content={eyesImage} />
    <meta name="og:image:width" content="1200" />
    <meta name="og:image:height" content="630" />
  </Helmet>
);
