import {
  GitBranch,
  Linkedin,
  Twitter,
  Code2,
} from "lucide-react";

import { useProfileContext } from "../../../contexts/ProfileContext";
import styles from "../styles/Hero.module.scss";

function HeroSocial() {
  const { profile, loading } = useProfileContext();

  if (loading || !profile) return null;

  const social = profile.socialLinks || {};

  const items = [
    {
      icon: <GitBranch size={20} />,
      url: social.github,
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      url: social.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <Code2 size={20} />,
      url: social.leetcode,
      label: "LeetCode",
    },
    {
      icon: <Twitter size={20} />,
      url: social.twitter,
      label: "Twitter",
    },
  ];

  return (
    <div className={styles.social}>
      {items.map(
        (item) =>
          item.url && (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={item.label}
            >
              {item.icon}
            </a>
          )
      )}
    </div>
  );
}

export default HeroSocial;