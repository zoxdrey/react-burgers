import React from "react";
import styles from './order-summary.module.css';

function OrderSummary({ordersFeed, total, totalToday}) {

    const doneOrders = ordersFeed.filter((item) => {
        return item.status === 'done'
    })

    const pendingOrders = ordersFeed.filter((item) => {
        return item.status === 'pending'
    })

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
                        {doneOrders.map((item) => {
                            return (<p className="text text_type_digits-default" key={item._id}>
                                {item.number}
                            </p>)
                        })}
                    </div>
                </div>
                <div className={`${styles['order-summary__section-in-work']}`}>
                    <div className={`${styles['order-summary__section-in-work-header']}  mb-6`}>
                        <p className="text text_type_main-medium">
                            В работе:
                        </p>
                    </div>
                    <div className={`${styles['order-summary__section-in-work-list']}`}>
                        {pendingOrders.map((item) => {
                            return (<p className="text text_type_digits-default" key={item._id}>
                                {item.number}
                            </p>)
                        })}
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
                    <p className="text text_type_digits-large">{total}</p>
                </div>
            </div>
            <div className={`${styles['order-summary__section']}`}>
                <div className={`${styles['order-summary__section-title']}`}>
                    <p className="text text_type_main-medium">
                        Выполнено за сегодня:
                    </p>
                </div>
                <div className={`${styles['order-summary__section-main']}`}>
                    <p className="text text_type_digits-large">{totalToday}</p>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary;
