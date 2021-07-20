import React from "react";
import styles from './order-list.module.css';
import OrderCard from "./order-card/order-card";

function OrderList() {

    const testData = [1, 2, 3, 4, 5, 6, 7]
    return (
        <div className={`${styles['order-list']}`}>
            {testData.map((item) => <OrderCard key={item}/>)}
        </div>
    )
}

export default OrderList;
