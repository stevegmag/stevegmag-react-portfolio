import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { ProjectDetailsModal } from "./ProjectDetailsModal";
import project_details from "../../data/project_details.json";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo }
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const detailedProject = project_details.find(p => p.title === title);

  return (
    <>
      <div className={styles.container}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`${title} logo`}
          className={styles.image}
          onClick={() => setIsModalOpen(true)}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            );
          })}
        </ul>
        <div className={styles.links}>
          <button onClick={() => setIsModalOpen(true)} className={styles.link}>
            Project Details
          </button>
        </div>
      </div>
      
      <ProjectDetailsModal 
        project={detailedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
