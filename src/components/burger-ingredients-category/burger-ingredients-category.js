import BurgerIngridientsCard from "../burger-ingredients-card/burger-ingredients-card.js";
import styles from "./burger-ingredients-category.module.css";
import PropTypes from "prop-types";
import { burgerType } from "../../utils/burgerType";
import React from "react";

const BurgerIngridientsCategory = React.forwardRef((props, ref) => {
  const { categoryData } = props;
  return (
    <div ref={ref} className={styles["burger-ingredients-category"]}>
      <p className="text text_type_main-medium mb-6">{props.children}</p>
      <div className={styles["burger-ingredients-category__cards"]}>
        {categoryData &&
          categoryData.map((item) => (
            <BurgerIngridientsCard
              cardData={item}
              key={item._id}
              openCardHandler={props.openCardHandler}
            ></BurgerIngridientsCard>
          ))}
      </div>
    </div>
  );
});

BurgerIngridientsCategory.propTypes = {
  categoryData: PropTypes.arrayOf(PropTypes.shape(burgerType)).isRequired,
};

export default BurgerIngridientsCategory;
