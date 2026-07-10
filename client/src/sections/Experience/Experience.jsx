import styles from "./styles/Experience.module.scss";

import ExperienceHeader from "./components/ExperienceHeader";
import ExperienceTimeline from "./components/ExperienceTimeline";

function Experience() {
  return (
    <section className={styles.experience} id="experience">
      <div className={styles.container}>
        <ExperienceHeader />

        <ExperienceTimeline />
      </div>
    </section>
  );
}

export default Experience;