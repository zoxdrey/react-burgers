import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './login.module.css';
import {registerUser} from "../services/actions/user";

function RegisterPage() {

    const dispatch = useDispatch();

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(userName, email, password));
    }


    return (
        <div className={`${styles['main-container']}`}>
            <div className={`${styles['login-container']}`}>
                <div className={`${styles['login-form-title']}`}>Регистрация</div>
                <form className={`${styles['login-form']}`} name='login-form'>
                    <Input placeholder={'Имя'} onChange={(e) => setUserName(e.target.value)}/>
                    <EmailInput placeholder={'E-mail'} onChange={(e) => setEmail(e.target.value)}/>
                    <PasswordInput placeholder={'Пароль'} onChange={(e) => setPassword(e.target.value)}
                                   icon={'ShowIcon'}/>
                    <Button type="primary" size="medium" onClick={handleSubmit}>
                        Зарегистрироваться
                    </Button>

                    <p className="text text_type_main-default text_color_inactive">
                        Уже зарегистрированы?
                        <a href='/login'>
                            <p className="text text_type_main-default text_color_inactive">Войти</p>
                        </a>
                    </p>
                </form>

            </div>

        </div>
    )
}

export default RegisterPage;
