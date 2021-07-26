import styles from "./order-card.module.css";
import React from "react";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";

function OrderCard({order}) {

    const {ingredientsList} = useSelector((store) => store.ingredientsListReducer);
    const getOrderIngredientList = () => {
        let ingrList = []
        order.ingredients.forEach(orderIngredient => {
            ingrList = [...ingrList, ...ingredientsList.filter(item => item._id === orderIngredient)]
        })
        return ingrList;
    }

    const getStateName = (status) => {
        switch (status) {
            case 'done':
                return 'Выполнен'
            case 'pending':
                return 'Готовится'
            case 'created':
                return 'Создан'
            default:
                return ''
        }
    }


    return (
        <NavLink className={`${styles["order-card"]} text m-2 p-6`} to={`/feed/${order.number}`}>
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
                    {getStateName(order.status)}
                </p></div>
            </div>
            <div className={`${styles["order-card__footer"]}`}>
                <div className={`${styles["order-card__footer-list"]} mr-6`}>
                    {getOrderIngredientList().map((item, i) => (
                        <img key={i} className={`${styles["order-card__footer-list-img"]}`} src={item.image} alt=""/>))}
                </div>
                <div className={`${styles["order-card__footer-price"]}`}>
                    <p
                        className="text text_type_digits-default">
                        480
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
