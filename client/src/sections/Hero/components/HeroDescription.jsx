import styles from "../styles/Hero.module.scss";
import { useProfileContext } from "../../../contexts/ProfileContext";

function HeroDescription() {
  const { profile, loading } = useProfileContext();

  if (loading || !profile) return null;

  return (
    <p className={styles.description}>
      {profile.bio}
    </p>
  );
}

export default HeroDescription;