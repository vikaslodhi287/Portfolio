import {
  FolderOpen,
  Layers3,
  Calendar,
  CheckCircle2,
} from "lucide-react";

import { useProfileContext } from "../../../contexts/ProfileContext";
import styles from "../styles/About.module.scss";

function AboutHighlights() {
  const { profile, loading } = useProfileContext();

  if (loading || !profile) return null;

  const cards = [
    {
      icon: <FolderOpen size={22} />,
      title: "Projects",
      value: `${profile.projectsCompleted}+`,
    },
    {
      icon: <Layers3 size={22} />,
      title: "Technologies",
      value: `${profile.technologiesKnown}+`,
    },
    {
      icon: <Calendar size={22} />,
      title: "Experience",
      value: `${profile.yearsOfExperience}+ Years`,
    },
    {
      icon: <CheckCircle2 size={22} />,
      title: "Available",
      value: profile.availability
        ? "Open to Work"
        : "Unavailable",
    },
  ];

  return (
    <div className={styles.highlights}>
      {cards.map((card) => (
        <div
          key={card.title}
          className={styles.highlightCard}
        >
          <div className={styles.highlightIcon}>
            {card.icon}
          </div>

          <div>
            <h4>{card.title}</h4>
            <p>{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutHighlights;