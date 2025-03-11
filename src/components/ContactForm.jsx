import styles from "./ContactForm.module.css";
import Button from "./Button";

function ContactForm() {
  return (
    <div className={styles.contactFormContainer}>
      <div className={styles.contactImage}>
        <h1>Contact Us!</h1>
      </div>

      <div className={styles.contactForm}>
        <input placeholder="Full name"></input>
        <input placeholder="Email"></input>
        <textarea placeholder="Message"></textarea>
        <Button type="primary">Send</Button>
      </div>
    </div>
  );
}

export default ContactForm;
