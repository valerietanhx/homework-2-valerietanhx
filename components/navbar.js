import styles from "@/app/page.module.css";

export default function Navbar() {
  return (
    <nav className={`${styles["glass"]} ${styles["nav"]}`}>
      <ul className={styles.navbar}>
        <li>
          <a href="#">
            Home
          </a>
        </li>
        <li>
          <a href="#about">
            About
          </a>
        </li>
        <li>
          <a href="#experience">
            Experience
          </a>
        </li>
        <li>
          <a href="#projects">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}
