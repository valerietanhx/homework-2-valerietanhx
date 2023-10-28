"use client";

import styles from "@/app/page.module.css";

export default function ProjectCard(props) {
  return (
    <div className={`${styles["glass"]} ${styles["card"]}`}>
      <div className={styles.cardTitle}>
        <div className={styles.cardItem}>
          <h3 className={styles.cardTitleBold}>{props.title}</h3>
          <div className={styles.cardButtonWrapper}>
            {props.liveSiteLink != "" && (
              <button
                className={`${styles["buttonLink"]} ${styles["liveSite"]}`}
                onClick={()=> window.open(props.liveSiteLink, '_blank')}
                type="button"
              >
                Live Site
              </button>
            )}

            <button
              className={`${styles["buttonLink"]} ${styles["githubRepo"]}`}
              onClick={()=> window.open(props.githubRepoLink, '_blank')}
              type="button"
            >
              GitHub Repo
            </button>
          </div>
        </div>
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
