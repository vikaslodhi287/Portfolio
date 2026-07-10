import {
  Atom,
  Database,
  Server,
  Code2,
  GitBranch,
  Cpu,
} from "lucide-react";

import { useProfileContext } from "../../../contexts/ProfileContext";
import styles from "../styles/Hero.module.scss";

const iconMap = {
  React: <Atom size={16} />,
  "Node.js": <Server size={16} />,
  Express: <Server size={16} />,
  MongoDB: <Database size={16} />,
  JavaScript: <Code2 size={16} />,
  Git: <GitBranch size={16} />,
};

function HeroTechStack() {
  const { profile, loading } = useProfileContext();

  if (loading || !profile) return null;

  return (
    <div className={`${styles.techStack} hero-tech`}>
      {profile.techStack?.map((tech) => (
        <div
          key={tech}
          className={styles.techChip}
        >
          {iconMap[tech] || <Cpu size={16} />}

          <span>{tech}</span>
        </div>
      ))}
    </div>
  );
}

export default HeroTechStack;