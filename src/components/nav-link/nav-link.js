import styles from "./nav-link.module.css";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

function NavLink(props) {
  return (
    <a className={styles.nav__link + " pl-5 pr-5 pt-4 pb-4"} href="#">
      {props.icon.icon === "profileIcon" ? (
        <ProfileIcon type={props.icon.type} />
      ) : (
        ""
      )}
      {props.icon.icon === "burgerIcon" ? (
        <BurgerIcon type={props.icon.type} />
      ) : (
        ""
      )}
      {props.icon.icon === "listIcon" ? (
        <ListIcon type={props.icon.type} />
      ) : (
        ""
      )}
      <div className="pl-2"></div>
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

NavLink.propTypes = {
  icon: PropTypes.shape({
    icon: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};

export default NavLink;
