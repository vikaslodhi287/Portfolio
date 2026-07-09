import "./skills.scss";
import SkillsGrid from "./SkillsGrid";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container skills__container">

        <div className="skills__header">

          <span className="skills__tag">
            Technical Skills
          </span>

          <h2>My Tech Stack</h2>

          <p>
            Technologies I use to build modern,
            scalable and high-performance applications.
          </p>

        </div>

        <SkillsGrid />

      </div>
    </section>
  );
}

export default Skills;