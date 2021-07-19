import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";
import ReactDOM from "react-dom";
import React from "react";

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


export default Modal;
