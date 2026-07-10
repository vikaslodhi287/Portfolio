import { useProfileContext } from "../../../contexts/ProfileContext";
import styles from "../styles/About.module.scss";

function AboutContent() {
  const { profile, loading } = useProfileContext();

  if (loading || !profile) return null;

  return (
    <div className={styles.content}>
      <span className={styles.badge}>
        About Me
      </span>

      <h2 className={styles.heading}>
        {profile.title}
      </h2>

      <p className={styles.description}>
        {profile.bio}
      </p>
    </div>
  );
}

export default AboutContent;