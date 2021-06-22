import { useState, useContext } from "react";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import BurgerConstructorList from "../burger-constructor-list/burger-constructor-list.js";
import PropTypes from "prop-types";
import ModalOverlay from "../modal/modal.js";
import OrderDetails from "../order-details/order-details.js";
import { useEffect } from "react";
import { ESC_KEY_CODE } from "../../utils/constants";
import { burgerType } from "../../utils/burgerType";
import { BurgersDataContext } from "../../services/burgersDataContext.js";
import { ConstructorItemsContext } from "../../services/constructorItemsContext";

function BurgerConstructor() {
  const url = "https://norma.nomoreparties.space/api/orders";
  const [visible, setVisible] = useState(false);
  const burgerConstructorItems = useContext(ConstructorItemsContext);
  let totalCost = 0;
  const [orderId, setOrderId] = useState("01");
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
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        ingredients: burgerConstructorItems.map((element) => element._id),
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        setOrderId(result.order.number);
        setVisible(true);
      })
      .catch((error) => error)
      .finally(() => {});
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
    <ModalOverlay
      burgersData={burgerConstructorItems}
      closeHandler={closeModal}
      closeByOverlayClickHandler={closeByOverlayClickHandler}
    >
      <OrderDetails orderId={orderId}></OrderDetails>
    </ModalOverlay>
  );

  return (
    <section className={`${styles["burger-constructor"]} mt-25 ml-10`}>
      <BurgerConstructorList
        items={burgerConstructorItems}
      ></BurgerConstructorList>
      <div className={styles["burger-constructor__info"]}>
        <p className="text text_type_digits-medium">{totalCost}</p>
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
