import BurgerIngredientsCategory from "../burger-ingredients-category/burger-ingredients-category.js";
import styles from "./burger-ingredients-list.module.css";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useInView} from "react-intersection-observer";

function BurgerIngridientsList(props) {
    const burgerdata = useSelector(
        (store) => store.ingredientsListReducer.ingredientsList
    );

    const [bunsRef, inViewBuns] = useInView({threshold: 0.1});
    const [saucesRef, inViewSauces] = useInView({threshold: 0.1});
    const [mainsRef, inViewMains] = useInView({threshold: 0.1});
    useEffect(() => {
        if (inViewBuns) {
            props.setCurrentTab("Булки");
        } else if (inViewSauces) {
            props.setCurrentTab("Соусы");
        } else if (inViewMains) {
            props.setCurrentTab("Начинки");
        }
    }, [props, inViewBuns, inViewMains, inViewSauces]);

    const getBurgerDataByType = (type) => {
        return burgerdata.filter((item) => item.type === type);
    };

    return (
        <div className={`${styles["burger-ingredients-list"]} mb-10`}>
            <BurgerIngredientsCategory
                categoryData={getBurgerDataByType("bun")}
                openCardHandler={props.openCardHandler}
                ref={bunsRef}
            >
                Булки
            </BurgerIngredientsCategory>
            <BurgerIngredientsCategory
                categoryData={getBurgerDataByType("sauce")}
                openCardHandler={props.openCardHandler}
                ref={saucesRef}
            >
                Соусы
            </BurgerIngredientsCategory>
            <BurgerIngredientsCategory
                categoryData={getBurgerDataByType("main")}
                openCardHandler={props.openCardHandler}
                ref={mainsRef}
            >
                Начинки
            </BurgerIngredientsCategory>
        </div>
    );
}

export default BurgerIngridientsList;
