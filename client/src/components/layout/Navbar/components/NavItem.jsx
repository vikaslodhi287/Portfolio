import styles from "../Navbar.module.scss";
import { scrollToSection } from "../utils/scrollToSection";

function NavItem({
  label,
  href,
  active = false,
}) {

  function handleClick(e) {
    e.preventDefault();

    scrollToSection(href);
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${styles.navLink} ${
        active ? styles.active : ""
      }`}
    >
      {label}
    </a>
  );
}

export default NavItem;