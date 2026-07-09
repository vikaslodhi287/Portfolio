import { NavLink } from "react-router-dom";

function NavItem({ item }) {
  return (
    <NavLink
      to={item.href}
      className={({ isActive }) =>
        isActive
          ? "desktop-menu__link desktop-menu__link--active"
          : "desktop-menu__link"
      }
    >
      {item.label}
    </NavLink>
  );
}

export default NavItem;