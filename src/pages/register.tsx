import React, {FC, useState} from "react";
import {useDispatch} from 'react-redux';
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './register.module.css';
import {registerUser} from "../services/actions/user";
import {Link, useHistory} from "react-router-dom";

export const RegisterPage: FC = () => {
    let history = useHistory();
    const dispatch = useDispatch();

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(userName, email, password, history));
    }


    return (
        <div className={`${styles['main-container']}`}>
            <div className={`${styles['register-container']}`}>
                <div className={`${styles['register-form-title']} text text_type_main-default mb-9`}>Регистрация</div>
                <form className={`${styles['register-form']}`} name='login-form' onSubmit={handleSubmit}>
                    <div className={`${styles['input']} mb-6`}>
                        <Input placeholder={'Имя'} onChange={(e) => setUserName(e.target.value)} value={userName}/>
                    </div>
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
                            Зарегистрироваться
                        </Button>
                    </div>


                    <div className={`${styles['bottom-info']}`}><p
                        className="text text_type_main-default text_color_inactive mr-2">
                        Уже зарегистрированы? </p>
                        <Link to='/login' className={`text text_type_main-default ${styles['link']}`}>
                            Войти
                        </Link>

                    </div>
                </form>

            </div>

        </div>
    )
}
