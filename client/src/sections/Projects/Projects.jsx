import "./projects.scss";
import ProjectCard from "./ProjectCard";
import useProjects from "../../hooks/useProjects";

function Projects() {
  const { projects, loading, error } = useProjects();

  return (
    <section className="projects" id="projects">
      <div className="container projects__container">

        <div className="projects__header">
          <span className="projects__tag">
            Featured Work
          </span>

          <h2>My Projects</h2>

          <p>
            Some of my favorite projects built using modern
            web technologies.
          </p>
        </div>

        {loading && (
          <h3>Loading Projects...</h3>
        )}

        {error && (
          <h3>{error}</h3>
        )}

        {!loading &&
          !error &&
          projects.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
            />
          ))}

      </div>
    </section>
  );
}

export default Projects;