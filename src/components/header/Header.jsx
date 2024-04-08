import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { headerLinksData } from "../../values/values";

import styles from "./header.module.css";
import logo from "../../assets/Logo.svg";

const Header = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const menuHandler = () => {
    setActive(!active);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.headerInner} container`}>
        <div className={styles.logoHolder} onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" />
        </div>
        <ul className={active ? styles.activeList : ""}>
          {headerLinksData.map((link) => (
            <li key={link.id}>
              <Link to={link.to}>{link.title}</Link>
            </li>
          ))}
        </ul>
        {/* <button
          className={styles.headerBtn}
          onClick={() => navigate("/classes")}
        >
          Prisijungti
        </button> */}
        <div className={styles.menu} onClick={menuHandler}>
          <i className={`fas ${active ? "fa-times" : "fa-bars"} open-list`}></i>
        </div>
        <div
          className={`${styles.menuOverlay} ${
            active ? styles.activeOverlay : ""
          }`}
          onClick={menuHandler}
        ></div>
      </div>
    </header>
  );
};

export default Header;
