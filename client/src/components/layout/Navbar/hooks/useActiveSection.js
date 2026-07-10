import { useEffect, useState } from "react";

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = [...document.querySelectorAll("section[id]")];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
}