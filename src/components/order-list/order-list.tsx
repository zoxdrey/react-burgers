import React, {FC} from "react";
import styles from './order-list.module.css';
import {OrderCard} from "./order-card/order-card";
import {TOrderData} from "../../services/types/data";

interface IOrderListProps {
    ordersFeed: TOrderData[]
}

export const OrderList: FC<IOrderListProps> = ({ordersFeed}) => {

    return (
        <div className={`${styles['order-list']}`}>
            {ordersFeed && ordersFeed.map((item) => <OrderCard key={item._id} order={item}/>)}
        </div>
    )
}

export default OrderList;
