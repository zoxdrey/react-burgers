import React from "react";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import BurgerConstructorList from "../burger-constructor-list/burger-constructor-list.js";

function BurgerConstructor(props) {
  return (
    <section className={styles["burger-constructor"] + " mt-25 ml-10"}>
      <BurgerConstructorList
        burgerData={props.burgersData}
      ></BurgerConstructorList>
      <div className={styles["burger-constructor__info"]}>
        <p className="text text_type_digits-medium">438</p>
        <CurrencyIcon type="default"></CurrencyIcon>
        <Button type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;
