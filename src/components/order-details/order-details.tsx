import styles from "./order-details.module.css";
import React, {FC, useEffect} from "react";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useParams} from "react-router";

import {getIngredientsList, getOrderById} from "../../services/actions/ingredients";
import {getStatusName} from "../../utils/getStatusName";
import {ParamTypes, useDispatch, useSelector} from "../../services/types/hooks";
import {IBurgerElement, TOrderData} from "../../services/types/data";

export const OrderDetails: FC = () => {


    const {id} = useParams<ParamTypes>();
    const dispatch = useDispatch();
    let totalCost;
    useEffect(() => {
        dispatch(getOrderById(id));
        dispatch(getIngredientsList())
    }, []);

    const order = useSelector(
        (store) => store.orderReducer.order
    );
    const {ingredientsList} = useSelector(
        (store) => store.ingredientsListReducer
    );

    function getOrderIngredientList(order: TOrderData): Array<IBurgerElement> {
        let ingrList: Array<IBurgerElement> = []

        order.ingredients.forEach((orderIngredient: string) => {
            ingrList = [...ingrList, ...ingredientsList.filter(item => item._id === orderIngredient)] || ''
        })

        totalCost = getTotalCost(ingrList);
        return ingrList;
    }

    const getTotalCost = (ingredients: IBurgerElement[]): number => {
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
        <div className={`${styles["order-detail-container"]} m-6`}>
            {order && (
                <>
                    <div className={`${styles["order-detail-card__header"]} mb-15`}>
                        <div className={`${styles["order-detail-card__header-number"]} mb-10`}>
                            <p className="text text_type_digits-default">#{order.number}</p>
                        </div>
                        <div className={`${styles["order-detail-card__header-title"]} mb-3`}>
                            <p className="text text_type_main-medium">
                                {order.name}
                            </p>

                        </div>
                        <div className={`${styles["order-detail-card__header-state"]} `}>
                            <p className="text text_type_main-default">
                                {getStatusName(order.status)}
                            </p>

                        </div>
                    </div>
                    <div className={`${styles["order-detail-card__main"]} `}>
                        <div className={`${styles["order-detail-card__main-title"]} mb-6`}>
                            <p className="text text_type_main-medium">
                                Состав:
                            </p>
                        </div>
                        <div className={`${styles["order-detail-card__main-list"]} `}>

                            {order && getOrderIngredientList(order).map((item: any, index) => {
                                return (
                                    <div key={index} className={`${styles["order-detail-card__main-row"]} mb-4 mr-6`}>
                                        <img className={`${styles["order-detail-card__main-row-img"]} mr-4`}
                                             src={item.image} alt=""/>
                                        <div className={`${styles["order-detail-card__main-row-title"]} mr-4`}>
                                            <p className="text text_type_main-default">
                                                {item.name}
                                            </p>
                                        </div>
                                        <div className={`${styles["order-detail-card__main-row-price"]} `}>
                                            <p className="text text_type_digits-default">1 x {item.price}</p>
                                            <CurrencyIcon type="primary"/>
                                        </div>
                                    </div>)
                            })}
                        </div>
                    </div>

                    <div className={`${styles["order-detail-card__footer"]} `}>
                        <div className={`${styles["order-detail-card__footer-date"]} `}>
                            <p className="text text_type_main-default text_color_inactive">
                                {order.createdAt}
                            </p>
                        </div>
                        <div className={`${styles["order-detail-card__footer-price"]} `}>
                            <p className="text text_type_digits-default">{totalCost}</p>
                            <CurrencyIcon type="primary"/>
                        </div>

                    </div>
                </>)}
        </div>
    );
}
