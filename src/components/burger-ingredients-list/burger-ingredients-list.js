import BurgerIngridientsCategory from "../burger-ingredients-category/burger-ingredients-category.js";
import styles from "./burger-ingredients-list.module.css";

function BurgerIngridientsList() {
  return (
    <div className={styles["burger-ingredients-list"] + " mb-10"}>
      <BurgerIngridientsCategory>Булки</BurgerIngridientsCategory>
      <BurgerIngridientsCategory>Соусы</BurgerIngridientsCategory>
      <BurgerIngridientsCategory>Начинки</BurgerIngridientsCategory>
    </div>
  );
}

export default BurgerIngridientsList;
