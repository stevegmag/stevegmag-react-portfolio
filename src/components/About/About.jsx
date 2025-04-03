import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <div className={styles.aboutImageWrapper}>
          <img
            src={getImageUrl("steveg/SteveG-CPU.webp")}
            alt="Steve behind a laptop"
            className={styles.aboutImage}
          />
        </div>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/front-end.png")} alt="Frontend icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I'm a seasoned frontend developer with over 15 years of experience building responsive, accessible, and high-performance web solutions. My expertise spans modern JavaScript frameworks (React, Vue, TypeScript) and traditional technologies, with a focus on creating component-based architectures that scale.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/backend.png")} alt="Backend icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I have extensive experience architecting and developing robust back-end systems and APIs that power complex web applications. My technical toolkit includes PHP, Python, Node.js, and various database technologies, allowing me to create scalable solutions from the ground up. I've implemented custom CMS extensions, third-party integrations, and RESTful services that prioritize security, performance, and maintainability across diverse platforms including Drupal, WordPress, and headless CMS environments.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/team.png")} alt="Team icon" />
            <div className={styles.aboutItemText}>
              <h3>Team Lead / Manager</h3>
              <p>
              I have successfully led diverse cross-functional teams across multiple projects spanning global locations. With experience managing developers in Agile environments, I excel at resource planning, sprint management, and fostering collaboration between design, development, and QA teams. My leadership approach emphasizes mentoring junior developers, establishing clear coding standards, and creating efficient workflows that consistently deliver projects on time and within scope. I've guided remote teams through the delivery of over 65 successful projects throughout my career.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/diagnostic.png")} alt="Testing icon" />
            <div className={styles.aboutItemText}>
              <h3>Quality Assurance, Performance, and <br />Accessibility Evangelist and Tester</h3>
              <p>
              I'm passionate about creating web experiences that work flawlessly... for everyone. As an accessibility advocate, I've championed WCAG/ADA compliance throughout my career, ensuring digital inclusion is built into every project from the start. My expertise includes implementing conversion rate optimization strategies, conducting thorough cross-browser/cross-device testing, and optimizing site performance metrics. I believe quality isn't negotiable—it's about creating solutions that are visually appealing, functionally robust, lightning-fast, and truly accessible to all users regardless of ability.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
