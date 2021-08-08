import styles from "./modal-overlay.module.css";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {FC} from "react";

interface IModalOverlayProps {
    title?: boolean
    titleValue?: string
    closeHandler?: () => void
}

export const ModalOverlay: FC<IModalOverlayProps> = (props) => {
    return (
        <div className={styles["modal-overlay"]}>
            <div className={styles["modal-overlay__header"]}>
                <p className="text text_type_main-large ml-10 mt-10">
                    {props.title && props.titleValue}
                </p>
                <div className={`${styles["modal-overlay__close-icon"]} mt-10 mr-10`}>
                    <CloseIcon type="primary" onClick={props.closeHandler}/>
                </div>
            </div>
            {props.children}
        </div>
    );
}