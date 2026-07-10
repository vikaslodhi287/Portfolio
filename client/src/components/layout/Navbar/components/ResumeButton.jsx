import styles from "../styles/Navbar.module.scss";

function ResumeButton() {
  return (
    <a
      href="/resume.pdf"
      className={styles.resumeButton}
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </a>
  );
}

export default ResumeButton;