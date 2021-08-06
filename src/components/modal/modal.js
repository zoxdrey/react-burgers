import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";
import ReactDOM from "react-dom";
import React, {useEffect} from "react";
import {ESC_KEY_CODE} from "../../utils/constants";

function Modal(props) {
    const modalRoot = document.getElementById("modals");

    useEffect(() => {
        const escHandler = (event) => {
            if (event.keyCode === ESC_KEY_CODE) {
                props.closeHandler()
            }
        };
        document.addEventListener("keydown", escHandler);
        return () => document.removeEventListener("keydown", escHandler);
    }, []);

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
