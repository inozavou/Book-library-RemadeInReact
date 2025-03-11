import { Link } from "react-router-dom";
import styles from "./SearchResultList.module.css";
import { useBooks } from "../contexts.jsx/BooksContext";

import Spinner from "./Spinner";

function SearchResultList() {
  const { bookList, isLoading } = useBooks();
  return (
    <div className={styles.searchContainer}>
      <div className={styles.queryResults}>
        {isLoading ? (
          <Spinner />
        ) : bookList.length > 0 ? (
          bookList.map((work, index) => (
            <div className={styles.searchedBookContainer} key={work.key}>
              <Link className={styles.searchedBook} to={work.key}>
                <img
                  className={styles.bookCover}
                  src={`https://covers.openlibrary.org/b/OLID/${work.cover_edition_key}-M.jpg`}
                  alt={index}
                />
                <p className={styles.textTitle}>{work.title}</p>
              </Link>
            </div>
          ))
        ) : (
          <p className={styles.searchResultMessage}>
            Type your book title in the input field...
          </p>
        )}
      </div>
    </div>
  );
}

export default SearchResultList;
