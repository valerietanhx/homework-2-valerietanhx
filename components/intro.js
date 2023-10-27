"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";

const titles = [
  "data engineer",
  "information designer",
  "analytics engineer",
  "software engineer",
  "data scientist",
  "web developer",
  "data analyst",
  "data journalist",
];

const vowels = ["a", "e", "i", "o", "u"];

export default function Intro() {

  const [titleIndex, setTitleIndex] = useState(0);

  const title = titles[titleIndex];

  const changeTitle = () => {
    let nextIndex = titleIndex + 1;
    if (nextIndex >= titles.length) {
      nextIndex = 0;
    }
    setTitleIndex(nextIndex);
  };

  const changingIntro = vowels.some((vowel) =>
    title.toLowerCase().startsWith(vowel)
  )
    ? "I'm an "
    : "I'm a ";

  return (
    <section className={styles.intro}>
      <h1>Hi! I'm Valerie.</h1>
      <h1>
        <span className={styles.changingIntro}>{changingIntro} </span>
        <span className={styles.changingTitle} onClick={changeTitle}>{title}.</span>
      </h1>
    </section>
  );
}
