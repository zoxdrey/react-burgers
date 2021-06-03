import BurgerIngridientsCard from "../burger-ingredients-card/burger-ingredients-card.js";
import styles from "./burger-ingredients-category.module.css";
import PropTypes from "prop-types";

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

BurgerIngridientsCategory.propTypes = {
  categoryData: PropTypes.arrayOf(
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

export default BurgerIngridientsCategory;
