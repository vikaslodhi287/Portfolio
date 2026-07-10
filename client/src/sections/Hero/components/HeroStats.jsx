import { BriefcaseBusiness, Code2, Trophy } from "lucide-react";
import { useProfileContext } from "../../../contexts/ProfileContext";
import styles from "../styles/Hero.module.scss";

function HeroStats() {
  const { profile, loading } = useProfileContext();

  if (loading || !profile) return null;

  const stats = [
    {
      icon: <BriefcaseBusiness size={24} />,
      value: `${profile.projectsCompleted ?? 0}+`,
      label: "Projects",
    },
    {
      icon: <Code2 size={24} />,
      value: `${profile.technologiesKnown ?? 0}+`,
      label: "Technologies",
    },
    {
      icon: <Trophy size={24} />,
      value: `${profile.yearsOfExperience ?? 0}+`,
      label: "Years",
    },
  ];

  return (
    <div className={`${styles.stats} hero-stats`}>
      {stats.map((item) => (
        <div className={styles.statCard} key={item.label}>
          <div className={styles.statIcon}>
            {item.icon}
          </div>

          <h3>{item.value}</h3>

          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default HeroStats;