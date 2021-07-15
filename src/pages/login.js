import React, {useState} from "react";
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './login.module.css';
import {Link, useHistory} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {loginUser} from "../services/actions/user";

function LoginPage() {
    const dispatch = useDispatch();
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(email, password, history));
    };


    return (
        <div className={`${styles['main-container']}`}>
            <div className={`${styles['login-container']}`}>
                <div className={`${styles['login-form-title']}  mb-6`}>Вход</div>
                <form className={`${styles['login-form']}`} name='login-form'>
                    <div className={`${styles['input']} mb-6`}>
                        <EmailInput placeholder={'E-mail'} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className={`${styles['input']} mb-6`}>
                        <PasswordInput placeholder={'Пароль'} onChange={(e) => setPassword(e.target.value)}
                                       icon={'ShowIcon'}/>
                    </div>
                    <div className={`${styles['button']} mb-20`}>
                        <Button type="primary" size="medium" onClick={handleSubmit}>
                            Войти
                        </Button>
                    </div>
                    <p className="text text_type_main-default text_color_inactive">
                        Вы — новый пользователь?
                        <Link to='/register'>
                            <p className="text text_type_main-default text_color_inactive">Зарегистрироваться</p>
                        </Link>
                    </p>
                    <p className="text text_type_main-default text_color_inactive">
                        Забыли пароль?
                        <Link to='/forgot-password'>
                            <p className="text text_type_main-default text_color_inactive">Восстановить пароль</p>
                        </Link>
                    </p>
                </form>

            </div>

        </div>
    )
}

export default LoginPage;
