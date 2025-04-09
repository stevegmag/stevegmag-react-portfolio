import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';
import styles from './Projects.module.css';
import projectList from '../../data/project_list.json';

export const ProjectListModal = ({ isOpen, onClose }) => {
  // Initialize with an empty object (all accordions closed)
  const [openEmployers, setOpenEmployers] = useState({});

  const toggleEmployer = (employerName) => {
    setOpenEmployers(prev => ({
      ...prev,
      [employerName]: !prev[employerName]
    }));
  };

  const renderProject = (project) => {
    if (typeof project === 'string') {
      return <li className={styles.projectItem}>{project}</li>;
    }

    return (
      <li className={`${styles.projectItem} ${project.subProjects ? styles.hasSubProjects : ''}`}>
        {project.name}
        {project.note && <span className={styles.projectNote}> {project.note}</span>}
        {project.subProjects && (
          <ul className={styles.subProjectsList}>
            {project.subProjects.map((subProject, subIndex) => (
              <li key={subIndex} className={styles.subProjectItem}>
                {subProject}
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Full Client & Project List"
    >
      <div className={styles.projectList}>
        {projectList.employers.map((employer) => (
          <div key={employer.name} className={styles.employerSection}>
            <div 
              className={styles.employerHeader}
              onClick={() => toggleEmployer(employer.name)}
            >
              <h3>{employer.name}</h3>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span className={styles.employerPeriod}>{employer.period}</span>
                <span className={`${styles.arrow} ${openEmployers[employer.name] ? styles.open : ''}`}>
                  ▼
                </span>
              </div>
            </div>
            
            <ul className={`${styles.projectsList} ${openEmployers[employer.name] ? styles.open : ''}`}>
              <div className={styles.projectsListInner}>
                {employer.projects.map((project, index) => (
                  <React.Fragment key={index}>
                    {renderProject(project)}
                  </React.Fragment>
                ))}
              </div>
            </ul>
          </div>
        ))}
      </div>
    </Modal>
  );
};
