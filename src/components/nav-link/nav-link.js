import styles from "./nav-link.module.css";
import PropTypes from "prop-types";

function NavLink(props) {
  return (
    <a className={styles.nav__link + " pl-5 pr-5 pt-4 pb-4"} href="#">
      {props.isInactiveText ? (
        <p className="text text_type_main-default text_color_inactive">
          {props.children}
        </p>
      ) : (
        <p className="text text_type_main-default">{props.children}</p>
      )}
    </a>
  );
}

export default NavLink;
