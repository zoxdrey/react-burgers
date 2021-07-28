import React, {useEffect} from "react";
import styles from './profile.module.css';
import OrderList from "../components/order-list/order-list";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import ProfileNav from "../components/profile-nav/profile-nav";
import ProfileUserInfo from "../components/profile-user-info/profile-user-info";
import {useDispatch, useSelector} from "react-redux";
import {getUserInfo} from "../services/actions/user";
import {WS_CONNECTION_START} from "../services/actions/ingredients";

function ProfilePage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: WS_CONNECTION_START});
    }, [dispatch]);

    const {error, orders, wsConnected, total, totalToday} = useSelector(state => state.wsReducer)
    let {path, url} = useRouteMatch();

    const user = useSelector(state => state.userReducer.user)
    useEffect(() => {
        dispatch(getUserInfo())
    }, [dispatch])
    return (
        <div className={`${styles['main-container']} + mt-20`}>
            <ProfileNav/>
            <Switch>
                <Route exact path={`${path}/orders`}>
                    <OrderList ordersFeed={orders}/>
                </Route>
                <Route exact path={path}>
                    <ProfileUserInfo/>
                </Route>
            </Switch>
        </div>
    )
}

export default ProfilePage;
