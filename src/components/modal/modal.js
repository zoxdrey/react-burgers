import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function Modal(props) {
  console.log(props);
  return (
    <div className={styles["modal"]}>
      <div className={styles["modal__header"]}>
        {props.title && (
          <p className="text text_type_main-large ml-10 mt-10">
            Детали ингредиента
          </p>
        )}
        <div className={styles["modal__close-icon"] + " mt-10 mr-10"}>
          <CloseIcon type="primary" onClick={props.closeHandler} />
        </div>
      </div>

      {props.children}
    </div>
  );
}

export default Modal;
