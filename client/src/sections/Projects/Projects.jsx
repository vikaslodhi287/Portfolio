import styles from "./styles/Projects.module.scss";

import ProjectsHeader from "./components/ProjectsHeader";
import ProjectsGrid from "./components/ProjectsGrid";

function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <ProjectsHeader />

        <ProjectsGrid />
      </div>
    </section>
  );
}

export default Projects;