import styles from "../styles/Footer.module.scss";

function FooterBrand() {
  return (
    <div className={styles.brand}>

    <h2 className={styles.logo}>
        &lt;<span>Vikas</span>
        <strong>Lodhi</strong>/&gt;
    </h2>

      <p>
        Building scalable MERN applications with clean architecture,
        exceptional UI/UX, and modern web technologies.
      </p>

    </div>
  );
}

export default FooterBrand;