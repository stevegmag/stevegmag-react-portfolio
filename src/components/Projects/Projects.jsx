import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import project_details from "../../data/project_details.json";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetails } from "./ProjectDetails";
import { getImageUrl } from "../../utils";


export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
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
      <button className={styles.viewAll}>Full Client | Project List</button>  
    </section>
  );
};
