import { useState } from "react";

import styles from "./styles/Navbar.module.scss";

import Logo from "./components/Logo";
import DesktopNav from "./components/DesktopNav";
import ResumeButton from "./components/ResumeButton";
import ThemeToggle from "./components/ThemeToggle";
import MenuButton from "./components/MenuButton";
import MobileNav from "./components/MobileNav";

import { NavigationProvider } from "./context/NavigationContext";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <NavigationProvider>
      <header className={styles.header}>
        <div className={styles.navbar}>
          {/* Left */}
          <div className={styles.left}>
            <Logo />
          </div>

          {/* Center */}
          <div className={styles.center}>
            <DesktopNav />
          </div>

          {/* Right */}
          <div className={styles.right}>
            <ResumeButton />
            <ThemeToggle />

            <MenuButton
              isOpen={isMenuOpen}
              toggleMenu={toggleMenu}
            />
          </div>
        </div>

        {/* Mobile Drawer */}
        <MobileNav
          isOpen={isMenuOpen}
          toggleMenu={toggleMenu}
        />
      </header>
    </NavigationProvider>
  );
}

export default Navbar;