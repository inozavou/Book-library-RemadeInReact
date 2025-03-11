import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}>SPINNER</div>
    </div>
  );
}

export default Spinner;
