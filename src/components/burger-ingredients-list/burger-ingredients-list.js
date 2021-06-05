import BurgerIngridientsCategory from "../burger-ingredients-category/burger-ingredients-category.js";
import styles from "./burger-ingredients-list.module.css";
import PropTypes from "prop-types";
function BurgerIngridientsList(props) {
  const getBurgerDataByType = (type) => {
    return props.burgerData.filter((item) => item.type === type);
  };

  return (
    <div className={styles["burger-ingredients-list"] + " mb-10"}>
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

BurgerIngridientsList.propTypes = {
  burgerData: PropTypes.arrayOf(
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

export default BurgerIngridientsList;
