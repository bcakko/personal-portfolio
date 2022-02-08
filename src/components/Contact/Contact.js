import Card from "../UI/Card";
import classes from "./Contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlinePhone, AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import ContactLink from "./ContactLink";

const Contact = () => {
  const links = [
    {
      id: "github",
      name: "GitHub",
      icon: <BsGithub className={classes.icon} />,
      link: "https://github.com/bcakko",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: <AiFillLinkedin className={classes.icon} />,
      link: "https://www.linkedin.com/in/bar%C4%B1%C5%9F-can-akko%C3%A7ak-96b09697/",
    },
  ];

  const contactLinks = links.map((element) => (
    <Card className={classes["link-card"]} key={element.id}>
      <ContactLink
        icon={element.icon}
        link={element.link}
        name={element.name}
      />
    </Card>
  ));

  return (
    <div className={classes.contact} id="contact">
      <h2>Contact</h2>
      <Card className={classes.info}>
        <div className={classes.email}>
          <MdOutlineEmail />
          <p>bariscanakkocak@gmail.com</p>
        </div>
        <div className={classes.phone}>
          <AiOutlinePhone />
          <p>+90 534 227 84 84</p>
        </div>
      </Card>
      <div className={classes.links}>{contactLinks}</div>
    </div>
  );
};

export default Contact;
