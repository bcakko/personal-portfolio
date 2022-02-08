import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import classes from "./App.module.css";
import Certificates from "./components/Certificates/Certificates";

const App = () => {
  return (
    <div className={classes.container}>
      <div className={classes.main}>
        <Home />
      </div>
      <div className={classes.details}>
        <Projects />
        <Certificates />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
