import React from "react";
import { Modal } from "../Modal/Modal";
import { getImageUrl } from "../../utils";
import styles from "./ProjectDetailsModal.module.css";

export const ProjectDetailsModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title}>
      <div className={styles.projectDetail}>
        <div className={styles.meta}>
          <p className={styles.employer}>Employer: {project.employer}</p>
          <p className={styles.role}>Role: {project.role}</p>
        </div>
        
        <div className={styles.description}>
          <p>{project.description}</p>
        </div>

        <div className={styles.skills}>
          <h3>Technologies</h3>
          <ul>
            {project.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className={styles.activities}>
          <h3>Key Activities</h3>
          <ul>
            {project.activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>

        {project.screenshots && (
          <div className={styles.screenshots}>
            <h3>Screenshots</h3>
            <div className={styles.screenshotGrid}>
              {project.screenshots.map((screenshot, index) => (
                <img 
                  key={index}
                  src={getImageUrl(screenshot)}
                  alt={`${project.title} screenshot ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {project.url && (
          <div className={styles.links}>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
              Visit Site
            </a>
          </div>
        )}
      </div>
    </Modal>
  );
};
