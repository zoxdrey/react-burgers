import styles from "./order-card.module.css";
import React from "react";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";
import {getStatusName} from "../../../utils/getStatusName";

function OrderCard({order}) {

    const location = useLocation()

    let totalCost;
    const {ingredientsList} = useSelector((store) => store.ingredientsListReducer);


    const getOrderIngredientList = () => {
        let ingrList = []
        order.ingredients.forEach(orderIngredient => {
            ingrList = [...ingrList, ...ingredientsList.filter(item => item._id === orderIngredient)]
        })
        totalCost = getTotalCost(ingrList);
        return ingrList;
    }

    const getTotalCost = (ingredients) => {
        let result = 0
        ingredients.forEach(item => {
            if (item.type === 'bun') {
                result += item.price * 2
            }
            result += item.price
        })
        return result
    }


    return (

        <NavLink className={`${styles["order-card"]} text m-2 p-6`}
                 to={{pathname: `${location.pathname}/${order.number}`, state: {background: location}}}>
            <div className={`${styles["order-card__header"]} mb-6`}>
                <div className={`${styles["order-card__header-number"]}`}>
                    <p
                        className="text text_type_digits-default">
                        {`#${order.number}`}
                    </p>
                </div>
                <div className={`${styles["order-card__header-date"]}`}><p
                    className="text text_type_main-default text_color_inactive">
                    {order.createdAt}
                </p></div>
            </div>
            <div className={`${styles["order-card__main"]}  mb-6`}>
                <div className={`${styles["order-card__main-title"]} mb-2`}><p className="text text_type_main-medium">
                    {order.name}
                </p></div>
                <div className={`${styles["order-card__main-state"]}`}><p className="text text_type_main-default">
                    {getStatusName(order.status)}
                </p></div>
            </div>
            <div className={`${styles["order-card__footer"]}`}>
                <div className={`${styles["order-card__footer-list"]} mr-6`}>
                    {getOrderIngredientList().map((item, i) => {
                        if (i > 4) return null
                        if (i === 4) return (
                            <div key={i} className={`${styles["order-card__footer-list-img-wrapper"]}`}>
                                <img key={i} className={`${styles["order-card__footer-list-img"]}`} src={item.image}
                                     alt=""/>
                                <p className={`${styles["order-card__footer-list-img-text"]} text text_type_digits-default`}>{`+${order.ingredients.length - 4}`}</p>
                            </div>
                        )
                        return (
                            <div key={i} className={`${styles["order-card__footer-list-img-wrapper"]}`}>
                                <img key={i} className={`${styles["order-card__footer-list-img"]}`} src={item.image}
                                     alt=""/>
                            </div>)
                    })
                    }
                </div>
                <div className={`${styles["order-card__footer-price"]}`}>
                    <p
                        className="text text_type_digits-default">
                        {totalCost}
                    </p>
                    <CurrencyIcon type="primary"/>
                </div>
            </div>
        </NavLink>
    );
}

OrderCard.propTypes = {
    order: PropTypes.shape({
        number: PropTypes.number,
        _id: PropTypes.string,
        createdAt: PropTypes.string,
        name: PropTypes.string,
        status: PropTypes.string,
        ingredients: PropTypes.array,
    })
};

export default OrderCard;
