import { BsLink45Deg } from "react-icons/bs";
import classes from "./Contact.module.css";

const ContactLink = (props) => {
  return (
      <a href={props.link} target='_blank' rel="noreferrer">
        {props.icon}
        <p>{props.name}</p>
        <BsLink45Deg className={classes["anchor-icon"]} />
      </a>
  );
};

export default ContactLink;
