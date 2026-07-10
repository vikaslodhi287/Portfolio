import styles from "../styles/Hero.module.scss";

import HeroBadge from "./HeroBadge";
import HeroHeading from "./HeroHeading";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";
import HeroSocial from "./HeroSocial";
import HeroStats from "./HeroStats";
import HeroTechStack from "./HeroTechStack";

function HeroContent({ profile }) {
  if (!profile) return null;

  return (
    <div className={styles.content}>
      <HeroBadge profile={profile} />

      <HeroHeading profile={profile} />

      <HeroDescription profile={profile} />

      <HeroButtons profile={profile} />

      <HeroSocial profile={profile} />

      <HeroStats profile={profile} />

      <HeroTechStack profile={profile} />
    </div>
  );
}

export default HeroContent;