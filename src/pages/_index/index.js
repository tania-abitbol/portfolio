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
      "Actuellement à la recherche d’une alternance, ou à défaut un stage de 2 mois dans l’industrie du web.\r\n\nQuand ? Si alternance, en aout 2020 pour une durée de 2 ans. Si stage, en aout 2020 pour une durée de 2 mois. Pour l’alternance ce serrait 3 semaines en entreprise pour 1 semaine à l’école.\r\n\nje suis intéressée par l’idée de travailler dans le domaine de la programmation.\r\n\nAvant tout, je suis à la recherche d’une entreprise dans laquelle le travail d’équipe, l’entente et le respect de valeurs humaines sont centraux afin que je puisse m’épanouir tant sur le plain humain que professionnel. ",
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
      "Actuellement étudiante chez HETIC dans le cursus bachelor web, j’ai fais le choix d’une formation puridisiplinaire mélangant à la fois programmation et design tout en étant tourné vers la gestion d’équipe.\r\n\nJe dédie mon temps libre à la conception de recettes, au developpement personnel comme au sport.\r\n\nDe manière plus générale, la perspective d’être mise face à de réels challenges m’a toujours motivée et donnée envie de donner le meilleur de moi-même, que ce soit dans un cadre professionnel comme privé.\r\n\nSur le plan personnel, on dit de moi que je suis une femme souriante et énergique. Aller de l’avant est mon mot d’ordre et j’éprouve une réelle satisfaction dans la réalisation de projets collectifs.",
    articleImage: girlImage,
    blackBoard: false,
    button: false,
    flex: "center",
  },
  {
    id: "",
    title: "La creativité . . .",
    articleTitle: "Ma mentalité",
    articleText:
      "Au cours de ma formation à HETIC, les cours de gestion d’équipe ainsi que les nombreuses semaines de projet m’ont appris à comprendre ce qu’implique le travail d’équipe. Et aussi, des projets personnel m'ont aider à découvrir et m'ameliorer dans differents domaines de programmation.\r\n\nPar ailleurs, le respect d’autrui étant fondamental pour travailler en équipe,  l’école nous a demandé de travailler tant sur nous-même que sur les différences qui nous séparent, les différences pouvant parfois constituer une force. En m’investissant, j’en suis ressortie davantage tournée vers les autres et je remercie HETIC pour cette opportunité.\r\n\nD’un autre côté, les cours de méthode de projet m’ont  permis de comprendre et d’intégrer le lexique tout en apprenant à construire méthodiquement un projet technologique.\r\n\nJ’éprouve un réel plaisir lorsque je présente ce pour quoi je travaille dur face à un public à qui j’essaie de transmettre chaque fois ma passion. ",
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
      "- HTML/CSS/SASS : J’ai eu l’occasion, en plus des cours, de m’occuper de la partie intégration dans plusieurs de mes projets de groupe. Je maitrise le pré processeur SASS, et la convention de nommage des classes avec BEM.\r\n\n- JavaScript natif : Maitrise du DOM, création d’un mini jeu vidéo 100% en JS, création d’animations JS sur mes différents projets.Utilisation de diffrerentes librairies et plugins(husky, eslint, prettier).\r\n\n- React JS : Création de ce portfolio avec ce framework, maitrise de styled components.\r\n\n - PHP : Un langage que j’ai beaucoup utilisé durant cette année, maitrise du design pattern MVC (modele, views, controllers) et donc de la programation orienté objects. Utilisation régulière du logiciel mamp et de la structure phpmyadmin.\r\n\n- GitHub : Maitrise de cet outils que j’ai eu l’occasion d’utiliser de manière reguliere.\r\n\n- Gatsby : Maitrise de cet environnement. Ce portfolio utilise Gatsby.\r\n\n- Arduino : J’ai acquis de petites base car durant mon lycée mon projet au bac était de programmer une carte Arduino en C++.\r\n\n- MySql : maitrise des actions de base.\r\n\n- Aws : breve maitrise de l'environement aws. J'ai eu l'occasion de deployer un projet en ligne grace à aws.\r\n\n",
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
      "-Figma : maitrise du logiciel grâce a des projets comme ce portfolio par exemple, ou je m’occupe du maquettage. C’est un domaine qui me plait aussi fortement. J’ai eu l’occasion  d’utiliser des plugins. Maitrise de l’option de prototypage sur ce logiciel. \r\n\n- Photoshop et Illustrator : Des cours de qualité durant toute l’année m’ont permis de maitriser ces logiciels.\r\n\n- Premiere pro, j’ai monté de courtes videos de maquillage artistique sur ce logiciel.",
    articleImage: catImage,
    blackBoard: true,
    button: false,
    flex: "start",
  },
  {
    id: "myProjets",
    title: "Des projets réalisés ? ",
    articleTitle: "Info quiz - Concours coddity",
    articleText:
      "Infoquiz est une application web crée pour la participation au concours boursecoddity 2020 sur la thématique de la découverte du monde de l’informatique et d’internet aux enfants.\r\n\nMon application web est une solution pour donner envie à l’enfant grâce à un design agréable et amusant de s’instruire sur le thème de l’informatique et d’internet.\r\n\nLa gamification de cette application web permettra aux enfants d’acquérir de nouvelles connaissances en plus d’avoir une certaine prévention des dangers du monde de l’informatique.",
    articleImage: flowerImage,
    blackBoard: false,
    button: true,
    link: "https://github.com/tania-abitbol/Info-Quiz-Tania",
    flex: "end",
  },
  {
    id: "",
    title: "",
    articleTitle: "Mon jeu vidéo codé en JavaScript",
    articleText:
      "Durant un projet à l’école, avec une équipe, l’objectif était d’inventer un jeu vidéo sur le thème “après” entirement coder en Javascript.Dans un délais de seulement 5 jours.\r\n\nPuis par la suite j’ai decidé de reprendre le projet et de l’améliorer seule. Le design à entièrement étais fait pas moi ainsi qu'une grande partie du code. Ce projet m’a apporté de nombreuses connaissances en JavaScript ce qui m'a beaucoup plut.",
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
      "Dans le contexte d'un projet, avec une équipe, en 5 jours, nous avons du designer une interface web pour des producteurs et fournisseurs alimentaire.\r\n\nCe projet m'a fais progresser sur la gestion d'un projet design, création d'un design systeme et utilisation du molecule design. ",
    articleImage: phoneImage,
    blackBoard: false,
    button: true,
    flex: "end",
    link: "https://dribbble.com/",
  },
];

const IndexPage = () => (
  <Layout>
    <HelmetComponent title="Portfolio Tania Abitbol" />
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
