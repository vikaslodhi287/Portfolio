import styles from "../styles/Hero.module.scss";

function HeroDescription({ profile }) {
  if (!profile) return null;

  return (
    <p className={`${styles.description} hero-description`}>
      {profile.bio}
    </p>
  );
}

export default HeroDescription;