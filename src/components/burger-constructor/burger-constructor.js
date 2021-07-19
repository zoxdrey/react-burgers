import {useEffect, useState} from "react";
import {Button, CurrencyIcon,} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import BurgerConstructorList from "../burger-constructor-list/burger-constructor-list.js";
import Modal from "../modal/modal.js";
import OrderDetails from "../order-details/order-details.js";
import {ESC_KEY_CODE} from "../../utils/constants";
import {getOrder, RESET_CONSTRUCTOR} from "../../services/actions/ingredients";
import {useDispatch, useSelector} from "react-redux";

function BurgerConstructor() {
    const [visible, setVisible] = useState(false);

    const burgerConstructorItems = useSelector(
        (store) => store.constructorItemsListReducer.constructorItemsList
    );
    const bun = useSelector(
        (store) => store.constructorItemsListReducer.constructorBun
    );
    const orderId = useSelector((store) => store.orderReducer.order.orderId);
    const dispatch = useDispatch();
    useEffect(() => {
        const escHandler = (event) => {
            if (event.keyCode === ESC_KEY_CODE) {
                closeModal();
            }
        };
        document.addEventListener("keydown", escHandler);
        return () => document.removeEventListener("keydown", escHandler);
    }, []);

    const openModal = () => {
        if (bun._id) {
            const ingredientsIds = [
                ...burgerConstructorItems.map((element) => element._id),
                bun._id,
            ];
            dispatch(getOrder(ingredientsIds, setVisible));
            dispatch({
                type: RESET_CONSTRUCTOR,
            });
        }
    };

    const closeModal = (e) => {
        setVisible(false);
    };

    const closeByOverlayClickHandler = (e) => {
        if (e.target.parentNode.id === "modals") {
            closeModal();
        }
    };

    const modal = (
        <Modal
            burgersData={burgerConstructorItems}
            closeHandler={closeModal}
            closeByOverlayClickHandler={closeByOverlayClickHandler}
        >
            <OrderDetails orderId={orderId + ""}></OrderDetails>
        </Modal>
    );

    return (
        <section className={`${styles["burger-constructor"]} mt-25 ml-10`}>
            <BurgerConstructorList/>
            <div className={styles["burger-constructor__info"]}>
                <p className="text text_type_digits-medium">
                    {(bun.price || 0) * 2 +
                    burgerConstructorItems.reduce(
                        (acc, curr) => acc + parseInt(curr.price),
                        0
                    ) || 0}
                </p>
                <CurrencyIcon type="default"/>
                <Button type="primary" size="medium" onClick={openModal}>
                    Оформить заказ
                </Button>
                {visible && modal}
            </div>
        </section>
    );
}

export default BurgerConstructor;
