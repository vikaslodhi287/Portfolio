import { motion } from "framer-motion";
import "./hero.scss";
import HeroGlow from "./HeroGlow";

import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import useProfile from "../../hooks/useProfile";

function Hero() {
  const { profile, loading } = useProfile();

  if (loading) {
    return (
      <section className="hero">
        <div className="container">
          <h2>Loading...</h2>
        </div>
      </section>
    );
  }

  return (
    
    <section className="hero">
        <HeroGlow />
      <div className="container hero__container">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <HeroLeft profile={profile} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <HeroRight profile={profile} />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;