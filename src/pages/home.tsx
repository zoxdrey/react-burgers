import {BurgerIngredients} from "../components/burger-ingredients/burger-ingredients";
import {BurgerConstructor} from "../components/burger-constructor/burger-constructor";
import React, {FC} from "react";


export const HomePage: FC = () => {

    return (
        <>
            <BurgerIngredients/>
            <div className="p-4"></div>
            <BurgerConstructor/>
        </>
    )
}