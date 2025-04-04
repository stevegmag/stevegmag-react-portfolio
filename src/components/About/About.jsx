import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("steveg/SteveG-CPU.webp")}
          alt="Steve behind a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/front-end.png")} alt="Frontend icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/backend.png")} alt="Backend icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/team.png")} alt="Team icon" />
            <div className={styles.aboutItemText}>
              <h3>Team Lead / Manager</h3>
              <p>
                I have led diverse cross-functional teams across multiple projects spanning multiple locations 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/diagnostic.png")} alt="Testing icon" />
            <div className={styles.aboutItemText}>
              <h3>Quality Assurance, Performance, and Accessibility Evangelist and Tester</h3>
              <p>
                It's not right until it looks good, works, and is fast... for everyone! 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
