import {
  Github,
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
      icon: <Github size={21} />,
      url: social.github,
      label: "GitHub",
    },
    {
      icon: <Linkedin size={21} />,
      url: social.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <Code2 size={21} />,
      url: social.leetcode,
      label: "LeetCode",
    },
    {
      icon: <Twitter size={21} />,
      url: social.twitter,
      label: "Twitter",
    },
  ];

  return (
    <div className={`${styles.social} hero-social`}>

      {items.map(
        (item) =>
          item.url && (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              {item.icon}
            </a>
          )
      )}

    </div>
  );
}

export default HeroSocial;