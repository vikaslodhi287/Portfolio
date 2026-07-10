import useProjects from "../../../hooks/useProjects";
import ProjectCard from "./ProjectCard";
import styles from "../styles/Projects.module.scss";

function ProjectsGrid() {
  const { projects, loading } = useProjects();

  if (loading) return null;

  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <ProjectCard
          key={project._id}
          project={project}
        />
      ))}
    </div>
  );
}

export default ProjectsGrid;