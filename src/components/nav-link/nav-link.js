import styles from "./nav-link.module.css";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import React from "react";

function NavBurgerLink(props) {
    return (
        <p className="text text_type_main-default text_color_inactive">
            <NavLink className={styles.nav__link + " pl-5 pr-5 pt-4 pb-4"} to={props.target}
                     activeClassName={'text text_type_main-default'}>
                {props.children}
            </NavLink>
        </p>
    );
}

NavLink.propTypes = {
    target: PropTypes.string,
    children: PropTypes.node,
};
export default NavBurgerLink;
