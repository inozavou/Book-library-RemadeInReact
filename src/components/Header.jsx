import { Link } from "react-router-dom";
import { useBooks } from "../contexts.jsx/BooksContext";
import styles from "./Header.module.css";
function Header() {
  const { setBookList } = useBooks();
  return (
    <Link
      to="/"
      onClick={() => {
        setBookList([]);
      }}
    >
      <h1 className={styles.header}>
        BOOK{" "}
        <span>
          <img className={styles.logoIcon} src="./logo.png" alt="logoIcon" />
        </span>
        TREE
      </h1>
    </Link>
  );
}

export default Header;
