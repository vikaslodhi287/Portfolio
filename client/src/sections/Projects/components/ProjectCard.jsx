import styles from "../styles/Projects.module.scss";

import {
  Github,
  ExternalLink,
  Sparkles,
} from "lucide-react";

function ProjectCard({ project }) {
  return (
    <article className={styles.projectCard}>
      <div className={styles.projectImage}>
        <img
          src={project.thumbnail}
          alt={project.title}
        />
      </div>

      <div className={styles.projectContent}>
        {project.featured && (
          <span className={styles.featuredBadge}>
            <Sparkles size={14} />
            Featured Project
          </span>
        )}

        <h3>{project.title}</h3>

        <p className={styles.description}>
          {project.description}
        </p>

        <div className={styles.techStack}>
          {project.technologies?.map((tech) => (
            <span
              key={tech}
              className={styles.techChip}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.actions}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;