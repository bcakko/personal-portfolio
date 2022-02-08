import classes from "./Projects.module.css";
import {GiDiceTwentyFacesTwenty} from 'react-icons/gi'
import {RiSurveyLine} from 'react-icons/ri'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Card from "../UI/Card";
import { BsLink45Deg } from "react-icons/bs";

const Projects = () => {
  const projectsList = [
    {
      id: "initiatives",
      flag: "React.js",
      name: "Initiatives App",
      image: <GiDiceTwentyFacesTwenty className={classes.img} />,
      description: `Combat tracker suitable for TTRPG games`,
      link: "https://bcakko.github.io/initiatives-app/",
    },
    {
      id: "survey",
      flag: "HTML & CSS",
      name: "Survey From",
      image: <RiSurveyLine className={classes.img} />,
      description: "Survey form about a fantasy novel",
      link: "https://codepen.io/bcakko/full/LYyJwMb",
    },
    {
      id: "product",
      flag: "HTML & CSS",
      name: "Product Page",
      image: <AiOutlineShoppingCart className={classes.img} />,
      description: "Product introduction page about a bass brand",
      link: "https://codepen.io/bcakko/full/mdmQVxO",
    },
  ];

  const projects = projectsList.map((element) => (
    <Card className={classes.flag} 
    key={element.id}>
      <a
        href={`${element.link}`}
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <h3>{element.flag}</h3>
          <h5 className={classes.name}>{element.name}</h5>

          <p className={classes.description}>{element.description}</p>
        </div>
        {element.image}
        <BsLink45Deg className={classes["link-icon"]} />
      </a>
    </Card>
  ));

  return (
    <div className={classes.projects} id="projects">
      <h2 className={classes.title}>My work</h2>
      <div className={classes.container}>{projects}</div>
    </div>
  );
};

export default Projects;
