import styles from "../styles/Hero.module.scss";

function HeroImage({ profile }) {
  if (!profile) return null;

  return (
    <div className={`${styles.imageWrapper} hero-image`}>
      <div className={styles.orbitRing}></div>
      <div className={styles.orbitRing2}></div>

      <span className={styles.dot1}></span>
      <span className={styles.dot2}></span>
      <span className={styles.dot3}></span>

      <div className={styles.imageCircle}>
        <img
          src={profile.avatar}
          alt={profile.fullName}
          className={styles.image}
        />
      </div>
    </div>
  );
}

export default HeroImage;