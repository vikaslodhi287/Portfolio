import iconMapper from "../../../utils/iconMapper";
import styles from "../styles/Skills.module.scss";

function SkillCard({ skill }) {
  const Icon = iconMapper[skill.icon];

  const level =
    skill.proficiency >= 90
      ? "Advanced"
      : skill.proficiency >= 75
      ? "Intermediate"
      : "Beginner";

  return (
    <div className={styles.skillCard}>
      <div className={styles.skillIcon}>
        {Icon && <Icon size={42} />}
      </div>

      <h3>{skill.name}</h3>

      <span>{level}</span>
    </div>
  );
}

export default SkillCard;