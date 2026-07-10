import styles from "../styles/Footer.module.scss";

function FooterBottom() {
  return (
    <div className={styles.bottom}>
  <p>
    © {new Date().getFullYear()} Vikas Lodhi.
    Crafted with passion.
  </p>

  <span>
    React • Node.js • Express • MongoDB
  </span>
</div>
  );
}

export default FooterBottom;