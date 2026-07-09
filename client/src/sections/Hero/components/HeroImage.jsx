import { useProfileContext } from "../../../contexts/ProfileContext";
import styles from "../styles/Hero.module.scss";

function HeroImage() {
  const { profile, loading } = useProfileContext();

  if (loading) {
    return (
      <div className={styles.imageWrapper}>
        <div className={styles.imagePlaceholder}>
          Loading...
        </div>
      </div>
    );
  }

  if (!profile) return null;

  return (
    <div className={styles.imageWrapper}>
      <div className={styles.imageCircle}>
        <img
          src={profile.avatar}
          alt={profile.fullName}
          className={styles.avatar}
        />
      </div>
    </div>
  );
}

export default HeroImage;