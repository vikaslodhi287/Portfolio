import styles from "../styles/Skills.module.scss";

function SkillsHeader() {
  return (
    <div className={styles.header}>
      <span className={styles.badge}>
        My Skills
      </span>

      <h2 className={styles.heading}>
        Technologies I Use
      </h2>

      <p className={styles.description}>
        I build modern, scalable and high-performance web applications
        using the latest technologies across the full stack.
      </p>
    </div>
  );
}

export default SkillsHeader;