import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients-card.module.css";
import PropTypes from "prop-types";
import { burgerType } from "../../utils/burgerType";
import { useDispatch } from "react-redux";
import {
  ADD_CONSTRUCTOR_ITEM,
  ADD_CURRENT_INGREDIENT,
} from "../../services/actions/actions";

function BurgerIngridientsCard(props) {
  const dispatch = useDispatch();
  const { cardData } = props;
  const clickCardHandler = () => {
    props.openCardHandler(cardData);
    dispatch({
      type: ADD_CONSTRUCTOR_ITEM,
      item: cardData,
    });
    dispatch({
      type: ADD_CURRENT_INGREDIENT,
      item: cardData,
    });
  };
  return (
    <div
      className={`${styles["burger-ingredients-card"]} ml-2 mr-2 mb-10`}
      onClick={clickCardHandler}
    >
      <Counter count={1} size="default" />
      <div>
        <img
          className={`${styles["burger-ingredients-card__image"]} ml-4 mr-4 mb-1`}
          src={cardData.image}
          alt={cardData.name}
        ></img>
        <div className={`${styles["burger-ingredients-card"]} mt-1 mb-1}`}>
          <p className="text text_type_digits-default">{cardData.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <h3 className="text text_type_main-default">{cardData.name}</h3>
      </div>
    </div>
  );
}

BurgerIngridientsCard.propTypes = {
  cardData: PropTypes.shape(burgerType).isRequired,
};

export default BurgerIngridientsCard;
