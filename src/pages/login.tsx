import React, {FC, SyntheticEvent, useState} from "react";
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './login.module.css';
import {Link, useHistory} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {loginUser} from "../services/actions/user";

export const LoginPage: FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: SyntheticEvent): void => {
        e.preventDefault();
        dispatch(loginUser(email, password, history));
    };


    return (
        <div className={`${styles['main-container']}`}>
            <div className={`${styles['login-container']}`}>
                <div className={`${styles['login-form-title']} text text_type_main-default  mb-6`}>Вход</div>
                <form className={`${styles['login-form']}`} name='login-form' onSubmit={handleSubmit}>
                    <div className={`${styles['input']} mb-6`}>
                        <EmailInput onChange={(e) => setEmail(e.target.value)} name={email}
                                    value={email}/>
                    </div>
                    <div className={`${styles['input']} mb-6`}>
                        <PasswordInput onChange={(e) => setPassword(e.target.value)}
                                       name={password} value={password}/>
                    </div>
                    <div className={`${styles['button']} mb-20`}>
                        <Button type="primary" size="medium">
                            Войти
                        </Button>
                    </div>
                    <div className={`${styles['bottom-info']} mb-4`}>
                        <p className="text text_type_main-default text_color_inactive mr-2">
                            Вы — новый пользователь?
                        </p>
                        <Link to='/register'
                              className={`text text_type_main-default ${styles['link']}`}>
                            Зарегистрироваться
                        </Link>
                    </div>
                    <div className={`${styles['bottom-info']}`}>
                        <p className="text text_type_main-default text_color_inactive mr-2">
                            Забыли пароль?
                        </p>
                        <Link to='/forgot-password'
                              className={`text text_type_main-default ${styles['link']}`}>
                            Восстановить пароль
                        </Link>
                    </div>
                </form>

            </div>

        </div>
    )
}

