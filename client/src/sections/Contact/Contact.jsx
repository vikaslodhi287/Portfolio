import styles from "./styles/Contact.module.scss";

import ContactHeader from "./components/ContactHeader";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";

function Contact() {
  return (
    <section
      className={styles.contact}
      id="contact"
    >
      <div className={styles.container}>
        <ContactHeader />

        <div className={styles.wrapper}>
          <ContactInfo />

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;