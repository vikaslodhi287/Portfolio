import styles from "./styles/Hero.module.scss";
import HeroSocial from "./components/HeroSocial";
import HeroBadge from "./components/HeroBadge";
import HeroHeading from "./components/HeroHeading";
import HeroDescription from "./components/HeroDescription";
import HeroButtons from "./components/HeroButtons";
import HeroImage from "./components/HeroImage";
import HeroStats from "./components/HeroStats";
import HeroTechStack from "./components/HeroTechStack";
import HeroScrollIndicator from "./components/HeroScrollIndicator";

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.content}>
            <HeroBadge />
            <HeroHeading />
            <HeroDescription />
            <HeroButtons />
            <HeroSocial />
            <HeroStats />
            <HeroTechStack />
            <HeroScrollIndicator />
          </div>
        </div>

        <div className={styles.right}>
          <HeroImage />
        </div>
      </div>
    </section>
  );
}

export default Hero;