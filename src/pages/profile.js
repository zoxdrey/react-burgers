import React from "react";
import styles from './profile.module.css';
import OrderList from "../components/order-list/order-list";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import ProfileNav from "../components/profile-nav/profile-nav";
import ProfileUserInfo from "../components/profile-user-info/profile-user-info";

function ProfilePage() {
    let {path, url} = useRouteMatch();

    return (
        <div className={`${styles['main-container']} + mt-20`}>
            <ProfileNav url={url}/>
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
