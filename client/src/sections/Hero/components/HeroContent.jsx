import styles from "../styles/Hero.module.scss";

import HeroBadge from "./HeroBadge";
import HeroHeading from "./HeroHeading";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";

import { useProfileContext } from "../../../contexts/ProfileContext";

function HeroContent() {
  const { profile, loading, error } = useProfileContext();

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;
  if (!profile) return null;

  return (
    <div className={styles.content}>
      <HeroBadge />

      <HeroHeading />

      <HeroDescription />

      <HeroButtons />
    </div>
  );
}

export default HeroContent;