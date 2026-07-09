import { useEffect, useState } from "react";
import "./navbar.scss";

import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar ${
        isScrolled ? "navbar--scrolled" : ""
      }`}
    >
      <div className="container navbar__container">
        <Logo />

        <DesktopMenu />

        <div className="navbar__actions">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

export default Navbar;