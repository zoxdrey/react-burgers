import React, {useEffect} from "react";
import styles from './feed.module.css';
import OrderList from "../components/order-list/order-list";
import OrderSummary from '../components/order-summary/order-summary';
import {useDispatch, useSelector} from "react-redux";
import {WS_CONNECTION_START} from "../services/actions/ingredients";

function FeedPage() {



    const {error, messages, wsConnected} = useSelector(state => state.wsReducer)


    return (

        <div className={`${styles['main-container']} + mt-20`}>
            {wsConnected && (
                <>
                    <OrderList ordersFeed={messages}/>
                    <OrderSummary ordersFeed={messages}/>
                </>)}

        </div>

    )
}

export default FeedPage;
