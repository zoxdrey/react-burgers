import {BurgerIngredientsCard} from "./burger-ingredients-card/burger-ingredients-card";
import styles from "./burger-ingredients-category.module.css";
import React, {FC} from "react";
import {IBurgerElement} from "../../../../services/types/data";

interface IBurgerIngredientsCategory {
    categoryData: Array<IBurgerElement>,
    openCardHandler?: () => void
    ref: any
}

export const BurgerIngredientsCategory: FC<IBurgerIngredientsCategory> = React.forwardRef((props, ref: any) => {
    const {categoryData} = props;
    return (
        <div ref={ref} className={styles["burger-ingredients-category"]}>
            <p className="text text_type_main-medium mb-6">{props.children}</p>
            <div className={styles["burger-ingredients-category__cards"]}>
                {categoryData &&
                categoryData.map((item: IBurgerElement) => (
                    <BurgerIngredientsCard
                        cardData={item}
                        key={item._id}
                    />
                ))}
            </div>
        </div>
    );
});

export default BurgerIngredientsCategory;
