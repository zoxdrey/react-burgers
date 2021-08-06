import styles from "./nav-link.module.css";
import {NavLink} from "react-router-dom";
import React, {FC} from "react";

interface INavBurgerLinkProps {
    target: string,
}

export const NavBurgerLink: FC<INavBurgerLinkProps> = (target, children) => {
    return (
        <p className="text text_type_main-default text_color_inactive">
            <NavLink className={styles.nav__link + " pl-5 pr-5 pt-4 pb-4"} to={target}
                     activeClassName={'text text_type_main-default'}>
                {children}
            </NavLink>
        </p>
    );
}

