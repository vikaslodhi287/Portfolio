import {
  Calendar,
  ExternalLink,
  Award,
} from "lucide-react";

import styles from "../styles/Certificates.module.scss";

function CertificateCard({ certificate }) {
  const issueDate = new Date(
    certificate.issueDate
  ).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <img
          src={certificate.image}
          alt={certificate.name}
        />
      </div>

      <div className={styles.content}>
        <h3>{certificate.name}</h3>

        <p className={styles.organization}>
          <Award size={16} />

          {certificate.issuingOrganization}
        </p>

        <p className={styles.date}>
          <Calendar size={16} />

          {issueDate}
        </p>

        {certificate.credentialUrl && (
          <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.button}
          >
            View Credential

            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </article>
  );
}

export default CertificateCard;