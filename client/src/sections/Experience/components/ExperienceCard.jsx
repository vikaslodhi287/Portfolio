import {
  Calendar,
  MapPin,
  Building2,
} from "lucide-react";

import styles from "../styles/Experience.module.scss";

function ExperienceCard({ experience }) {
  const start = new Date(
    experience.startDate
  ).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  const end = experience.isCurrent
    ? "Present"
    : new Date(
        experience.endDate
      ).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      });

  return (
    <article className={styles.experienceCard}>
      <div className={styles.timelineDot}></div>

      <div className={styles.card}>
        <div className={styles.top}>
          <h3>{experience.position}</h3>

          <span className={styles.duration}>
            <Calendar size={16} />
            {start} — {end}
          </span>
        </div>

        <div className={styles.company}>
          <Building2 size={17} />

          <span>{experience.company}</span>

          {experience.location && (
            <>
              <MapPin size={16} />

              <span>{experience.location}</span>
            </>
          )}
        </div>

        <ul className={styles.descriptionList}>
          {experience.description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className={styles.skills}>
          {experience.skillsUsed.map((skill) => (
            <span
              key={skill}
              className={styles.skill}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;