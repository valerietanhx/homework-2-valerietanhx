import styles from "@/app/page.module.css";

export default function Intro() {
  return (
    <section className={styles.intro}>
      <h1>Hi! I'm Valerie.</h1>
      <h1>
        <span>I'm a </span>
        {/* need to add js */}
        <span className={styles.changingTitle}>data engineer.</span>
      </h1>
    </section>
  );
}
