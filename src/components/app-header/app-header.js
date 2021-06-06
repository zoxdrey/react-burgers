import React from "react";
import styles from "./app-header.module.css";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import NavLink from "../nav-link/nav-link.js";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
  return (
    <header className={`${styles.header} + p-4`}>
      <nav className={styles.nav}>
        <NavLink>
          <BurgerIcon type="primary" />
          Конструктор
        </NavLink>

        <NavLink isInactiveText={true}>
          <ListIcon type="secondary" />
          Лента заказов
        </NavLink>
      </nav>
      <Logo />
      <NavLink isInactiveText={true}>
        <ProfileIcon type="secondary" />
        Личный кабинет
      </NavLink>
    </header>
  );
}

export default AppHeader;
