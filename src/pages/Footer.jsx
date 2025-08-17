import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <h2 className={styles.header}>
            BOOK
            <span>
              <img className={styles.logoIcon} src="/logo.png" alt="logoIcon" />
            </span>
            TREE
          </h2>
          <p className={styles.description}>
            Unlock a world of knowledge with our vast collection of books and
            resources.
          </p>
        </div>
      </div>

      <div className={styles.linksSection}>
        <h3 className={styles.heading}>Quick Links</h3>
        <ul className={styles.linksList}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
