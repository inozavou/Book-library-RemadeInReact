import PageNav from "../components/PageNav";
import Accordion from "../components/Accordion";
import Footer from "./Footer";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about}>
      <main>
        <PageNav />
        <Accordion />
      </main>
      <Footer />
    </section>
  );
}

export default About;
