import React, {useEffect} from "react";
import styles from './profile.module.css';
import OrderList from "../components/order-list/order-list";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import ProfileNav from "../components/profile-nav/profile-nav";
import ProfileUserInfo from "../components/profile-user-info/profile-user-info";
import {useDispatch, useSelector} from "react-redux";
import {getUserInfo} from "../services/actions/user";

function ProfilePage() {
    let {path, url} = useRouteMatch();
    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducer.user)
    useEffect(() => {
        dispatch(getUserInfo())
    }, [dispatch])
    return (
        <div className={`${styles['main-container']} + mt-20`}>
            <ProfileNav/>
            <Switch>
                <Route exact path={`${path}/orders`}>
                    <OrderList/>
                </Route>
                <Route exact path={path}>
                    <ProfileUserInfo/>
                </Route>
            </Switch>
        </div>
    )
}

export default ProfilePage;
