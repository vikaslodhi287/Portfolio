import { motion } from "framer-motion";

function HeroButtons({ profile }) {
  return (
    <motion.div
      className="hero__buttons"
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.3,
      }}
    >
      <a
        href="#projects"
        className=" btn btn-primary"
      >
        View Projects
      </a>

      <a
        href={profile.resumeUrl}
        target="_blank"
        rel="noreferrer"
        className="btn-glass"
      >
        Download Resume
      </a>
    </motion.div>
  );
}

export default HeroButtons;