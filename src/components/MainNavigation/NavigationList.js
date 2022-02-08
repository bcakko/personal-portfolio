import { Link } from "react-scroll";
import classes from "./NavigationList.module.css";
const NavigationList = (props) => {
  const listItems = props.menu.map((element) => (
    <Link
      key={element.id}
      activeClass={classes.active}
      to={element.to}
      spy={element.spy}
      smooth={true}
      offset={element.offset}
      duration={500}
      delay={0}
      onClick={element.onClick}
    >
      <span className={classes.number}>{element.number} </span>
      <span className={classes.line}></span>
      <span className={classes.title}> {element.title}</span>
    </Link>
  ));

  return <ol className={props.className}>{listItems}</ol>;
};

export default NavigationList;
