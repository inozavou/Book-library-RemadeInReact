import PageNav from "../components/PageNav";
import Carousel from "../components/Carousel";
import Footer from "./Footer";
import styles from "./Categories.module.css";

function Categories() {
  return (
    <section className={styles.categories}>
      <main>
        <PageNav />
        <Carousel />
      </main>
      <Footer />
    </section>
  );
}

export default Categories;
