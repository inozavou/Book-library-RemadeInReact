import { useParams } from "react-router-dom";
import { useBooks } from "../contexts.jsx/BooksContext";
import Spinner from "./Spinner";
import { useEffect, useState } from "react";
import styles from "./BookCard.module.css";
import Button from "./Button";
import BackButton from "./BackButton";

function BookCard() {
  const { key } = useParams();
  const { isLoading, setIsLoading } = useBooks();
  const [bookDetails, setBookDetails] = useState([]);

  const coverId = bookDetails.covers ? bookDetails.covers[0] : null;

  useEffect(
    function () {
      async function getBookDetails() {
        try {
          setIsLoading(true);
          const response = await fetch(
            `https://openlibrary.org/works/${key}.json`
          );
          const work = await response.json();
          setBookDetails(work);
        } catch (error) {
          console.error("Error fetching data:", error);
          return null;
        } finally {
          setIsLoading(false);
        }
      }
      if (key) {
        getBookDetails();
      }
    },
    [key, setIsLoading]
  );

  // useEffect(
  //   function () {
  //     async function getBookDetails() {
  //       try {
  //         setIsLoading(true);
  //         const response = await fetch(
  //           `https://openlibrary.org/works/${key}.json`
  //         );
  //         const work = await response.json();
  //         setBookDetails(work);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //         return null;
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     }
  //     getBookDetails();
  //   },
  //   [key]
  // );

  if (isLoading) return <Spinner />;

  if (!bookDetails) return <div>No details available</div>;

  return (
    <div className={styles.detailsSection}>
      <div className={styles.bookCard}>
        <BackButton type="back" children="back"></BackButton>
        <div className={styles.detailBookThumbnailSection}>
          {isLoading ? (
            <Spinner />
          ) : (
            <img
              className={styles.detailBookCover}
              src={`https://covers.openlibrary.org/b/id/${coverId}-L.jpg`}
              alt={key}
            />
          )}
          <Button className={styles.readBtn} type="primary" children="Read" />

          <Button className={styles.rateBtn} type="primary" children="Rate" />
        </div>

        <div className={styles.bookDetails}>
          <h1 className={styles.title}>{bookDetails.title}</h1>
          <p className={styles.date}>{bookDetails.first_publish_date}</p>
          <p className={styles.bookDescription}>
            {bookDetails?.description?.value ||
              bookDetails.description ||
              "No description available"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
