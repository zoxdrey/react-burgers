import Modal from "../modal/modal";
import styles from "./modal-overlay.module.css";
import ReactDOM from "react-dom";

function ModalOverlay(props) {
  const modalRoot = document.getElementById("modals");

  return ReactDOM.createPortal(
    <>
      <div
        className={styles["modal-overlay"]}
        onClick={props.closeByOverlayClickHandler}
      >
        <Modal {...props}>{props.children}</Modal>
      </div>
    </>,
    modalRoot
  );
}

export default ModalOverlay;
