import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { burgerType } from "../../utils/burgerType";

function Modal(props) {
  const modalRoot = document.getElementById("modals");

  return ReactDOM.createPortal(
    <>
      <div
        className={styles["modal"]}
        onClick={props.closeByOverlayClickHandler}
      >
        <ModalOverlay {...props}>{props.children}</ModalOverlay>
      </div>
    </>,
    modalRoot
  );
}

Modal.propTypes = {
  title: PropTypes.bool,
  burgersData: PropTypes.arrayOf(PropTypes.shape(burgerType)),
  closeHandler: PropTypes.func,
  closeByOverlayClickHandler: PropTypes.func,
};

export default Modal;
