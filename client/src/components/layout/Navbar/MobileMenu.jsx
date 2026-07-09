import { Menu } from "lucide-react";

function MobileMenu() {
  return (
    <button
      className="mobile-menu-btn"
      aria-label="Open Menu"
    >
      <Menu size={24} />
    </button>
  );
}

export default MobileMenu;