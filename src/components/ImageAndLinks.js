import { BsGithub, BsLink45Deg } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import profileImage from "../assets/images/profile-image.jpg";

import classes from "./ImageAndLinks.module.css";

const ImageAndLinks = () => {
  return (
    <div className={classes["image-and-links"]}>
      <img src={profileImage} alt="me-smiling-with-sunglasses" />
      <div className={classes.links}>
        <a href="https://github.com/bcakko" target="_blank" rel="noreferrer">
          <BsGithub className={classes["link-icon"]} />
          GitHub
          <BsLink45Deg className={classes["anchor-icon"]} />
        </a>
        <a
          href="https://www.linkedin.com/in/bar%C4%B1%C5%9F-can-akko%C3%A7ak-96b09697/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className={classes["link-icon"]} />
          LinkedIn
          <BsLink45Deg className={classes["anchor-icon"]} />
        </a>
      </div>
    </div>
  );
};

export default ImageAndLinks;
