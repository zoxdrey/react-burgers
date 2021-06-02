import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngridientsList from "../burger-ingredients-list/burger-ingredients-list.js";
import styles from "./burger-ingredients.module.css";

function BurgerIngridients(props) {
  const [current, setCurrent] = React.useState("one");
  return (
    <div className={styles["burger-ingredients"] + " mt-10"}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div className={styles["burger-ingredients__tabs"] + " mt-5 mb-10"}>
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
      <BurgerIngridientsList
        burgerData={props.burgersData}
      ></BurgerIngridientsList>
    </div>
  );
}

export default BurgerIngridients;
