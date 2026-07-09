import SkillCard from "./SkillCard";
import useSkills from "../../hooks/useSkills";

function SkillsGrid() {
  const { skills, loading } = useSkills();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="skills-grid">
      {skills.map((skill) => (
        <SkillCard
          key={skill._id}
          skill={{
            ...skill,
            level: skill.proficiency,
          }}
        />
      ))}
    </div>
  );
}

export default SkillsGrid;