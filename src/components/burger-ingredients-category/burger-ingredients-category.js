import BurgerIngridientsCard from "../burger-ingredients-card/burger-ingredients-card.js";
import styles from "./burger-ingredients-category.module.css";

function BurgerIngridientsCategory(props) {
  const { categoryData } = props;
  return (
    <div className={styles["burger-ingredients-category"]}>
      <p className="text text_type_main-medium mb-6">{props.children}</p>
      <div className={styles["burger-ingredients-category__cards"]}>
        {categoryData.map((item) => (
          <BurgerIngridientsCard
            cardData={item}
            key={item._id}
          ></BurgerIngridientsCard>
        ))}
      </div>
    </div>
  );
}

export default BurgerIngridientsCategory;
