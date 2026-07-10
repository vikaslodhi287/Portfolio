import styles from "../styles/Certificates.module.scss";

function CertificatesHeader() {
  return (
    <div className={styles.header}>
      <span className={styles.badge}>
        Certifications
      </span>

      <h2 className={styles.heading}>
        Professional Certifications
      </h2>

      <p className={styles.description}>
        Certifications and credentials that demonstrate my
        technical expertise and continuous learning journey.
      </p>
    </div>
  );
}

export default CertificatesHeader;