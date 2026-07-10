import styles from "../styles/Navbar.module.scss";

function NavItem({ item, active }) {
  return (
    <a
      href={item.href}
      className={`${styles.navItem} ${
        active ? styles.active : ""
      }`}
    >
      {item.label}
    </a>
  );
}

export default NavItem;