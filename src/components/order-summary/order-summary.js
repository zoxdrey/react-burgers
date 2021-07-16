import React from "react";
import styles from './order-summary.module.css';

function OrderSummary() {

    return (
        <div className={`${styles['order-summary']} ml-15`}>
            <div className={`${styles['order-summary__section']} mb-15`}>
                <div className={`${styles['order-summary__section-complete']} mr-9`}>
                    <div className={`${styles['order-summary__section-complete-header']} mb-6`}>
                        <p className="text text_type_main-medium">
                            Готовы:
                        </p>
                    </div>
                    <div className={`${styles['order-summary__section-complete-list']}`}>
                        <p className="text text_type_digits-default">
                            034533
                        </p>
                        <p className="text text_type_digits-default">
                            034533
                        </p>
                        <p className="text text_type_digits-default">
                            034533
                        </p>
                        <p className="text text_type_digits-default">
                            034533
                        </p>
                        <p className="text text_type_digits-default">
                            034533
                        </p>

                    </div>
                </div>
                <div className={`${styles['order-summary__section-in-work']}`}>
                    <div className={`${styles['order-summary__section-in-work-header']}  mb-6`}>
                        <p className="text text_type_main-medium">
                            В работе:
                        </p>
                    </div>
                    <div className={`${styles['order-summary__section-in-work-list']}`}>
                        <p className="text text_type_digits-default">
                            034538
                        </p>
                        <p className="text text_type_digits-default">
                            034533
                        </p>
                        <p className="text text_type_digits-default">
                            034533
                        </p>
                        <p className="text text_type_digits-default">
                            034533
                        </p>
                        <p className="text text_type_digits-default">
                            034533
                        </p>
                    </div>
                </div>
            </div>
            <div className={`${styles['order-summary__section']} mb-15`}>
                <div className={`${styles['order-summary__section-title']}`}>
                    <p className="text text_type_main-medium">
                        Выполнено за все время:
                    </p>
                </div>
                <div className={`${styles['order-summary__section-main']}`}>
                    <p className="text text_type_digits-large">1234567890</p>
                </div>
            </div>
            <div className={`${styles['order-summary__section']}`}>
                <div className={`${styles['order-summary__section-title']}`}>
                    <p className="text text_type_main-medium">
                        Выполнено за сегодня:
                    </p>
                </div>
                <div className={`${styles['order-summary__section-main']}`}>
                    <p className="text text_type_digits-large">1234567890</p>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary;
