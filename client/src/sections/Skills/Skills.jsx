import styles from "./styles/Skills.module.scss";

import SkillsHeader from "./components/SkillsHeader";
import SkillsGrid from "./components/SkillsGrid";

function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <SkillsHeader />

        <SkillsGrid />
      </div>
    </section>
  );
}

export default Skills;