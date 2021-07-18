import styles from "./burger-ingredients-card.module.css";
import {useDispatch, useSelector} from "react-redux";
import {ADD_CURRENT_INGREDIENT} from "../../services/actions/ingredients";
import {useDrag} from "react-dnd";
import {Counter, CurrencyIcon,} from "@ya.praktikum/react-developer-burger-ui-components";
import {burgerType} from "../../utils/burgerType";
import PropTypes from "prop-types";
import React from "react";
import {Link, useLocation} from "react-router-dom";

function BurgerIngredientsCard(props) {
    let location = useLocation();
    const dispatch = useDispatch();
    const {cardData} = props;
    const items = useSelector(
        (store) => store.constructorItemsListReducer.constructorItemsList
    );
    const bun = useSelector(
        (store) => store.constructorItemsListReducer.constructorBun
    );

    function countItems() {
        if (cardData.type === "bun") {
            return bun._id === cardData._id ? 2 : 0;
        } else {
            return items.filter((item) => item._id === cardData._id).length;
        }
    }

    const [{isDrag}, dragRef] = useDrag({
        item: cardData,
        type: "card",
        collect: (monitor) => ({
            isDrag: monitor.isDragging(),
        }),
    });

    const clickCardHandler = () => {

        dispatch({
            type: ADD_CURRENT_INGREDIENT,
            item: cardData,
        });
    };

    return (
        <Link key={cardData._id} to={{pathname: `/ingredients/${cardData._id}`, state: {background: location}}}>
            < div
                className={`${styles["burger-ingredients-card"]} ml-2 mr-2 mb-10`
                }

                ref={dragRef}
            >
                <Counter count={countItems() || 0} size="default"/>
                <div>
                    <img
                        className={`${styles["burger-ingredients-card__image"]} ml-4 mr-4 mb-1`}
                        src={cardData.image}
                        alt={cardData.name}
                    />
                    <div className={`${styles["burger-ingredients-card"]} mt-1 mb-1}`}>
                        <p className="text text_type_digits-default">{cardData.price}</p>
                        <CurrencyIcon type="primary"/>
                    </div>
                    <h3 className="text text_type_main-default">{cardData.name}</h3>
                </div>
            </div>
        </Link>
    );
}

BurgerIngredientsCard.propTypes = {
    cardData: PropTypes.shape(burgerType).isRequired,
};

export default BurgerIngredientsCard;
