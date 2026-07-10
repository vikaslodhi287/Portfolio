import styles from "./styles/Hero.module.scss";

import HeroContent from "./components/HeroContent";
import HeroImage from "./components/HeroImage";
import HeroScrollIndicator from "./components/HeroScrollIndicator";

import useProfile from "../../hooks/useProfile";

function Hero() {
  const { profile, loading } = useProfile();

  if (loading || !profile) return null;

  return (
    <section
      id="home"
      className={styles.hero}
    >
      <div className={styles.backgroundGlow}></div>

      <div className={styles.container}>
        <HeroContent profile={profile} />

        <HeroImage profile={profile} />
      </div>

      <HeroScrollIndicator />
    </section>
  );
}

export default Hero;