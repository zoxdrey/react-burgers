import BurgerIngridientsCategory from "../burger-ingredients-category/burger-ingredients-category.js";
import styles from "./burger-ingredients-list.module.css";

function BurgerIngridientsList(props) {
  const getBurgerDataByType = (type) => {
    return props.burgerData.filter((item) => item.type === type);
  };

  return (
    <div className={styles["burger-ingredients-list"] + " mb-10"}>
      <BurgerIngridientsCategory categoryData={getBurgerDataByType("bun")}>
        Булки
      </BurgerIngridientsCategory>
      <BurgerIngridientsCategory categoryData={getBurgerDataByType("sauce")}>
        Соусы
      </BurgerIngridientsCategory>
      <BurgerIngridientsCategory categoryData={getBurgerDataByType("main")}>
        Начинки
      </BurgerIngridientsCategory>
    </div>
  );
}

export default BurgerIngridientsList;
