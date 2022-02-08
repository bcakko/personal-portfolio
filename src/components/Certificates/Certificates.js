import classes from "../Projects/Projects.module.css";

import {FaFreeCodeCamp} from "react-icons/fa";
import Card from "../UI/Card";
import { BsLink45Deg } from "react-icons/bs";

const Certificates = () => {
  const projectsList = [
    {
      id: "freecodecamp",
      flag: "Free Code Camp",
      name: "Responsive Web Design",
      image: <FaFreeCodeCamp className={classes.img}/>,
      description: '',
      link: "https://www.freecodecamp.org/certification/bcakko/responsive-web-design",
    },
  ];

  const projects = projectsList.map((element) => (
    <Card className={classes.flag} key={element.id}>
      <a href={`${element.link}`} target="_blank" rel="noreferrer">
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
      <h2 className={classes.title}>Certificates</h2>
      <div className={classes.container}>{projects}</div>
    </div>
  );
};

export default Certificates;
