import { useNavigation } from "../../../context/NavigationContext";
import NavItem from "./NavItem";

function DesktopMenu() {
  const { navigation } = useNavigation();

  return (
    <nav className="desktop-menu">
      {navigation.map((item) => (
        <NavItem
          key={item._id}
          item={item}
        />
      ))}
    </nav>
  );
}

export default DesktopMenu;