import React from "react";
import styles from "../../pages/profile.module.css";
import {EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";


function ProfileUserInfo() {

    return (
        <div>
            <div className={`${styles['profile-main']}`}>
                <div className={`${styles['profile-input']} + mb-6`}>
                    <Input placeholder={'Имя'} value={'Марк'} onChange={(e) => console.log(e)} icon={"EditIcon"}
                           size={"default"}/>
                </div>
                <div className={`${styles['profile-input']} + mb-6`}>
                    <EmailInput placeholder={'Логин'} value={'mail@stellar.burgers'}
                                onChange={(e) => console.log(e)}/>
                </div>
                <div className={`${styles['profile-input']} + mb-6`}>
                    <PasswordInput placeholder={'Пароль'} value={'******'} onChange={(e) => console.log(e)}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileUserInfo;
