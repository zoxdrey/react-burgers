import React, {useState} from "react";
import styles from "../../pages/profile.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {updateUserInfo} from "../../services/actions/user";


function ProfileUserInfo() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducer.user)
    const [userName, setUserName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState('');


    function handleSubmit() {
        dispatch(updateUserInfo(userName, email, password))
    }

    return (
        <div>
            <form className={`${styles['profile-main']}`} onSubmit={handleSubmit} name="user-info-form">
                <div className={`${styles['profile-input']} + mb-6`}>
                    <Input placeholder={'Имя'} value={userName} onChange={(e) => setUserName(e.target.value)}
                           icon={"EditIcon"}
                           size={"default"}/>
                </div>
                <div className={`${styles['profile-input']} + mb-6`}>
                    <EmailInput placeholder={'Логин'} value={email}
                                onChange={(e) => setEmail(e.target.value)} name={email}/>
                </div>
                <div className={`${styles['profile-input']} + mb-6`}>
                    <PasswordInput placeholder={'Пароль'} value={'******'}
                                   onChange={(e) => setPassword(e.target.value)} name={password}/>
                </div>

                <div className={`${styles['button']} mb-20`}>
                    <Button type="primary" size="medium">
                        Сохранить
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default ProfileUserInfo;
