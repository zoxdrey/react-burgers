import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientsList from "../burger-ingredients-list/burger-ingredients-list.js";
import styles from "./burger-ingredients.module.css";
import Modal from "../modal/modal.js";
import IngredientDetails from "../ingredient-details/ingredient-details.js";
import React, {useContext, useEffect, useState} from "react";
import {BurgersDataContext} from "../../services/burgersDataContext.js";
import {REMOVE_CURRENT_INGREDIENT} from "../../services/actions/ingredients";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

function BurgerIngredients() {
    const [current, setCurrent] = useState("Булки");
    let history = useHistory();
    const [visible, setVisible] = useState(false);
    const [currentIngredient, setCurrentIngredient] = useState(null);
    const burgersData = useContext(BurgersDataContext);
    const dispatch = useDispatch();

    useEffect(() => {
        const escHandler = (event) => {
            if (event.keyCode === 27) {
                closeModal();
            }
        };
        document.addEventListener("keydown", escHandler);
        return () => {
            document.removeEventListener("keydown", escHandler);
        };
    }, []);

    const openModal = (data) => {
        if (data) setCurrentIngredient(data);
        setVisible(true);
    };

    let back = () => {
        history.goBack();
    };

    const closeModal = () => {
        setVisible(false);
        back();
        dispatch({
            type: REMOVE_CURRENT_INGREDIENT,
        });
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
            <IngredientDetails burgersData={currentIngredient}/>
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

export default BurgerIngredients;
