import { useState } from "react";
import styles from "./Accordion.module.css";

function Accordion() {
  const [openIndex, setOpenIndex] = useState(-1);

  function toggleItem(index) {
    setOpenIndex(openIndex === index ? -1 : index);
  }

  return (
    <div className={styles.accordion}>
      <div
        className={
          openIndex === 1 ? `${styles.item} ${styles.open}` : `${styles.item}`
        }
        onClick={() => toggleItem(1)}
      >
        <p className={styles.number}>01</p>
        <p className={styles.text}>Who We Are?</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={styles.icon}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>

        <div className={styles.hiddenBox}>
          <p>
            We are a company dedicated to making knowledge accessible to
            everyone, anywhere. Founded with a passion for reading and
            technology, our online library offers a vast collection of eBooks,
            audiobooks, and research materials across various genres and
            languages. Our mission is to empower readers and learners by
            providing a seamless, user-friendly platform to explore, learn, and
            grow.
          </p>
        </div>
      </div>

      <div
        className={
          openIndex === 2 ? `${styles.item} ${styles.open}` : `${styles.item}`
        }
        onClick={() => toggleItem(2)}
      >
        <p className={styles.number}>02</p>
        <p className={styles.text}>What Do We Offer?</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={styles.icon}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>

        <div className={styles.hiddenBox}>
          <p>
            An extensive digital library and personalized reading experience.
            From timeless classics to the latest bestsellers, our collection
            spans fiction, non-fiction, academic resources, and more. Users can
            enjoy customizable reading settings, offline access, and curated
            recommendations tailored to their interests. We also provide tools
            for note-taking, highlighting, and syncing progress across devices,
            ensuring a smooth and engaging reading experience.
          </p>
        </div>
      </div>

      <div
        className={
          openIndex === 3 ? `${styles.item} ${styles.open}` : `${styles.item}`
        }
        onClick={() => toggleItem(3)}
      >
        <p className={styles.number}>03</p>
        <p className={styles.text}>Why Choose Us?</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={styles.icon}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>

        <div className={styles.hiddenBox}>
          <p>
            Unmatched convenience, variety, and a commitment to learning. We
            believe that reading should be a rewarding and flexible experience.
            With affordable subscription plans, ad-free browsing, and a growing
            library, we make sure there’s something for every reader. Our
            customer support is always ready to assist, and we continuously
            update our collection based on user feedback and trends. Choose us
            for a library that fits right in your pocket!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
