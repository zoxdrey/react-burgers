import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import React from "react";


function HomePage() {
    return (
        <>
            <BurgerIngredients/>
            <div className="p-4"></div>
            <BurgerConstructor/>
        </>
    )
}

export default HomePage;