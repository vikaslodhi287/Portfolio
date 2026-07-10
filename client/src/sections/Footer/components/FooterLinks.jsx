import styles from "../styles/Footer.module.scss";

const links = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Education",
  "Contact",
];

function FooterLinks() {
  return (
    <div className={styles.links}>

      {links.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
        >
          {item}
        </a>
      ))}

    </div>
  );
}

export default FooterLinks;