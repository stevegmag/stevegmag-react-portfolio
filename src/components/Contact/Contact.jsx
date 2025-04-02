import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <img
        src={getImageUrl("steveg/SteveG-Whisper.webp")}
        alt="Steven contact image"
        className={styles.contactImage}
      />
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:stevegmag@gmail.com">stevegmag@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <a href="https://www.linkedin.com/stevengallagher" target="_blank">linkedin.com/stevengallagher</a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <a href="https://www.github.com/stevegmag" target="_blank">github.com/stevegmag</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
