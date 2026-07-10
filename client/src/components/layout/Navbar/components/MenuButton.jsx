import { Menu, X } from "lucide-react";
import styles from "../styles/Navbar.module.scss";

function MenuButton({ isOpen, toggleMenu }) {

    return (

        <button
            className={styles.menuButton}
            onClick={toggleMenu}
        >

            {
                isOpen
                    ? <X size={24}/>
                    : <Menu size={24}/>
            }

        </button>

    )

}

export default MenuButton;