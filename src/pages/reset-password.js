import React, {useState} from "react";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './login.module.css';
import {useDispatch} from "react-redux";
import {resetPassword} from "../services/actions/user";

function ResetPasswordPage() {

    const dispatch = useDispatch();

    const [password, setPassword] = useState('');
    const [mailCode, setMailCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(resetPassword(password, mailCode))
    }

    return (
        <div className={`${styles['main-container']}`}>
            <div className={`${styles['login-container']}`}>
                <div className={`${styles['login-form-title']}`}>Восстановление пароля</div>
                <form className={`${styles['login-form']}`} name='login-form'>
                    <PasswordInput placeholder={'Укажите e-mail'} onChange={(e) => setPassword(e.target.value)}
                                   icon={"ShowIcon"}/>
                    <Input placeholder={'Введите код из письма'} onChange={(e) => setMailCode(e.target.value)}/>
                    <Button type="primary" size="medium" onClick={handleSubmit}>
                        Сохранить
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

export default ResetPasswordPage;
