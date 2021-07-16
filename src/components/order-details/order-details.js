import styles from "./order-details.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

function OrderDetails() {
    return (
        <NavLink className={`${styles["order-detail-card"]} `} to={'/2314235'}>
            <div className={`${styles["order-detail-card__header"]} mb-15`}>
                <div className={`${styles["order-detail-card__header-number"]} mb-10`}>
                    <p className="text text_type_digits-default">#034533</p>
                </div>
                <div className={`${styles["order-detail-card__header-title"]} mb-3`}>
                    <p className="text text_type_main-medium">
                        Black Hole Singularity острый бургер
                    </p>

                </div>
                <div className={`${styles["order-detail-card__header-state"]} `}>
                    <p className="text text_type_main-default">
                        Выполнен
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
                    <div className={`${styles["order-detail-card__main-row"]} mb-4 mr-6`}>
                        <img className={`${styles["order-detail-card__main-row-img"]} mr-4`}
                             src="https://code.s3.yandex.net/react/code/bun-02.png" alt=""/>
                        <div className={`${styles["order-detail-card__main-row-title"]} mr-4`}>
                            <p className="text text_type_main-default">
                                Флюоресцентная булка R2-D3
                            </p>
                        </div>
                        <div className={`${styles["order-detail-card__main-row-price"]} `}>
                            <p className="text text_type_digits-default">1 x 510</p>
                            <CurrencyIcon type="primary"/>
                        </div>
                    </div>
                    <div className={`${styles["order-detail-card__main-row"]}  mb-4 mr-6`}>
                        <img className={`${styles["order-detail-card__main-row-img"]} mr-4`}
                             src="https://code.s3.yandex.net/react/code/bun-02.png" alt=""/>
                        <div className={`${styles["order-detail-card__main-row-title"]} mr-4`}>
                            <p className="text text_type_main-default">
                                Флюоресцентная булка R2-D3
                            </p>
                        </div>
                        <div className={`${styles["order-detail-card__main-row-price"]} `}>
                            <p className="text text_type_digits-default">1 x 510</p>
                            <CurrencyIcon type="primary"/>
                        </div>
                    </div>
                    <div className={`${styles["order-detail-card__main-row"]}  mb-4 mr-6`}>
                        <img className={`${styles["order-detail-card__main-row-img"]} mr-4`}
                             src="https://code.s3.yandex.net/react/code/bun-02.png" alt=""/>
                        <div className={`${styles["order-detail-card__main-row-title"]} mr-4`}>
                            <p className="text text_type_main-default">
                                Флюоресцентная булка R2-D3
                            </p>
                        </div>
                        <div className={`${styles["order-detail-card__main-row-price"]} `}>
                            <p className="text text_type_digits-default">1 x 510</p>
                            <CurrencyIcon type="primary"/>
                        </div>
                    </div>
                    <div className={`${styles["order-detail-card__main-row"]}  mb-4 mr-6`}>
                        <img className={`${styles["order-detail-card__main-row-img"]} mr-4`}
                             src="https://code.s3.yandex.net/react/code/bun-02.png" alt=""/>
                        <div className={`${styles["order-detail-card__main-row-title"]} mr-4`}>
                            <p className="text text_type_main-default">
                                Флюоресцентная булка R2-D3
                            </p>
                        </div>
                        <div className={`${styles["order-detail-card__main-row-price"]} `}>
                            <p className="text text_type_digits-default">1 x 510</p>
                            <CurrencyIcon type="primary"/>
                        </div>
                    </div>
                    <div className={`${styles["order-detail-card__main-row"]}  mb-4 mr-6`}>
                        <img className={`${styles["order-detail-card__main-row-img"]} mr-4`}
                             src="https://code.s3.yandex.net/react/code/bun-02.png" alt=""/>
                        <div className={`${styles["order-detail-card__main-row-title"]} mr-4`}>
                            <p className="text text_type_main-default">
                                Флюоресцентная булка R2-D3
                            </p>
                        </div>
                        <div className={`${styles["order-detail-card__main-row-price"]} `}>
                            <p className="text text_type_digits-default">1 x 510</p>
                            <CurrencyIcon type="primary"/>
                        </div>
                    </div>
                    <div className={`${styles["order-detail-card__main-row"]}  mb-4 mr-6`}>
                        <img className={`${styles["order-detail-card__main-row-img"]} mr-4`}
                             src="https://code.s3.yandex.net/react/code/bun-02.png" alt=""/>
                        <div className={`${styles["order-detail-card__main-row-title"]} mr-4`}>
                            <p className="text text_type_main-default">
                                Флюоресцентная булка R2-D3
                            </p>
                        </div>
                        <div className={`${styles["order-detail-card__main-row-price"]} `}>
                            <p className="text text_type_digits-default">1 x 510</p>
                            <CurrencyIcon type="primary"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles["order-detail-card__footer"]} `}>
                <div className={`${styles["order-detail-card__footer-date"]} `}>
                    <p className="text text_type_main-default text_color_inactive">
                        Вчера, 13:50 i-GMT+3
                    </p>
                </div>
                <div className={`${styles["order-detail-card__footer-price"]} `}>
                    <p className="text text_type_digits-default">510</p>

                    <CurrencyIcon type="primary"/>
                </div>

            </div>
        </NavLink>
    );
}


export default OrderDetails;
