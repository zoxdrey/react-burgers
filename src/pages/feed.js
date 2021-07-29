import React, {useEffect} from "react";
import styles from './feed.module.css';
import OrderList from "../components/order-list/order-list";
import OrderSummary from '../components/order-summary/order-summary';
import {useDispatch, useSelector} from "react-redux";
import {WS_CONNECTION_START} from "../services/actions/ingredients";

function FeedPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: WS_CONNECTION_START});
    }, [dispatch]);
    const {error, orders, wsConnected, total, totalToday} = useSelector(state => state.wsReducer)
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

export default FeedPage;
