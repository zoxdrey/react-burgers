import BurgerIngredientsCard from "./burger-ingredients-card/burger-ingredients-card.tsx";
import styles from "./burger-ingredients-category.module.css";
import PropTypes from "prop-types";
import {burgerType} from "../../../../utils/burgerElement";
import React from "react";

const BurgerIngredientsCategory = React.forwardRef((props, ref) => {
    const {categoryData} = props;
    return (
        <div ref={ref} className={styles["burger-ingredients-category"]}>
            <p className="text text_type_main-medium mb-6">{props.children}</p>
            <div className={styles["burger-ingredients-category__cards"]}>
                {categoryData &&
                categoryData.map((item) => (
                    <BurgerIngredientsCard
                        cardData={item}
                        key={item._id}
                        openCardHandler={props.openCardHandler}
                    />
                ))}
            </div>
        </div>
    );
});

BurgerIngredientsCategory.propTypes = {
    categoryData: PropTypes.arrayOf(PropTypes.shape(burgerType)).isRequired,
};

export default BurgerIngredientsCategory;
