import BurgerIngridientsCard from "../burger-ingredients-card/burger-ingredients-card.js";
import styles from "./burger-ingredients-category.module.css";
import PropTypes from "prop-types";
import { burgerType } from "../../utils/burgerType";

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
            openCardHandler={props.openCardHandler}
          ></BurgerIngridientsCard>
        ))}
      </div>
    </div>
  );
}

BurgerIngridientsCategory.propTypes = {
  categoryData: PropTypes.arrayOf(PropTypes.shape(burgerType)).isRequired,
};

export default BurgerIngridientsCategory;
