import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
    console.log(project.thumbnail);
  return (
    <article className="project-card">

      <div className="project-card__image">

        <img
          src={project.thumbnail}
          alt={project.title}
        />

        {project.featured && (
          <span className="project-card__featured">
            ⭐ Featured Project
          </span>
        )}

      </div>

      <div className="project-card__content">

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-card__tech">

          {project.technologies.map((tech) => (
            <span key={tech}>
              {tech}
            </span>
          ))}

        </div>

        <div className="project-card__buttons">

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={18} />
              GitHub
            </a>
          )}

        </div>

      </div>

    </article>
  );
}

export default ProjectCard;