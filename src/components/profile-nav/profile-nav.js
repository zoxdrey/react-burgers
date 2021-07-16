import React from "react";
import styles from "./profile-nav.module.css";
import {NavLink, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../services/actions/user";


function ProfileNav() {
    let history = useHistory();
    const dispatch = useDispatch();
    const refreshToken = localStorage.getItem('token');

    function logoutHandler() {
        dispatch(logoutUser(refreshToken, history));
    }

    return (
        <div>
            <div className={`${styles['profile-nav']} + mr-30`}>
                <NavLink className={`${styles['profile-nav-link']} text text_type_main-medium text_color_inactive mb-5`}
                         to={`/profile`}
                         activeClassName={"active-link"} replace>
                    Профиль
                </NavLink>
                <NavLink className={`${styles['profile-nav-link']} text text_type_main-medium text_color_inactive mb-5`}
                         to={`/profile/orders`}
                         activeClassName={"active-link"}
                         replace>
                    История заказов
                </NavLink>
                <NavLink
                    className={`${styles['profile-nav-link']} text text_type_main-medium text_color_inactive mb-20`}
                    to={`/login`}
                    onClick={logoutHandler} activeClassName={"active-link"} replace>
                    Выход
                </NavLink>
                <p className="text text_type_main-default text_color_inactive">
                    В этом разделе вы можете
                    изменить свои персональные данные
                </p>
            </div>
        </div>
    )
}

export default ProfileNav;
