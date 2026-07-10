import styles from "../styles/Hero.module.scss";

function HeroScrollIndicator() {
  return (
    <div className={styles.scrollIndicator}>
      <div className={styles.scrollMouse}></div>

      <span>Scroll Down</span>
    </div>
  );
}

export default HeroScrollIndicator;