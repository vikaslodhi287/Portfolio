import {
  GraduationCap,
  Calendar,
  Award,
} from "lucide-react";

import styles from "../styles/Education.module.scss";

function EducationCard({ education }) {
  const start = new Date(
    education.startDate
  ).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  const end = education.isCurrent
    ? "Present"
    : new Date(
        education.endDate
      ).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      });

  return (
    <article className={styles.educationCard}>
      <div>
  <div className={styles.icon}>
    <GraduationCap size={30} />
  </div>

  <span className={styles.duration}>
    <Calendar size={16} />
    {start} — {end}
  </span>

  <h3>{education.degree}</h3>

  <h4>{education.fieldOfStudy}</h4>

  <p className={styles.institution}>
    {education.institution}
  </p>

  {education.grade && (
    <div className={styles.grade}>
      <Award size={16} />
      {education.grade}
    </div>
  )}
</div>

{education.description && (
  <p className={styles.description}>
    {education.description}
  </p>
)}
    </article>
  );
}

export default EducationCard;