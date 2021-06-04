import React from "react";
import styles from "./app-header.module.css";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import NavLink from "../nav-link/nav-link.js";

function AppHeader() {
  return (
    <header className={styles.header + " p-4"}>
      <nav className={styles.nav}>
        <NavLink icon={{ icon: "burgerIcon", type: "primary" }}>
          Конструктор
        </NavLink>

        <NavLink
          icon={{ icon: "listIcon", type: "secondary" }}
          isInactiveText={true}
        >
          Лента заказов
        </NavLink>
      </nav>
      <Logo />
      <NavLink
        icon={{ icon: "profileIcon", type: "secondary" }}
        isInactiveText={true}
      >
        Личный кабинет
      </NavLink>
    </header>
  );
}

export default AppHeader;
