import styles from "../Navbar.module.scss";

function Logo() {
  return (
    <a
      href="/"
      className={styles.logo}
      aria-label="Vikas Lodhi Portfolio"
    >
      <span className={styles.logoBracket}>&lt;</span>

      <span className={styles.logoDesktop}>
        VikasLodhi
      </span>

      <span className={styles.logoTablet}>
        Vikas
      </span>

      <span className={styles.logoMobile}>
        VL
      </span>

      <span className={styles.logoSlash}>/</span>

      <span className={styles.logoBracket}>&gt;</span>
    </a>
  );
}

export default Logo;