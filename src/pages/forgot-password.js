import React, {useState} from "react";
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './login.module.css';
import {useDispatch} from "react-redux";
import {forgotPassword} from "../services/actions/user";
import {useHistory} from "react-router-dom";

function ForgotPasswordPage() {
    let history = useHistory();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(forgotPassword(email, history));
    };

    return (
        <div className={`${styles['main-container']}`}>
            <div className={`${styles['login-container']}`}>
                <div className={`${styles['login-form-title']}`}>Восстановление пароля</div>
                <form className={`${styles['login-form']}`} name='login-form'>
                    <EmailInput placeholder={'Укажите e-mail'} onChange={(e) => setEmail(e.target.value)}/>
                    <Button type="primary" size="medium" onClick={handleSubmit}>
                        Восстановить
                    </Button>
                    <p className="text text_type_main-default text_color_inactive">
                        Вспомнили пароль?
                        <a href='/login'>
                            <p className="text text_type_main-default text_color_inactive">Войти</p>
                        </a>
                    </p>
                </form>

            </div>

        </div>
    )
}

export default ForgotPasswordPage;
