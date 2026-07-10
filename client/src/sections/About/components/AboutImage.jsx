import {
  MapPin,
  Mail,
  Briefcase,
  CircleCheckBig,
} from "lucide-react";

import { useProfileContext } from "../../../contexts/ProfileContext";
import styles from "../styles/About.module.scss";

function AboutImage() {
  const { profile, loading } = useProfileContext();

  if (loading || !profile) return null;

  return (
    <div className={styles.imageWrapper}>
      <div className={styles.imageCard}>
        <img
          src={profile.avatar}
          alt={profile.fullName}
          className={styles.image}
        />
      </div>

      <div className={styles.infoCard}>
        <div className={styles.infoItem}>
          <MapPin size={18} />
          <span>{profile.location}</span>
        </div>

        <div className={styles.infoItem}>
          <Mail size={18} />
          <span>{profile.email}</span>
        </div>

        <div className={styles.infoItem}>
          <Briefcase size={18} />
          <span>{profile.title}</span>
        </div>

        <div className={styles.infoItem}>
          <CircleCheckBig size={18} />
          <span>
            {profile.availability
              ? "Available for Opportunities"
              : "Currently Unavailable"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutImage;