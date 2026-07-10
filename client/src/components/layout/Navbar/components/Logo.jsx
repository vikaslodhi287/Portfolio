import styles from "../styles/Navbar.module.scss";

function Logo() {
  return (
    <a href="/" className={styles.logo}>
      <span className={styles.logoBracket}>&lt;</span>

      <span className={styles.logoDesktop}>
        <span className={styles.logoFirst}>Vikas</span>
        <span className={styles.logoLast}>Lodhi</span>
      </span>

      <span className={styles.logoTablet}>Vikas</span>

      <span className={styles.logoMobile}>VL</span>

      <span className={styles.logoSlash}>/</span>
      <span className={styles.logoBracket}>&gt;</span>
    </a>
  );
}

export default Logo;