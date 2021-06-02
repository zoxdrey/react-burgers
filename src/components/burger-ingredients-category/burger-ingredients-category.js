import BurgerIngridientsCard from "../burger-ingredients-card/burger-ingredients-card.js";
import styles from "./burger-ingredients-category.module.css";

function BurgerIngridientsCategory(props) {
  return (
    <div className={styles["burger-ingredients-category"]}>
      <p className="text text_type_main-default">{props.children}</p>
      <div className={styles["burger-ingredients-category__cards"]}>
        <BurgerIngridientsCard></BurgerIngridientsCard>
        <BurgerIngridientsCard></BurgerIngridientsCard>
        <BurgerIngridientsCard></BurgerIngridientsCard>
      </div>
    </div>
  );
}

export default BurgerIngridientsCategory;
