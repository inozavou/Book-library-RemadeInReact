import styles from "./ContactPage.module.css";
import PageNav from "../components/PageNav";
import Footer from "./Footer";
import ContactForm from "../components/ContactForm";

function ContactPage() {
  return (
    <section className={styles.contactPage}>
      <main>
        <PageNav />
        <ContactForm />
      </main>
      <Footer />
    </section>
  );
}

export default ContactPage;
