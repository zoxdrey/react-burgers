import React, {useState} from "react";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './reset-password.module.css';
import {useDispatch} from "react-redux";
import {resetPassword} from "../services/actions/user";
import {Link, useHistory} from "react-router-dom";

function ResetPasswordPage() {
    let history = useHistory();
    const dispatch = useDispatch();

    const [password, setPassword] = useState('');
    const [mailCode, setMailCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(resetPassword(password, mailCode, history))
    }

    return (
        <div className={`${styles['main-container']}`}>
            <div className={`${styles['reset-password-container']}`}>
                <div className={`${styles['reset-password-form-title']} mb-6`}>Восстановление пароля</div>
                <form className={`${styles['reset-password-form']}`} name='login-form'>
                    <div className={`${styles['input']} mb-6`}>
                        <PasswordInput placeholder={'Укажите e-mail'} onChange={(e) => setPassword(e.target.value)}
                                       icon={"ShowIcon"} name={password}/>
                    </div>
                    <div className={`${styles['input']} mb-6`}>
                        <Input placeholder={'Введите код из письма'} onChange={(e) => setMailCode(e.target.value)}
                               />
                    </div>
                    <div className={`${styles['button']} mb-20`}>
                        <Button type="primary" size="medium" onClick={handleSubmit}>
                            Сохранить
                        </Button>
                    </div>

                    <div className={`${styles['bottom-info']}`}>
                        <p className="text text_type_main-default text_color_inactive mr-2">
                            Вспомнили пароль?
                        </p>
                        <Link to='/login'
                              className={`text text_type_main-default ${styles['link']}`}>
                            Войти
                        </Link>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default ResetPasswordPage;
