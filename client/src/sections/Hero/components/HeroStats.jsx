import { useProfileContext } from "../../../contexts/ProfileContext";
import styles from "../styles/Hero.module.scss";

function HeroStats() {
  const { profile, loading } = useProfileContext();

  if (loading || !profile) return null;

  const stats = [
    {
      value: `${profile.projectsCompleted}+`,
      label: "Projects",
    },
    {
      value: `${profile.technologiesKnown}+`,
      label: "Technologies",
    },
    {
      value: `${profile.yearsOfExperience}+`,
      label: "Years",
    },
  ];

  return (
    <div className={styles.stats}>
      {stats.map((item) => (
        <div className={styles.statCard} key={item.label}>
          <h3>{item.value}</h3>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default HeroStats;