import styles from "../styles/Navbar.module.scss";

const navItems = [

    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Contact"

];

function MobileNav({isOpen,toggleMenu}){

    return(

        <div
            className={`${styles.mobileMenu} ${
                isOpen ? styles.mobileMenuOpen : ""
            }`}
        >

            {
                navItems.map(item=>(

                    <a

                        key={item}

                        href={`#${item.toLowerCase()}`}

                        onClick={toggleMenu}

                    >

                        {item}

                    </a>

                ))
            }

        </div>

    )

}

export default MobileNav;