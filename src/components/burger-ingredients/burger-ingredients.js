import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngridientsList from "../burger-ingredients-list/burger-ingredients-list.js";
import styles from "./burger-ingredients.module.css";
import PropTypes from "prop-types";
import ModalOverlay from "../modal/modal.js";
import IngredientDetails from "../ingredient-details/ingredient-details.js";
import { useState, useEffect } from "react";
import { burgerType } from "../../utils/burgerType";

function BurgerIngridients(props) {
  const [current, setCurrent] = useState("Булки");
  const [visible, setVisible] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState(null);

  useEffect(() => {
    const escHanlder = (event) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };
    document.addEventListener("keydown", escHanlder);
    return () => document.removeEventListener("keydown", escHanlder);
  }, []);

  const openModal = (data) => {
    if (data) setCurrentIngredient(data);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const closeByOverlayClickHandler = (e) => {
    if (e.target.parentNode.id === "modals") {
      closeModal();
    }
  };

  const modal = (
    <ModalOverlay
      title
      burgersData={props.burgersData}
      closeHandler={closeModal}
      closeByOverlayClickHandler={closeByOverlayClickHandler}
    >
      <IngredientDetails burgersData={currentIngredient}></IngredientDetails>
    </ModalOverlay>
  );
  return (
    <div className={`${styles["burger-ingredients"]} mt-10`}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div className={`${styles["burger-ingredients__tabs"]} mt-5 mb-10`}>
        <Tab value="Булки" active={current === "Булки"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="Соусы" active={current === "Булки"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="Начинки" active={current === "Булки"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      {visible && modal}
      <BurgerIngridientsList
        burgerData={props.burgersData}
        openCardHandler={openModal}
      ></BurgerIngridientsList>
    </div>
  );
}

BurgerIngridients.propTypes = {
  burgersData: PropTypes.arrayOf(PropTypes.shape(burgerType)).isRequired,
};

export default BurgerIngridients;
