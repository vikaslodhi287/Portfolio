import styles from "../styles/Navbar.module.scss";
import NavItem from "./NavItem";
import useActiveSection from "../hooks/useActiveSection";

function DesktopNav() {
  const activeSection = useActiveSection();

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav className={styles.desktopNav}>
      {navItems.map((item) => (
        <NavItem
          key={item.id}
          item={item}
          active={activeSection === item.id}
        />
      ))}
    </nav>
  );
}

export default DesktopNav;