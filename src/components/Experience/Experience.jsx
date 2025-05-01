import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <img
        src={getImageUrl("steveg/SteveG-DollarBillsYall.webp")}
        alt="Steven Experience image"
        className={styles.experienceImage}
      />
      <h2 className={styles.title}>Skills & Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <div>
                {historyItem.imageSrc.map((daImageSrc, id) => {
                  return (
                    <><img
                      key={id}
                      src={getImageUrl(daImageSrc)}
                      alt={`${historyItem.organisation} Logo`}
                    />
                    <br /></>
                  );
                })}
                {/* <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                /> */}
                </div>
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}`}</h3>
                  <h4>{`${historyItem.organisation}`}</h4>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
