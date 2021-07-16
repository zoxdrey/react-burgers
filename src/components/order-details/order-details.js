import styles from "./order-details.module.css";
import React from "react";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink} from "react-router-dom";

function OrderDetails() {
    return (
        <NavLink className={`${styles["order-detail-card"]} text m-2 p-6`} to={'/2314235'}>
            <div className={`${styles["order-detail-card__header"]} mb-6`}>
                <div className={`${styles["order-detail-card__header-date"]}`}><p
                    className="text text_type_main-default text_color_inactive">
                    Сегодня, 16:20 i-GMT+3
                </p></div>
            </div>
            <div className={`${styles["order-detail-card__main"]}  mb-6`}>
                <div className={`${styles["order-detail-card__main-title"]} mb-2`}><p
                    className="text text_type_main-medium">
                    Death Star Starship Main бургер
                </p></div>
                <div className={`${styles["order-detail-card__main-state"]}`}><p
                    className="text text_type_main-default">
                    Создан
                </p></div>
                <div className={`${styles["order-detail-card-__footer-list"]} mr-6`}>
                    <img className="img" src="https://code.s3.yandex.net/react/code/bun-02.png" alt=""/>
                    <img className="img" src="https://code.s3.yandex.net/react/code/bun-02.png" alt=""/>
                    <img className="img" src="https://code.s3.yandex.net/react/code/bun-02.png" alt=""/>
                    <img className="img" src="https://code.s3.yandex.net/react/code/bun-02.png" alt=""/>
                </div>
            </div>
            <div className={`${styles["order-detail-card__footer"]}`}>

                <div className={`${styles["order-detail-card__header-number"]}`}>
                    <p
                        className="text text_type_digits-default">
                        #034535
                    </p>
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


export default OrderDetails;
