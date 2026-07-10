import styles from "./styles/Footer.module.scss";

import FooterBrand from "./components/FooterBrand";
import FooterLinks from "./components/FooterLinks";
import FooterSocial from "./components/FooterSocial";
import FooterBottom from "./components/FooterBottom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <FooterBrand />

        <FooterLinks />

        <FooterSocial />

        <FooterBottom />

      </div>
    </footer>
  );
}

export default Footer;