import React from "react";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './login.module.css';

function RegisterPage() {
    return (
        <div className={`${styles['main-container']}`}>
            <div className={`${styles['login-container']}`}>
                <div className={`${styles['login-form-title']}`}>Регистрация</div>
                <form className={`${styles['login-form']}`} name='login-form'>
                    <Input placeholder={'Имя'} onChange={(e) => console.log(e)}/>
                    <Input placeholder={'E-mail'} onChange={(e) => console.log(e)}/>
                    <Input placeholder={'Пароль'} onChange={(e) => console.log(e)} icon={'ShowIcon'}/>
                    <Button type="primary" size="medium">
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
