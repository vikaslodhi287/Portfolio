import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
} from "lucide-react";

import styles from "../styles/Contact.module.scss";

function ContactInfo() {
  return (
    <div className={styles.infoCard}>
      <h3>Contact Information</h3>

      <div className={styles.infoItem}>
        <Mail size={20} />
        <span>vikaslodhi287@gmail.com</span>
      </div>

      <div className={styles.infoItem}>
        <Phone size={20} />
        <span>+91 XXXXX XXXXX</span>
      </div>

      <div className={styles.infoItem}>
        <MapPin size={20} />
        <span>India</span>
      </div>

      <div className={styles.infoItem}>
        <Briefcase size={20} />
        <span>Open to Work</span>
      </div>
      <div className={styles.socialLinks}>
  <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
    GitHub
  </a>

  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
    LinkedIn
  </a>

  <a href="https://leetcode.com/yourusername" target="_blank" rel="noreferrer">
    LeetCode
  </a>
</div>
    </div>
  );
}

export default ContactInfo;