import { createContext, useState, useEffect, useContext } from "react";

const BooksContext = createContext();

function BooksProvider({ children }) {
  const genres = ["romance"];
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [genreInfo, setGenreInfo] = useState({});
  const [query, setQuery] = useState("");
  const [bookList, setBookList] = useState([]);

  function handleSetQuery(newQuery) {
    if (newQuery.trim()) {
      setQuery(newQuery);
    } else if (newQuery.trim() === "") {
      setBookList([]);
      setIsLoading(false);
    }
  }

  useEffect(function () {
    async function createGenreCarousel() {
      try {
        setIsLoading(true);
        const results = await Promise.all(
          genres.map(async (genre) => {
            const response = await fetch(
              `https://openlibrary.org/subjects/${genre}.json`
            );
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            return { [genre]: data };
          })
        );
        const genreData = Object.assign({}, ...results);
        setGenreInfo(genreData);
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      } finally {
        setIsLoading(false);
      }
    }
    createGenreCarousel();
  }, []);

  useEffect(
    function () {
      async function getBook() {
        if (!query.trim()) {
          setBookList([]);
          setIsLoading(false);
          return;
        }

        try {
          setIsLoading(true);
          const response = await fetch(
            `https://openlibrary.org/search.json?q=${query}`
          );
          const data = await response.json();
          const works = data.docs.slice(0, 4);
          setBookList(works);
        } catch (error) {
          console.error("Error fetching data", error);
          setBookList([]);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.trim()) {
        getBook();
      }
    },
    [query]
  );

  return (
    <BooksContext.Provider
      value={{
        genreInfo,
        selectedBook,
        bookList,
        isLoading,
        query,
        setQuery,
        setSelectedBook,
        setIsLoading,
        handleSetQuery,
        setBookList,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

function useBooks() {
  const context = useContext(BooksContext);
  if (context === undefined)
    throw new Error("Books context was used outside the BooksProvider");
  return context;
}

export { BooksProvider, useBooks };
