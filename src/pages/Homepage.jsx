import styles from "./Homepage.module.css";

import PageNav from "../components/PageNav";
import SearchResultList from "../components/SearchResultList";
import Footer from "./Footer";

function Homepage() {
  return (
    <section className={styles.homepage}>
      <main>
        <PageNav />
        <SearchResultList />
      </main>
      <Footer />
    </section>
  );
}

export default Homepage;
