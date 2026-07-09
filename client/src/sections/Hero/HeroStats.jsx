import { motion } from "framer-motion";

const stats = [
  {
    value: "300+",
    label: "DSA Problems",
  },
  {
    value: "10+",
    label: "Projects",
  },
  {
    value: "2+",
    label: "Years Learning",
  },
];

function HeroStats() {
  return (
    <div className="hero__stats">
      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          className="glass stat-card"
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4 + index * 0.15,
            duration: 0.5,
          }}
        >
          <h3>{item.value}</h3>
          <p>{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default HeroStats;