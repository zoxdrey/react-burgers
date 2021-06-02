import React from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import BurgerConstructorList from "../burger-constructor-list/burger-constructor-list.js";

function BurgerConstructor() {
  return (
    <section className={styles["burger-constructor"]}>
      <BurgerConstructorList></BurgerConstructorList>
      <div className={styles["burger-constructor__info"]}>
        <p className="text text_type_digits-medium">1234567890</p>
        <Button type="primary" size="medium">
          Нажми на меня
        </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;
