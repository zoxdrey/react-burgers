import React from "react";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './login.module.css';

function ResetPasswordPage() {
    return (
        <div className={`${styles['main-container']}`}>
            <div className={`${styles['login-container']}`}>
                <div className={`${styles['login-form-title']}`}>Восстановление пароля</div>
                <form className={`${styles['login-form']}`} name='login-form'>
                    <Input placeholder={'Укажите e-mail'} onChange={(e) => console.log(e)} icon={"ShowIcon"}/>
                    <Input placeholder={'Укажите e-mail'} onChange={(e) => console.log(e)}/>
                    <Button type="primary" size="medium">
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
