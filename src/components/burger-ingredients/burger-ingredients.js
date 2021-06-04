import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngridientsList from "../burger-ingredients-list/burger-ingredients-list.js";
import styles from "./burger-ingredients.module.css";
import PropTypes from "prop-types";

function BurgerIngridients(props) {
  const [current, setCurrent] = React.useState("Булки");

  return (
    <div className={styles["burger-ingredients"] + " mt-10"}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div className={styles["burger-ingredients__tabs"] + " mt-5 mb-10"}>
        <Tab value="Булки" active={current === "Булки"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="Соусы" active={current === "Булки"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="Начинки" active={current === "Булки"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <BurgerIngridientsList
        burgerData={props.burgersData}
      ></BurgerIngridientsList>
    </div>
  );
}

BurgerIngridients.propTypes = {
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

export default BurgerIngridients;
