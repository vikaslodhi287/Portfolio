import styles from "../styles/Hero.module.scss";

function HeroHeading({ profile }) {
  if (!profile) return null;

  return (
    <>
      <p className={`${styles.greeting} hero-greeting`}>
        Hi, I'm
      </p>

      <h1 className={`${styles.name} hero-title`}>
        <span className={styles.gradientText}>
          {profile.fullName}
        </span>
      </h1>

      <h2 className={`${styles.title} hero-subtitle`}>
        {profile.title}
      </h2>
    </>
  );
}

export default HeroHeading;