import styles from "../styles/Education.module.scss";

function EducationHeader() {
  return (
    <div className={styles.header}>
      <span className={styles.badge}>
        Education
      </span>

      <h2 className={styles.heading}>
        Academic Journey
      </h2>

      <p className={styles.description}>
        My educational background, academic achievements,
        and the strong foundation that supports my software
        development journey.
      </p>
    </div>
  );
}

export default EducationHeader;