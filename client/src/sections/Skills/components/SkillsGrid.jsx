import SkillCard from "./SkillCard";
import useSkills from "../../../hooks/useSkills";
import styles from "../styles/Skills.module.scss";

function SkillsGrid() {
  const { skills, loading } = useSkills();

  if (loading) return null;

  return (
    <div className={styles.grid}>
      {skills.map((skill) => (
        <SkillCard
          key={skill._id}
          skill={skill}
        />
      ))}
    </div>
  );
}

export default SkillsGrid;