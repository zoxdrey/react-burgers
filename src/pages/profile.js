import React from "react";
import styles from './profile.module.css';
import {EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logoutUser} from "../services/actions/user";

function ProfilePage() {
    let history = useHistory();


    const dispatch = useDispatch();
    const refreshToken = localStorage.getItem('token');

    function logoutHandler() {
        dispatch(logoutUser(refreshToken, history));
    }

    return (
        <div className={`${styles['main-container']} + mt-20`}>
            <div className={`${styles['profile-nav']} + mr-30`}>
                <NavLink className={`${styles['profile-nav-link']} + mb-5`} to={'/profile'}>
                    <p className="text text_type_main-medium">
                        Профиль
                    </p></NavLink>
                <NavLink className={`${styles['profile-nav-link']} + mb-5`} to={'/profile/orders'}>
                    <p className="text text_type_main-medium text_color_inactive">
                        История заказов
                    </p></NavLink>
                <NavLink className={`${styles['profile-nav-link']} + mb-20`} to={'/profile/'} onClick={logoutHandler}>
                    <p className="text text_type_main-medium text_color_inactive">
                        Выход
                    </p></NavLink>
                <p className="text text_type_main-small text_color_inactive">
                    В этом разделе вы можете
                    изменить свои персональные данные
                </p>
            </div>
            <div className={`${styles['profile-main']}`}>
                <div className={`${styles['profile-input']} + mb-6`}>
                    <Input placeholder={'Имя'} value={'Марк'} onChange={(e) => console.log(e)} icon={"EditIcon"}
                           size={"default"}/>
                </div>
                <div className={`${styles['profile-input']} + mb-6`}>
                    <EmailInput placeholder={'Логин'} value={'mail@stellar.burgers'}
                                onChange={(e) => console.log(e)}/>
                </div>
                <div className={`${styles['profile-input']} + mb-6`}>
                    <PasswordInput placeholder={'Пароль'} value={'******'} onChange={(e) => console.log(e)}/>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;
