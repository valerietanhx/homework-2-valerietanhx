import styles from "@/app/page.module.css";

export default function ExperienceCard(props) {
  return (
    <div className={`${styles["glass"]} ${styles["card"]}`}>
      <div className={styles.cardTitle}>
        <h3>
          <span className={styles.cardTitleBold}>{props.title}</span>,{" "}
          {props.company}
        </h3>
        <h3 className={styles.cardDate}>{props.date}</h3>
      </div>
      <ul>
        {props.items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
