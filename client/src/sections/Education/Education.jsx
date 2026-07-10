import styles from "./styles/Education.module.scss";

import EducationHeader from "./components/EducationHeader";
import EducationGrid from "./components/EducationGrid";

function Education() {
  return (
    <section className={styles.education} id="education">
      <div className={styles.container}>
        <EducationHeader />

        <EducationGrid />
      </div>
    </section>
  );
}

export default Education;