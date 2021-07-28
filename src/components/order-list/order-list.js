import React from "react";
import styles from './order-list.module.css';
import OrderCard from "./order-card/order-card";

function OrderList({ordersFeed}) {

    return (
        <div className={`${styles['order-list']}`}>
            {ordersFeed && ordersFeed.map((item) => <OrderCard key={item._id} order={item}/>)}
        </div>
    )
}

export default OrderList;
