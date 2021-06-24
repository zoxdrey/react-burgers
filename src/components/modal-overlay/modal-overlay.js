import styles from "./modal-overlay.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

function ModalOverlay(props) {
  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-overlay__header"]}>
        <p className="text text_type_main-large ml-10 mt-10">
          {props.title && "Детали ингредиента"}
        </p>
        <div className={`${styles["modal-overlay__close-icon"]} mt-10 mr-10`}>
          <CloseIcon type="primary" onClick={props.closeHandler} />
        </div>
      </div>

      {props.children}
    </div>
  );
}

ModalOverlay.propTypes = {
  closeHandler: PropTypes.func,
  title: PropTypes.bool,
  children: PropTypes.element,
};

export default ModalOverlay;
