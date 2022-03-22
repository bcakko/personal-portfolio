import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

import classes from "./MainNavigation.module.css";
import NavigationList from "./NavigationList";

const MainNavigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuToggleHandler = () => {
    setShowMenu((prevState) => !prevState);
  };

  const wideNavLinks = [
    {
      id: "projects",
      to: "projects",
      title: "Projects",
      number: '01',
      offset: -130,
      spy: false,
    },
    {
      id: "contact",
      to: "contact",
      title: "Contact",
      number: '02',
      offset: -130,
      spy: false,
    },
  ];

  const mobileNavLinks = [
    {
      id: "home",
      to: "home",
      title: "Home",
      offset: -80,
      spy: false,
      onClick: menuToggleHandler,
    },
    {
      id: "projects",
      to: "projects",
      title: "Projects",
      offset: -80,
      spy: false,
      onClick: menuToggleHandler,
    },
    {
      id: "contact",
      to: "contact",
      title: "Contact",
      offset: -70,
      spy: false,
      onClick: menuToggleHandler,
    },
  ];

  return (
    <nav className={classes.nav}>
      {!showMenu ? (
        <HiOutlineMenu
          className={classes["hamburger-button"]}
          onClick={menuToggleHandler}
        />
      ) : (
        <CgClose
          className={classes["hamburger-button"]}
          onClick={menuToggleHandler}
        />
      )}
      <NavigationList
        className={classes["wide-navigation"]}
        menu={wideNavLinks}
      />
      {showMenu && (
        <NavigationList
          className={classes["mobile-navigation"]}
          menu={mobileNavLinks}
          onClick={menuToggleHandler}
        />
      )}
    </nav>
  );
};

export default MainNavigation;
