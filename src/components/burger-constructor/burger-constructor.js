import { useState } from "react";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import BurgerConstructorList from "../burger-constructor-list/burger-constructor-list.js";
import Modal from "../modal/modal.js";
import OrderDetails from "../order-details/order-details.js";
import { useEffect } from "react";
import { ESC_KEY_CODE } from "../../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { getOrder } from "../../services/actions/actions";
function BurgerConstructor() {
  const [visible, setVisible] = useState(false);

  const burgerConstructorItems = useSelector(
    (store) => store.ingredientsListReducer.ingredientsList
  );
  const orderId = useSelector((store) => {
    console.log(store);
    return store.orderReducer.order.orderId;
  });
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
    const ingredientsIds = burgerConstructorItems.map((element) => element._id);
    dispatch(getOrder(ingredientsIds, setVisible));
    console.log(orderId);
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
      <OrderDetails orderId={orderId}></OrderDetails>
    </Modal>
  );

  return (
    <section className={`${styles["burger-constructor"]} mt-25 ml-10`}>
      <BurgerConstructorList></BurgerConstructorList>
      <div className={styles["burger-constructor__info"]}>
        <p className="text text_type_digits-medium">
          {burgerConstructorItems.reduce(
            (acc, curr) => acc + parseInt(curr.price),
            0
          )}
        </p>
        <CurrencyIcon type="default"></CurrencyIcon>
        <Button type="primary" size="medium" onClick={openModal}>
          Оформить заказ
        </Button>
        {visible && modal}
      </div>
    </section>
  );
}

export default BurgerConstructor;
