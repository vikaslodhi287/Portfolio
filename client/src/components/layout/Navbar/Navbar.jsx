import styles from "./Navbar.module.scss";

import Logo from "./components/Logo";
import DesktopNav from "./components/DesktopNav";
import ResumeButton from "./components/ResumeButton";
import ThemeToggle from "./components/ThemeToggle";
import MenuButton from "./components/MenuButton";

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.left}>
          <Logo />
        </div>

        <div className={styles.center}>
          <DesktopNav />
        </div>

        <div className={styles.right}>
          <ResumeButton />
          <ThemeToggle />
          <MenuButton />
        </div>
      </div>
    </header>
  );
}

export default Navbar;