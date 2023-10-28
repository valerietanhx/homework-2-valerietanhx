"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  const images = [
    "cat.jpg",
    "mountain.jpg",
    "books.jpg",
    "museum.jpg",
    "journal.jpg",
  ];

  const [imageIndex, setImageIndex] = useState(0);

  const image = images[imageIndex];

  const changeImage = () => {
    let nextIndex = imageIndex + 1;
    if (nextIndex >= images.length) {
      nextIndex = 0;
    }
    setImageIndex(nextIndex);
  };

  return (
    <section className={styles.about} id="about">
      <div>
        <img
          src={image}
          alt=""
          className={styles.aboutImage}
          onClick={changeImage}
        />
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
        <div className={styles.aboutIcons}>
          <a href="https://www.linkedin.com/in/valerietanhx/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/valerietanhx">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:valerietanhx@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </section>
  );
}
