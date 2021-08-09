import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {BurgerIngredientsList} from "./burger-ingredients-list/burger-ingredients-list";
import styles from "./burger-ingredients.module.css";
import React, {FC, useState} from "react";

export const BurgerIngredients: FC = () => {
    const [current, setCurrent] = useState("Булки");


    return (
        <div className={`${styles["burger-ingredients"]} mt-10`}>
            <h1 className="text text_type_main-large">Соберите бургер</h1>
            <div className={`${styles["burger-ingredients__tabs"]} mt-5 mb-10`}>
                <Tab
                    value="Булки"
                    active={current === "Булки"}
                    onClick={() => setCurrent("Булки")}
                >
                    Булки
                </Tab>
                <Tab
                    value="Соусы"
                    active={current === "Соусы"}
                    onClick={() => setCurrent("Соусы")}
                >
                    Соусы
                </Tab>
                <Tab
                    value="Начинки"
                    active={current === "Начинки"}
                    onClick={() => setCurrent("Начинки")}
                >
                    Начинки
                </Tab>
            </div>

            <BurgerIngredientsList
                setCurrentTab={setCurrent}
            />
        </div>
    );
}
