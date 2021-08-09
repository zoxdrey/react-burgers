import React, {FC, SyntheticEvent, useState} from "react";
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './forgot-password.module.css';
import {useDispatch} from "react-redux";
import {forgotPassword} from "../services/actions/user";
import {Link, useHistory} from "react-router-dom";

export const ForgotPasswordPage: FC = () => {
    let history = useHistory();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');

    const handleSubmit = (e: SyntheticEvent): void => {
        e.preventDefault();
        dispatch(forgotPassword(email, history));
    };

    return (
        <div className={`${styles['main-container']}`}>
            <div className={`${styles['forgot-password-container']}`}>
                <div
                    className={`${styles['forgot-password-form-title']} text text_type_main-default  mb-6`}>Восстановление
                    пароля
                </div>

                <form className={`${styles['forgot-password-form']}`} name='login-form' onSubmit={handleSubmit}>
                    <div className={`${styles['input']} mb-6`}>
                        <EmailInput onChange={(e) => setEmail(e.target.value)} name={email}
                                    value={email}/>
                    </div>
                    <div className={`${styles['button']} mb-20`}>
                        <Button type="primary" size="medium">
                            Восстановить
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

