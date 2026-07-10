import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

import styles from "../styles/Footer.module.scss";

function FooterSocial() {
  return (
    <div className={styles.social}>

      <a href="#">
        <Github size={24}/>
      </a>

      <a href="#">
        <Linkedin size={24}/>
      </a>

      <a href="#">
        <Mail size={24}/>
      </a>

    </div>
  );
}

export default FooterSocial;