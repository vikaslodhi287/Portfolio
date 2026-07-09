import { useProfileContext } from "../../../contexts/ProfileContext";
import styles from "../styles/Hero.module.scss";

function HeroTechStack() {
  const { profile, loading } = useProfileContext();

  if (loading || !profile) return null;

  return (
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
  );
}

export default HeroTechStack;