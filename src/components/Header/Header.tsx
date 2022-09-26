import styles from "./Header.module.css";

import Logo from "../../assets/halloweenIcon.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
