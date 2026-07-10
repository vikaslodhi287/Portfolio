import styles from "./styles/About.module.scss";

import AboutContent from "./components/AboutContent";
import AboutImage from "./components/AboutImage";
import AboutHighlights from "./components/AboutHighlights";
import AboutTechStack from "./components/AboutTechStack";

function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.left}>
          <AboutImage />
        </div>

        <div className={styles.right}>
          <AboutContent />

          <AboutHighlights />
          <AboutTechStack />
        </div>
      </div>
    </section>
  );
}

export default About;