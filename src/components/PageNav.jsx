import styles from "./PageNav.module.css";

import Header from "./Header";
import Input from "./Input";
import { NavLink, useLocation } from "react-router-dom";

function PageNav() {
  const location = useLocation();
  return (
    <nav className={styles.nav}>
      <Header />

      <div className={styles.inputContainer}>
        {location.pathname === "/" && <Input />}
      </div>

      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
