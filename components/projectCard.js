"use client";

import styles from "@/app/page.module.css";

export default function ProjectCard(props) {
  return (
    <div className={`${styles["glass"]} ${styles["card"]}`}>
      <div className={styles.cardTitle}>
        <div className={styles.cardItem}>
          <h3 class={styles.cardTitleBold}>{props.title}</h3>
          <div className={styles.cardButtonWrapper}>
            {props.liveSiteLink != "" && (
              <button
            //   onclick not working... same for below
                class={`${styles["buttonLink"]} ${styles["liveSite"]}`}
                onclick={()=> window.open(props.liveSiteLink, '_blank')}
                type="button"
                target="_blank"
              >
                Live Site
              </button>
            )}

            <button
              class={`${styles["buttonLink"]} ${styles["githubRepo"]}`}
              onclick={()=> window.open(props.githubRepoLink, '_blank')}
              type="button"
            >
              GitHub Repo
            </button>
          </div>
        </div>
        <h3 class={styles.cardDate}>{props.date}</h3>
      </div>
      <ul>
        {props.items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
