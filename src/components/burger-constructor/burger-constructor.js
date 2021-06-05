import { useState } from "react";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import BurgerConstructorList from "../burger-constructor-list/burger-constructor-list.js";
import PropTypes from "prop-types";
import ModalOverlay from "../modal-overlay/modal-overlay.js";
import OrderDetails from "../order-details/order-details.js";
import { useEffect } from "react";

function BurgerConstructor(props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const escHandler = (event) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };
    document.addEventListener("keydown", escHandler);
    return () => document.removeEventListener("keydown", escHandler);
  }, []);

  const openModal = () => {
    setVisible(true);
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
      burgersData={props.burgersData}
      closeHandler={closeModal}
      closeByOverlayClickHandler={closeByOverlayClickHandler}
    >
      <OrderDetails></OrderDetails>
    </ModalOverlay>
  );

  return (
    <section className={styles["burger-constructor"] + " mt-25 ml-10"}>
      <BurgerConstructorList
        burgerData={props.burgersData}
      ></BurgerConstructorList>
      <div className={styles["burger-constructor__info"]}>
        <p className="text text_type_digits-medium">438</p>
        <CurrencyIcon type="default"></CurrencyIcon>
        <Button type="primary" size="medium" onClick={openModal}>
          Оформить заказ
        </Button>
        {visible && modal}
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  burgersData: PropTypes.arrayOf(
    PropTypes.shape({
      calories: PropTypes.number,
      carbohydrates: PropTypes.number,
      fat: PropTypes.number,
      image: PropTypes.string,
      image_large: PropTypes.string,
      image_mobile: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      proteins: PropTypes.number,
      type: PropTypes.string,
      __v: PropTypes.number,
      _id: PropTypes.string,
    })
  ).isRequired,
};

export default BurgerConstructor;
