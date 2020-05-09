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
      "Actuellement à la recherche d’une alternance (3 semaines en entreprise pour 1 semaine à l’école) dans l’industrie du web, je suis intéressée par l’idée de travailler dans le domaine de la programmation. \r\n\n L’alternance en question débuterait en octobre 2020 et durerait une à deux années. Il est également possible d’effectuer un mois de stage au préalable en Septembre au sein de l’entreprise avant de le début l’alternance. \r\n\n Avant tout, je suis à la recherche d’une entreprise dans laquelle le travail d’équipe, l’entente et le respect de valeurs humaines sont centraux afin que je puisse m’épanouir tant sur le plain humain que professionnel. ",
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
      "Au cours de ma formation à HETIC, les cours de gestion d’équipe ainsi que les nombreuses semaines de projet m’ont appris à comprendre ce qu’implique le travail d’équipe.\r\n\n Par ailleurs, le respect d’autrui étant fondamental pour travailler en équipe,  l’école nous a demandé de travailler tant sur nous-même que sur les différences qui nous séparent, les différences pouvant parfois constituer une force. En m’investissant, j’en suis ressortie davantage tournée vers les autres et je remercie HETIC pour cette opportunité.\r\n\nD’un autre côté, les cours de méthode de projet m’ont  permis de comprendre et d’intégrer le lexique tout en apprenant à construire méthodiquement un projet technologique.\r\n\nJ’éprouve un réel plaisir lorsque je présente ce pour quoi je travaille dur face à un public à qui j’essaie de transmettre chaque fois ma passion. ",
    articleImage: charactersImage,
    blackBoard: false,
    button: false,
    flex: "center",
  },
  {
    id: "mySkills",
    title: "Quelles sont mes compétences ? ",
    articleTitle: "Dans le domaine du code :",
    articleText:
      "-HTML/CSS, j’ai eu l’occasion de plus des cours, m’occupper de la partie integration dans plusieurs de mes projets de groupe.J’utilise comme pré processeur SASS.-JavaScript , maitrise du Dom anssi que l’optimisation du code de maniere à l’aleger au maximum.\r\n\n -PHP, connaissances des bases et ce langage m’interesse.\r\n\n  -GitHub, bonne maitrise de cet outils que j’ai eu l’occasion d’utiliser beaucoup de fois durant l’année.(bonne maitrise du terminal)-Arduino, durant mon lycée j’ai eu l’occasion d’automatiser une piscine avec une carte Arduino et élaborer la conception d’une application pour que tout cela fonctionne.",
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
      "-Figma, Avant tout projet, c’est sur ce logiciel que je m’occupe de la partie maquettage.Je maitrise des plugins et  le prototypage \r\n\n -Photoshop et Illustrator,Les cours durant toute l’année m’ont permis de maitriser ces logiciels.\r\n\n-Premiere pro, j’ai monter un mini film sur ce logiciel et des videos de maquillage artistique.",
    articleImage: catImage,
    blackBoard: true,
    button: false,
    flex: "start",
  },
  {
    id: "myProjets",
    title: "Des projets réalisés ? ",
    articleTitle: "Info quiz",
    articleText:
      "Infoquiz est une application web crée pour la participation au concours boursecoddity 2020 sur la thématique de la découverte du monde de l’informatique et d’internet aux enfants. Mon application web est une solution pour donner envie à l’enfant grâce à un design agréable et amusant de s’instruire sur le thème de l’informatique et d’internet. La gamification de cette application web permettra aux enfants d’acquérir de nouvelles connaissances en plus d’avoir une certaine prévention des dangers du monde de l’informatique.",
    articleImage: flowerImage,
    blackBoard: false,
    button: true,
    link: "https://github.com/tania-abitbol/Info-Quiz-Tania",
    flex: "end",
  },
  {
    id: "",
    articleTitle: "Mon jeu vidéo codé en JavaScript",
    articleText:
      "Durant un projet à l’école, avec une équipe, l’objectif était d’inventer un jeu vidéo sur le thème “après” entirement coder en Javascript.Et Dans un délai de seulement 5 jours.Puis par la suite j’ai decider de reprendre le projet et de l’améliorer.Le design a entièrement étais fait pas moi ainsi qu'une grande partie du code.Ce projet m’a apporté de nombreuses connaissances en JavaScript ce qui m'beaucoup plut.",
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
      "Durant un projet à l’école, avec une équipe, l’objectif était d’inventer un jeu vidéo sur le thème “après” entirement coder en Javascript.Et Dans un délai de seulement 5 jours.Puis par la suite j’ai decider de reprendre le projet et de l’améliorer.Le design a entièrement étais fait pas moi ainsi qu'une grande partie du code.Ce projet m’a apporté de nombreuses connaissances en JavaScript ce qui m'beaucoup plut.",
    articleImage: phoneImage,
    blackBoard: false,
    button: true,
    flex: "end",
    link: "https://dribbble.com/",
  },
];
