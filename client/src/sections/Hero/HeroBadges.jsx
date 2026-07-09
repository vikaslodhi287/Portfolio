import {
  Atom,
  Server,
  Database,
  Boxes,
} from "lucide-react";

function HeroBadges() {
  return (
    <>
      <div className="tech-badge tech-react">
        <Atom size={22} />
        <span>React</span>
      </div>

      <div className="tech-badge tech-node">
        <Server size={22} />
        <span>Node.js</span>
      </div>

      <div className="tech-badge tech-mongo">
        <Database size={22} />
        <span>MongoDB</span>
      </div>

      <div className="tech-badge tech-express">
        <Boxes size={22} />
        <span>Express</span>
      </div>
    </>
  );
}

export default HeroBadges;