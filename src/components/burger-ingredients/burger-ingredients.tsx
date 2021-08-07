import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {BurgerIngredientsList} from "./burger-ingredients-list/burger-ingredients-list";
import styles from "./burger-ingredients.module.css";
import {Modal} from "../modal/modal";
import {IngredientDetails} from "../ingredient-details/ingredient-details";
import React, {FC, useContext, useState} from "react";
import {BurgersDataContext} from "../../services/burgersDataContext.js";
import {useHistory} from "react-router-dom";

export const BurgerIngredients: FC = () => {
    const [current, setCurrent] = useState("Булки");
    let history = useHistory();
    const [visible, setVisible] = useState(false);
    const burgersData = useContext(BurgersDataContext);


    let back = () => {
        history.goBack();
    };

    const closeModal = () => {
        setVisible(false);
        back();
    };

    const closeByOverlayClickHandler = (e) => {
        if (e.target.parentNode.id === "modals") {
            back();
            closeModal();

        }
    };

    const modal = (
        <Modal
            title
            burgersData={burgersData}
            closeHandler={closeModal}
            closeByOverlayClickHandler={closeByOverlayClickHandler}
        >
            <IngredientDetails/>
        </Modal>
    );
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
            {visible && modal}
            <BurgerIngredientsList
                setCurrentTab={setCurrent}
            />
        </div>
    );
}
