import { useProfileContext } from "../../../contexts/ProfileContext";
import styles from "../styles/About.module.scss";

function AboutTechStack() {
  const { profile, loading } = useProfileContext();

  if (loading || !profile) return null;

  return (
    <>
      <div className={styles.techStack}>
        {profile.techStack?.map((tech) => (
          <span
            key={tech}
            className={styles.techChip}
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={profile.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.resumeButton}
      >
        Download Resume
      </a>
    </>
  );
}

export default AboutTechStack;