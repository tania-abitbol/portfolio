import React from "react";
import { Layout } from "../../components/layout";
import Article from "./local-components/article";
// import { articleData } from "./data";
import { HelmetComponent } from "../../components/helmet";

import eyesImage from "../../images/eyes.png";
import girlImage from "../../images/littke-girl.png";
import charactersImage from "../../images/persos.png";
import catImage from "../../images/renard.png";
import aquariumImage from "../../images/aquarium.png";
import flowerImage from "../../images/fleur.png";
import bearImage from "../../images/ours.png";
import phoneImage from "../../images/phone.png";

export const articleData = [
  {
    id: "",
    title: "Portfolio d’une etudiante en web",
    articleTitle: "Ma recherche",
    articleText:
      "Actuellement à la recherche d’une alternance, ou à défaut d'un stage de 2 mois dans l’univers du web.\r\n\nQuand ? En cas d'alternance, en août 2020 pour une durée de 2 ans. Et en cas de stage, en août 2020 pour une durée de 2 mois. Le rythme de l’alternance serait de 3 semaines en entreprise puis 1 semaine de formation.\r\n\nJe serais vivement intéressée par l’idée de travailler dans le domaine de la programmation.\r\n\nAvant tout, je suis à la recherche d’une entreprise dans laquelle le travail d’équipe, l’entente et le respect des valeurs humaines sont centraux afin que je puisse m’épanouir tant sur le plan humain que professionnel. ",
    articleImage: eyesImage,
    blackBoard: false,
    button: false,
    flex: "center",
  },
  {
    id: "whoAmI",
    title: "Et qui suis-je ?",
    articleTitle: "Ma présentation",
    articleText:
      "Actuellement étudiante chez HETIC dans le cursus bachelor web, j’ai fais le choix d’une formation pluridisciplinaire mélangeant à la fois programmation et design tout en étant tourné vers la gestion d’équipe.\r\n\nJe dédie mon temps libre à la conception de recettes, au developpement personnel ainsi qu'au sport.\r\n\nDe manière plus générale, la perspective d’être mise face à de réels challenges m’a toujours motivée et donnée envie de donner le meilleur de moi-même, que ce soit dans un cadre professionnel comme privé.\r\n\nSur le plan personnel, on dit de moi que je suis une femme souriante et énergique. Aller de l’avant est mon mot d’ordre et j’éprouve une réelle satisfaction dans la réalisation de projets collectifs.",
    articleImage: girlImage,
    blackBoard: false,
    button: false,
    flex: "center",
  },
  {
    id: "",
    title: "La créativité . . .",
    articleTitle: "Ma mentalité",
    articleText:
      "Au cours de ma formation à HETIC, les cours de gestion d’équipe ainsi que les nombreuses semaines de projet m’ont appris à comprendre ce qu’implique le travail d’équipe. Des projets personnels m'ont également aidée à découvrir et à m'ameliorer dans differents domaines de programmation.\r\n\nPar ailleurs, le respect d’autrui étant fondamental pour travailler en équipe, l’école nous a demandé de travailler tant sur nous-même que sur les différences qui nous séparent, celle-ci pouvant parfois constituer une force. En m’investissant, j’en suis ressortie davantage tournée vers les autres et je remercie HETIC pour cette opportunité.\r\n\nD’un autre côté, les cours de méthode de projet m’ont permis de comprendre et d’intégrer le lexique tout en apprenant à construire méthodiquement un projet technologique.\r\n\nJ’éprouve un réel plaisir lorsque je présente en public, le travail durement accompli.",
    articleImage: charactersImage,
    blackBoard: false,
    button: false,
    flex: "center",
  },
  {
    id: "mySkills",
    title: "Quelles sont mes compétences ? ",
    articleTitle: "Dans le domaine de la programmation :",
    articleText:
      "- HTML/CSS : J’ai eu l’occasion, en plus des cours, de m’occuper de la partie intégration dans plusieurs de mes projets de groupe. Je maitrise le pré-processeur SASS et la convention de nommage des classes avec BEM.\r\n\n- JavaScript natif : Maitrise du DOM, création d’un mini jeu vidéo 100% en JS, création d’animations JS sur mes différents projets. Utilisation de différentes librairies (husky, eslint, prettier).\r\n\n- React JS : Création de ce portfolio avec ce framework, maitrise de styled-components.\r\n\n- Gatsby : Maitrise de cet environnement. Ce portfolio utilise Gatsby.\r\n\n- PHP : Un langage que j’ai beaucoup utilisé durant cette année, maitrise du design pattern MVC (model, view, controller) et donc de la programation orientée objets. Utilisation régulière du logiciel Mamp et de Phpmyadmin.\r\n\n- GitHub : Maitrise de cet outil que j’ai eu l’occasion d’utiliser de manière regulière.\r\n\n- Arduino : J’ai acquis de petite base au lycée, car mon projet au baccalauréat était la programmation d’une carte Arduino en C++.\r\n\n- MySql : Maitrise des actions de base.\r\n\n- Aws : Brève maitrise de l'environement aws grâce auquel j'ai eu l'occasion de deployer un projet en ligne.\r\n\n",
    articleImage: aquariumImage,
    blackBoard: true,
    button: false,
    flex: "end",
  },
  {
    id: "",
    title: " ",
    articleTitle: "Dans le domaine du design :",
    articleText:
      "- Figma : Maitrise du logiciel grâce à des projets comme ce portfolio, pour lequel je m’occupe du maquettage. C’est un domaine qui me plait. J’ai aussi eu l’occasion d’utiliser des plugins. Maitrise de l’option de prototypage sur ce logiciel.\r\n\n- Photoshop et Illustrator : Des cours de qualité durant toute l’année m’ont permis de maitriser ces logiciels.\r\n\n- Premiere pro : j’ai monté de courtes videos de maquillages artistiques sur ce logiciel.",
    articleImage: catImage,
    blackBoard: true,
    button: false,
    flex: "start",
  },
  {
    id: "myProjets",
    title: "Des projets réalisés ? ",
    articleTitle: "Infoquiz - Concours coddity",
    articleText:
      "Infoquiz est une application web crée pour la participation au concours boursecoddity 2020 sur la thématique de la découverte du monde de l’informatique et d’internet aux enfants.\r\n\nMon application web est une solution pour donner envie à l’enfant grâce, à un design agréable et amusant de s’instruire sur le thème de l’informatique et d’internet.\r\n\nLa gamification de cette application web permettra aux enfants d’acquérir de nouvelles connaissances ainsi qu’une certaine prévention des dangers du monde de l’informatique.",
    articleImage: flowerImage,
    blackBoard: false,
    button: true,
    link: "https://github.com/tania-abitbol/Info-Quiz-Tania",
    flex: "end",
  },
  {
    id: "",
    title: "",
    articleTitle: "Mon jeu vidéo fait en JavaScript",
    articleText:
      "Durant un projet à l’école, avec une équipe, l’objectif était d’inventer un jeu vidéo sur le thème “après” entièrement codé en JavaScript (dans un délais de seulement 5 jours).\r\n\nPuis par la suite j’ai decidé de reprendre le projet et de l’améliorer. Le design a entièrement été fait par moi ainsi qu'une grande partie du code. Ce projet m’a apporté de nombreuses connaissances en JavaScript.",
    articleImage: bearImage,
    blackBoard: false,
    button: true,
    link: "https://after-dream.netlify.app/",
    flex: "start",
  },
  {
    id: "",
    articleTitle: "Socoda",
    articleText:
      "Dans le contexte d'un projet en une équipe, en seulement 5 jours, nous avons dû designer une interface web pour des producteurs et fournisseurs alimentaires fictifs.\r\n\nCe travail m'a fait progresser sur la gestion de projet design, sur la création d'un design système et sur l'utilisation de l'atomic design.",
    articleImage: phoneImage,
    blackBoard: false,
    button: true,
    flex: "end",
    link: "https://dribbble.com/shots/11436155-Statistics-page-Socoda",
  },
];

const IndexPage = () => (
  <Layout>
    <HelmetComponent title="Tania Abitbol" />
    {articleData.map((value, index) => (
      <Article
        link={value.link}
        key={index}
        id={value.id}
        title={value.title}
        articleTitle={value.articleTitle}
        articleText={value.articleText}
        articleImage={value.articleImage}
        blackBoard={value.blackBoard}
        button={value.button}
        order={index % 2 === 0}
        flex={value.flex}
      />
    ))}
  </Layout>
);
export default IndexPage;
