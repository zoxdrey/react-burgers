import React, {FC, useEffect} from "react";
import styles from './profile.module.css';
import OrderList from "../components/order-list/order-list";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import ProfileNav from "../components/profile-nav/profile-nav";
import ProfileUserInfo from "../components/profile-user-info/profile-user-info";
import {getUserInfo} from "../services/actions/user";
import {wsConnectionStartAction} from "../services/actions/ingredients";
import {useDispatch, useSelector} from "../services/types/hooks";

export const ProfilePage: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(wsConnectionStartAction());
    }, [dispatch]);

    const {orders} = useSelector(state => state.wsReducer)
    const {path, url} = useRouteMatch();

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

