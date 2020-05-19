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
    <meta property="og:title" content="Tania Abitbol - Portfolio" />
    <meta
      property="og:description"
      content="Voici le Portfolio d'une étudiante en web à la recherche d'une alternance."
    />
    <meta property="og:image" content={eyesImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </Helmet>
);
