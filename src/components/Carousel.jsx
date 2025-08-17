import { useState } from "react";
import { useBooks } from "../contexts.jsx/BooksContext";
import { Link } from "react-router-dom";
import styles from "./Carousel.module.css";

function Carousel() {
  const { genreInfo } = useBooks();
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleBooks = 4;
  const CarouselWrapper = "CarouselWrapper";

  function handleCarousel(direction, genre) {
    const totalBooks = genreInfo[genre].works.length;
    const maxIndex = Math.ceil(totalBooks / visibleBooks) - 1;

    if (direction === "left") {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (direction === "right") {
      setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
    }
  }

  return (
    <div className={styles.booksContainer}>
      {Object.keys(genreInfo).map((genre, index) => (
        <div className={styles.genre} key={index}>
          <h2 className={styles.genreTitle}>{genre.toUpperCase()}</h2>
          <button
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={() => handleCarousel("left", genre)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <div className={styles.carouselContainer}>
            <div
              className={styles[`${genre}${CarouselWrapper}`]}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: "transform 0.5s ease",
              }}
            >
              {genreInfo[genre].works.map((work, index) => (
                <Link
                  to={`/categories${work.key}`}
                  className={styles.carouselBook}
                  key={work.key}
                >
                  <img
                    className={styles.bookCover}
                    src={`https://covers.openlibrary.org/b/OLID/${work.cover_edition_key}-M.jpg`}
                    alt={index}
                  />

                  <p className={styles.textTitle}>{work.title}</p>
                  <p className={styles.textTitle}>{work.authors[0].name}</p>
                  <p className={styles.textTitle}>{work.first_publish_year}</p>
                </Link>
              ))}
            </div>
          </div>
          <button
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={() => handleCarousel("right", genre)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Carousel;
