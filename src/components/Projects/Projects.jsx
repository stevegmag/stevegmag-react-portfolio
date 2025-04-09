import React, { useState } from 'react';
import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";
import { ProjectCard } from "./ProjectCard";
import { ProjectListModal } from "./ProjectListModal";
import projects from "../../data/projects.json";

export const Projects = () => {
  const [isListModalOpen, setIsListModalOpen] = useState(false);

  return (
    <section className={styles.container} id="projects">
      <div className={styles.content}>  
        <img
          src={getImageUrl("steveg/SteveG-Perfect.webp")}
          alt="Steven Perfect Projects image"
          className={styles.projectsImage}
        />
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
          {projects.map((project, id) => {
            return <ProjectCard key={id} project={project} />;
          })}
        </div>
        <button 
          className={styles.viewAll}
          onClick={() => setIsListModalOpen(true)}
        >
          Full Client | Project List
        </button>
      </div>

      <ProjectListModal 
        isOpen={isListModalOpen}
        onClose={() => setIsListModalOpen(false)}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
