import styles from "../styles/Experience.module.scss";

import ExperienceCard from "./ExperienceCard";

import useExperience from "../../../hooks/useExperience";

function ExperienceTimeline() {
  const { experiences, loading } =
    useExperience();

  if (loading) return null;

  return (
    <div className={styles.timeline}>
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience._id}
          experience={experience}
        />
      ))}
    </div>
  );
}

export default ExperienceTimeline;