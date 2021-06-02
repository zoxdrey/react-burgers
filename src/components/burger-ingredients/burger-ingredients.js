import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngridientsList from "../burger-ingredients-list/burger-ingredients-list.js";
import styles from "./burger-ingredients.module.css";

function BurgerIngridients() {
  const [current, setCurrent] = React.useState("one");
  return (
    <div>
      <h1>Соберите бургер</h1>
      <div className={styles["burger-ingredients"]}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <BurgerIngridientsList></BurgerIngridientsList>
    </div>
  );
}

export default BurgerIngridients;
