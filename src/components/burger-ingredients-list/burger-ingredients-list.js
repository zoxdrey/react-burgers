import BurgerIngridientsCategory from "../burger-ingredients-category/burger-ingredients-category.js";
import styles from "./burger-ingredients-list.module.css";
import PropTypes from "prop-types";
import { burgerType } from "../../utils/burgerType";
import { BurgersDataContext } from '../../services/burgersDataContext';
import { useContext } from "react";


function BurgerIngridientsList(props) {
  
  const burgerdataContext = useContext(BurgersDataContext)

  const getBurgerDataByType = (type) => {
    return burgerdataContext.filter((item) => item.type === type);
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
