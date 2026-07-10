import styles from "../styles/Experience.module.scss";

function ExperienceHeader() {
  return (
    <div className={styles.header}>
      <span className={styles.badge}>
        My Journey
      </span>

      <h2 className={styles.heading}>
        Professional Experience
      </h2>

      <p className={styles.description}>
        My experience building scalable web applications,
        solving real-world problems, and continuously
        improving my development skills.
      </p>
    </div>
  );
}

export default ExperienceHeader;