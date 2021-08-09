import React, {FC, useEffect} from "react";
import styles from './feed.module.css';
import OrderList from "../components/order-list/order-list";
import {OrderSummary} from '../components/order-summary/order-summary';

import {wsConnectionStartAction} from "../services/actions/ingredients";
import {useDispatch, useSelector} from "../services/types/hooks";

export const FeedPage: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(wsConnectionStartAction());
    }, [dispatch]);
    const {orders, total, totalToday} = useSelector(state => state.wsReducer)
    return (

        <div className={`${styles['main-container']} + mt-20`}>
            {orders && (
                <>
                    <OrderList ordersFeed={orders}/>
                    <OrderSummary ordersFeed={orders} total={total} totalToday={totalToday}/>
                </>)}

        </div>

    )
}
