import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/43485892?v=4" />
        <strong>Gabriel Haruo</strong>
        <span>Dev Front-end</span>
      </div>

      <footer>
        <a href="#">
          {" "}
          <PencilLine size={20} /> Editar Perfil
        </a>
      </footer>
    </aside>
  );
}
