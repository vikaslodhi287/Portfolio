import styles from "../styles/Certificates.module.scss";
import useCertificates from "../../../hooks/useCertificates";
import CertificateCard from "./CertificateCard";

function CertificatesGrid() {
  const { certificates, loading } = useCertificates();

  if (loading) return null;

  // Hide section content if there are no certificates
  if (!certificates || certificates.length === 0) {
    return null;
  }

  return (
    <div className={styles.grid}>
      {certificates.map((certificate) => (
        <CertificateCard
          key={certificate._id}
          certificate={certificate}
        />
      ))}
    </div>
  );
}

export default CertificatesGrid;