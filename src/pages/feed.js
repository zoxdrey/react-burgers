import React from "react";
import styles from './profile.module.css';
import OrderList from "../components/order-list/order-list";
import OrderSummary from '../components/order-summary/order-summary';

function FeedPage() {


    return (
        <div className={`${styles['main-container']} + mt-20`}>
            <OrderList/>
            <OrderSummary/>
        </div>
    )
}

export default FeedPage;
