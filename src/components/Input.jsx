import { useState } from "react";
import { useBooks } from "../contexts.jsx/BooksContext";
import styles from "./Input.module.css";

function Input() {
  const [searchTerm, setSearchTerm] = useState("");
  const { handleSetQuery, setBookList } = useBooks();

  function handleSearchClick() {
    if (searchTerm.trim()) {
      handleSetQuery(searchTerm);
    } else {
      setBookList([]);
      handleSetQuery("");
    }
  }

  function handleInputChange(e) {
    const value = e.target.value;
    setSearchTerm(value);
    if (!value.trim()) {
      setBookList([]);
      handleSetQuery("");
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  }

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search here..."
        onChange={(e) => handleInputChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button
        className={styles.searchButton}
        onClick={() => handleSearchClick()}
      >
        <div className={styles.searchIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class={styles.searchSvg}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}

export default Input;
