import styles from "./styles/Certificates.module.scss";

import CertificatesHeader from "./components/CertificatesHeader";
import CertificatesGrid from "./components/CertificatesGrid";

import useCertificates from "../../hooks/useCertificates";

function Certificates() {
  const { certificates, loading } = useCertificates();

  if (loading) return null;

  if (!certificates || certificates.length === 0) {
    return null;
  }

  return (
    <section
      className={styles.certificates}
      id="certificates"
    >
      <div className={styles.container}>
        <CertificatesHeader />
        <CertificatesGrid />
      </div>
    </section>
  );
}

export default Certificates;