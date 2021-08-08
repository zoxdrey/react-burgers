import React, {FC} from "react";
import styles from "./app-header.module.css";
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavBurgerLink} from "../nav-link/nav-link";
import {NavLink} from "react-router-dom";

export const AppHeader: FC = () => {

    const userName = localStorage.getItem('userName');

    return (
        <header className={`${styles.header} + p-4`}>
            <nav className={styles.nav}>
                <NavBurgerLink target={'/'}>
                    <BurgerIcon type="primary"/>
                    Конструктор
                </NavBurgerLink>

                <NavBurgerLink isInactiveText={true} target={'/feed'}>
                    <ListIcon type="secondary"/>
                    Лента заказов
                </NavBurgerLink>
            </nav>
            <NavLink to={'/'}><Logo/></NavLink>
            <NavBurgerLink isInactiveText={true} target={'/profile'}>
                <ProfileIcon type="secondary"/>
                {userName ? userName : 'Личный кабинет'}
            </NavBurgerLink>
        </header>
    );
}

