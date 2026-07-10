import styles from "../styles/Projects.module.scss";

function ProjectsHeader() {
  return (
    <div className={styles.header}>
      <span className={styles.badge}>
        Featured Projects
      </span>

      <h2 className={styles.heading}>
        Things I've Built
      </h2>

      <p className={styles.description}>
        A collection of projects showcasing my experience in
        Full Stack MERN development, scalable backend systems,
        clean UI design, and problem-solving.
      </p>
    </div>
  );
}

export default ProjectsHeader;