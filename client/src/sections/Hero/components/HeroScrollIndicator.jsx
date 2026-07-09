import { ChevronDown } from "lucide-react";
import styles from "../styles/Hero.module.scss";

function HeroScrollIndicator() {
  const scrollToAbout = () => {
    const section = document.getElementById("about");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={styles.scrollIndicator}
      onClick={scrollToAbout}
    >
      <span>Scroll</span>

      <ChevronDown size={22} />
    </div>
  );
}

export default HeroScrollIndicator;