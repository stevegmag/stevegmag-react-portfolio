import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container} id="steveg-top">
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Steven</h1>
        <p className={styles.description}>
        I'm a full-stack developer with years of experience building sites and applications using: <br />JavaScript (ES6+) | Modern JS Frameworks | Node.js | PHP | Python | Drupal | WordPress
        </p>
        <a href="mailto:stevegmag@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("steveg/SteveG-Hi.webp")}
        alt="Hero image of Steven"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};