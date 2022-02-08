import classes from "./Home.module.css";
import MainNavigation from "../MainNavigation/MainNavigation";
import ImageAndLinks from "../ImageAndLinks";

const Home = () => {
  return (
    <div className={classes.home} id="home">
      <div className={classes.text}>
        <h1>
          Hello, I'm <span className={classes.blue}>Barış Can</span>.
        </h1>
        <p>
          a Web Developer <br />
          Located in Antalya, Turkey
        </p>
        <p className={classes.detail}>
          I'm an enthusiastic front-end developer, interested in every aspect of
          web development. I'm a well-adjusted, hard-working person who loves working as a team, problem solving,
          and digging the details. <br />
          I'm also a fan of jazz, fantasy worlds, outdoor activities and I enjoy
          playing my bass guitar!
        </p>
      </div>

      <MainNavigation />
      <ImageAndLinks />
    </div>
  );
};

export default Home;
