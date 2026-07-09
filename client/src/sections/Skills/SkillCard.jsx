import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiDocker,
  SiNextdotjs,
} from "react-icons/si";

const iconMap = {
  react: <FaReact />,
  "react/next.js": <SiNextdotjs />,
  nextjs: <SiNextdotjs />,
  next: <SiNextdotjs />,
  javascript: <FaJs />,
  typescript: <SiTypescript />,
  html: <FaHtml5 />,
  html5: <FaHtml5 />,
  css: <FaCss3Alt />,
  css3: <FaCss3Alt />,
  node: <FaNodeJs />,
  "node.js": <FaNodeJs />,
  express: <SiExpress />,
  mongodb: <SiMongodb />,
  "mongodb atlas": <SiMongodb />,
  docker: <SiDocker />,
  "docker / containers": <SiDocker />,
  java: <FaJava />,
  git: <FaGitAlt />,
};

function SkillCard({ skill }) {
  const skillClass = skill.name
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\s+/g, "-")
    .replace(/\//g, "-");

  const icon =
    iconMap[skill.icon?.toLowerCase()] ||
    iconMap[skill.name?.toLowerCase()] ||
    null;

  return (
    <div className={`skill-card ${skillClass}`}>
      <div className={`skill-card__icon ${skillClass}`}>
        {icon}
      </div>

      <div className="skill-card__content">
        <h3>{skill.name}</h3>

        <span className="skill-card__badge">
          {skill.category}
        </span>
      </div>
    </div>
  );
}

export default SkillCard;