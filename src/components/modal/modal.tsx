import {ModalOverlay} from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";
import ReactDOM from "react-dom";
import React, {FC, useEffect} from "react";
import {ESC_KEY_CODE} from "../../utils/constants";
import {IBurgerElement} from "../../services/types/data";

interface IModalProps {
    burgersData?: IBurgerElement[],
    closeHandler: () => void,
    closeByOverlayClickHandler: (e: any) => void,
    title?: boolean,
    titleValue?: string
    children?: React.ReactNode
}

export const Modal: FC<IModalProps> = (props) => {
    const modalRoot: Element | null = document.getElementById("modals");

    useEffect(() => {
        const escHandler = (event: KeyboardEvent) => {
            if (event.key === ESC_KEY_CODE) {
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
                <ModalOverlay {...props}>
                    <div>{props.children}</div>
                </ModalOverlay>
            </div>
        </>,
        modalRoot as Element
    );
}


export default Modal;
