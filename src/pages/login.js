import React from "react";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './login.module.css';

function LoginPage() {
    return (
        <div className={`${styles['main-container']}`}>
            <div className={`${styles['login-container']}`}>
                <div className={`${styles['login-form-title']}`}>Вход</div>
                <form className={`${styles['login-form']}`} name='login-form'>
                    <Input placeholder={'E-mail'} onChange={(e) => console.log(e)}/>
                    <Input placeholder={'Пароль'} onChange={(e) => console.log(e)} icon={'ShowIcon'}/>
                    <Button type="primary" size="medium">
                        Войти
                    </Button>
                    <p className="text text_type_main-default text_color_inactive">
                        Вы — новый пользователь?
                        <a href='/register'>
                            <p className="text text_type_main-default text_color_inactive">Зарегистрироваться</p>
                        </a>
                    </p>
                    <p className="text text_type_main-default text_color_inactive">
                        Забыли пароль?
                        <a href='/forgot-password'>
                            <p className="text text_type_main-default text_color_inactive">Восстановить пароль</p>
                        </a>
                    </p>
                </form>

            </div>

        </div>
    )
}

export default LoginPage;
