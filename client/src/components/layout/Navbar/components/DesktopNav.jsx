import styles from "../Navbar.module.scss";

import NavItem from "./NavItem";

import { useNavigationContext } from "../../../../contexts/NavigationContext";

import useActiveSection from "../hooks/useActiveSection";

function DesktopNav() {

  const activeSection = useActiveSection();

  const { navItems, loading, error } =
    useNavigationContext();

  if (loading || error) return null;

  return (
    <nav className={styles.desktopNav}>
      {navItems.map((item) => (
        <NavItem
          key={item.id}
          label={item.label}
          href={item.href}
          active={activeSection === item.slug}
        />
      ))}
    </nav>
  );
}

export default DesktopNav;