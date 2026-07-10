import styles from "../styles/Hero.module.scss";

function HeroBadge() {
  return (
    <div className={`${styles.badge} hero-badge`}>
      <span className={styles.badgeRocket}>🚀</span>

      <span>Available for Opportunities</span>

      <span className={styles.badgeDot}></span>
    </div>
  );
}

export default HeroBadge;