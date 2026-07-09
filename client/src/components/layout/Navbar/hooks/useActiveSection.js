import { useEffect, useState } from "react";

export default function useActiveSection() {

  const [active, setActive] = useState("about");

  useEffect(() => {

    const sections =
      document.querySelectorAll("section[id]");

    function onScroll() {

      let current = "about";

      sections.forEach((section) => {

        const top = section.offsetTop - 150;

        if (window.scrollY >= top) {
          current = section.id;
        }

      });

      setActive(current);

    }

    window.addEventListener("scroll", onScroll);

    return () =>
      window.removeEventListener("scroll", onScroll);

  }, []);

  return active;

}