import BurgerIngridientsCategory from "../burger-ingredients-category/burger-ingredients-category.js";
import styles from "./burger-ingredients-list.module.css";
import PropTypes from "prop-types";
import { burgerType } from "../../utils/burgerType";
import { BurgersDataContext } from "../../services/burgersDataContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

function BurgerIngridientsList(props) {
  const burgerdata = useSelector(
    (store) => store.ingredientsListReducer.ingredientsList
  );

  const getBurgerDataByType = (type) => {
    return burgerdata.filter((item) => item.type === type);
  };

  return (
    <div className={`${styles["burger-ingredients-list"]} mb-10`}>
      <BurgerIngridientsCategory
        categoryData={getBurgerDataByType("bun")}
        openCardHandler={props.openCardHandler}
      >
        Булки
      </BurgerIngridientsCategory>
      <BurgerIngridientsCategory
        categoryData={getBurgerDataByType("sauce")}
        openCardHandler={props.openCardHandler}
      >
        Соусы
      </BurgerIngridientsCategory>
      <BurgerIngridientsCategory
        categoryData={getBurgerDataByType("main")}
        openCardHandler={props.openCardHandler}
      >
        Начинки
      </BurgerIngridientsCategory>
    </div>
  );
}

export default BurgerIngridientsList;
