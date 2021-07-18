import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";
import ReactDOM from "react-dom";
import {useParams} from "react-router";
import {useSelector} from "react-redux";

function Modal(props) {
    const modalRoot = document.getElementById("modals");
    const {id} = useParams();
    const ingredient = useSelector((state) => state.ingredientsListReducer);
    const currIngredient = ingredient.ingredientsList.filter((item) => item._id === id)[0];
    console.log(currIngredient)
    return ReactDOM.createPortal(
        <>
            <div
                className={styles["modal"]}
                onClick={props.closeByOverlayClickHandler}
            >
                <ModalOverlay {...props} currIngredient={currIngredient}>{props.children}</ModalOverlay>
            </div>
        </>,
        modalRoot
    );
}


export default Modal;
