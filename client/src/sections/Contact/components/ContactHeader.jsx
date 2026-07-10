import styles from "../styles/Contact.module.scss";

function ContactHeader() {
  return (
    <div className={styles.header}>
      <span className={styles.badge}>
        Contact
      </span>

      <h2 className={styles.heading}>
        Let's Work Together
      </h2>

      <p className={styles.description}>
        I'm currently available for internships,
        freelance work, and full-time opportunities.
        Feel free to reach out.
      </p>
    </div>
  );
}

export default ContactHeader;