import BookCard from "../components/BookCard";
import PageNav from "../components/PageNav";
import styles from "./BookCardPage.module.css";
import Footer from "./Footer";

function BookCardPage() {
  return (
    <section className={styles.bookCardPage}>
      <main>
        <PageNav />
        <BookCard />
      </main>
      <Footer />
    </section>
  );
}

export default BookCardPage;
