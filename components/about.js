import styles from "@/app/page.module.css";
import Link from "next/link";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div>
        {/* need to add js */}
        <img src="/cat.jpg" alt="" className={styles.aboutImage} />
      </div>
      <div className={styles.aboutText}>
        <h2>About</h2>
        <p>𖡼𓋼.𖤣𖥧𖡼.𖤣𖥧𓍊</p>
        <p>
          Hi! I'm Valerie, a Year 3 Data Science & Analytics major at the
          National University of Singapore, with a second major in Linguistics
          and minor in Computer Science.
        </p>
        <p>
          I'm broadly interested in cultivating curiosity, designing better ways
          to organise information, and making the web a cosier place to live and
          build communities in. To these ends, I've been honing my skills in
          data analytics in hopes of being able to deliver clear, insightful
          stories, while also exploring information science and picking up web
          development.
        </p>
        {/* not showing up; need to figure out fontawesome. commenting out for now */}
        {/* <a href="https://www.linkedin.com/in/valerietanhx/">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/valerietanhx">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="mailto:valerietanhx@gmail.com">
          <i className="fa-solid fa-envelope"></i>
        </a> */}
      </div>
    </section>
  );
}
