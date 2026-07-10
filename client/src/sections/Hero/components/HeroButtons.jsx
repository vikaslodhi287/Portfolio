import {
  ArrowRight,
  Download,
} from "lucide-react";

import { useProfileContext } from "../../../contexts/ProfileContext";
import styles from "../styles/Hero.module.scss";

function HeroButtons() {
  const { profile, loading } = useProfileContext();

  if (loading || !profile) return null;

  return (
   <div className={`${styles.buttons} hero-buttons`}>

      <a
        href="#contact"
        className={`${styles.btn} ${styles.primaryBtn}`}
      >
        <span>
          {profile.cta?.hireMeText || "Hire Me"}
        </span>

        <ArrowRight size={20} />
      </a>

      <a
        href={profile.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.btn} ${styles.secondaryBtn}`}
      >
        <span>
          {profile.cta?.resumeText || "Download Resume"}
        </span>

        <Download size={18} />
      </a>

    </div>
  );
}

export default HeroButtons;