import styles from "../styles/Hero.module.scss";
import { useProfileContext } from "../../../contexts/ProfileContext";

function HeroHeading() {
  const { profile, loading } = useProfileContext();

  if (loading || !profile) return null;

  return (
    <>
      <span className={styles.greeting}>
        Hi, I'm
      </span>

      <h1 className={styles.name}>
        {profile.fullName}
      </h1>

      <h2 className={styles.title}>
        {profile.title}
      </h2>
    </>
  );
}

export default HeroHeading;