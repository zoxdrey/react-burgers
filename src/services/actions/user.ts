import {baseUrl} from '../../utils/constants'
import {getCookie, setCookie} from "../../utils/cookie";
import {
    FORGOT_PASS_ERROR,
    FORGOT_PASS_REQUEST,
    FORGOT_PASS_SUCCESS,
    GET_USER_INFO_ERROR,
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_ERROR,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    REFRESH_TOKEN_ERROR,
    REFRESH_TOKEN_REQUEST,
    REFRESH_TOKEN_SUCCESS,
    REGISTER_ERROR,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    RESET_PASS_ERROR,
    RESET_PASS_REQUEST,
    RESET_PASS_SUCCESS,
    UPDATE_USER_INFO_ERROR,
    UPDATE_USER_INFO_REQUEST,
    UPDATE_USER_INFO_SUCCESS
} from "../constants/user";

export interface IForgotPasswordErrorAction {
    readonly type: typeof FORGOT_PASS_ERROR
}

export interface IForgotPasswordRequestAction {
    readonly type: typeof FORGOT_PASS_REQUEST
}

export interface IForgotPasswordSuccessAction {
    readonly type: typeof FORGOT_PASS_SUCCESS
}

export type TForgotPassActions =
    IForgotPasswordErrorAction
    | IForgotPasswordRequestAction
    | IForgotPasswordSuccessAction

export interface IGetUserInfoErrorAction {
    readonly type: typeof GET_USER_INFO_ERROR
}

export interface IGetUserInfoRequestAction {
    readonly type: typeof GET_USER_INFO_REQUEST
}

export interface IGetUserInfoSuccessAction {
    readonly type: typeof GET_USER_INFO_SUCCESS
}

export type TGetUserInfoActions = IGetUserInfoErrorAction | IGetUserInfoRequestAction | IGetUserInfoSuccessAction


export interface ILoginErrorAction {
    readonly type: typeof LOGIN_ERROR
}

export interface ILoginRequestAction {
    readonly type: typeof LOGIN_REQUEST
}

export interface ILoginSuccessAction {
    readonly type: typeof LOGIN_SUCCESS
}

export type TLoginActions = ILoginErrorAction | ILoginRequestAction | ILoginSuccessAction


export interface ILogoutErrorAction {
    readonly type: typeof LOGOUT_ERROR
}

export interface ILogoutRequestAction {
    readonly type: typeof LOGOUT_REQUEST
}

export interface ILogoutSuccessAction {
    readonly type: typeof LOGOUT_SUCCESS
}

export type TLogoutActions = ILogoutErrorAction | ILogoutRequestAction | ILogoutSuccessAction


export interface IRefreshTokenErrorAction {
    readonly type: typeof REFRESH_TOKEN_ERROR
}

export interface IRefreshTokenRequestAction {
    readonly type: typeof REFRESH_TOKEN_REQUEST
}

export interface IRefreshTokenSuccessAction {
    readonly type: typeof REFRESH_TOKEN_SUCCESS
}

export type TRefreshTokenActions = IRefreshTokenErrorAction | IRefreshTokenRequestAction | IRefreshTokenSuccessAction


export interface IRegisterErrorAction {
    readonly type: typeof REGISTER_ERROR
}

export interface IRegisterRequestAction {
    readonly type: typeof REGISTER_REQUEST
}

export interface IRegisterSuccessAction {
    readonly type: typeof REGISTER_SUCCESS
}

export type TRegisterActions = IRegisterErrorAction | IRegisterRequestAction | IRegisterSuccessAction


export interface IResetPassErrorAction {
    readonly type: typeof RESET_PASS_ERROR
}

export interface IResetPassRequestAction {
    readonly type: typeof RESET_PASS_REQUEST
}

export interface IResetPassSuccessAction {
    readonly type: typeof RESET_PASS_SUCCESS
}

export type TResetPassActions = IResetPassErrorAction | IResetPassRequestAction | IResetPassSuccessAction


export interface IUpdateUserInfoErrorAction {
    readonly type: typeof UPDATE_USER_INFO_ERROR
}

export interface IUpdateUserInfoRequestAction {
    readonly type: typeof UPDATE_USER_INFO_REQUEST
}

export interface IUpdateUserInfoSuccessAction {
    readonly type: typeof UPDATE_USER_INFO_SUCCESS
}

export type TUpdateUSerInfoActions =
    IUpdateUserInfoErrorAction
    | IUpdateUserInfoRequestAction
    | IUpdateUserInfoSuccessAction

export type TUserActions =
    TForgotPassActions
    | TGetUserInfoActions
    | TLoginActions
    | TLogoutActions
    | TRefreshTokenActions
    | TRegisterActions
    | TResetPassActions
    | TUpdateUSerInfoActions

export const forgotPassErrorAction = (): IForgotPasswordErrorAction => ({
    type: FORGOT_PASS_ERROR
})


export const forgotPassRequestAction = (): IForgotPasswordRequestAction => ({
    type: FORGOT_PASS_REQUEST
})


export const forgotPassSuccessAction = (): IForgotPasswordSuccessAction => ({
    type: FORGOT_PASS_SUCCESS
})


export const getUserInfoErrorAction = (): IGetUserInfoErrorAction => ({
    type: GET_USER_INFO_ERROR
})


export const getUserInfoRequestAction = (): IGetUserInfoRequestAction => ({
    type: GET_USER_INFO_REQUEST
})


export const getUserInfoSuccessAction = (): IGetUserInfoSuccessAction => ({
    type: GET_USER_INFO_SUCCESS
})

export const loginErrorAction = (): ILoginErrorAction => ({
    type: LOGIN_ERROR
})


export const loginRequestAction = (): ILoginRequestAction => ({
    type: LOGIN_REQUEST
})


export const loginSuccessAction = (): ILoginSuccessAction => ({
    type: LOGIN_SUCCESS
})

export const logoutErrorAction = (): ILogoutErrorAction => ({
    type: LOGOUT_ERROR
})


export const logoutRequestAction = (): ILogoutRequestAction => ({
    type: LOGOUT_REQUEST
})


export const logoutSuccessAction = (): ILogoutSuccessAction => ({
    type: LOGOUT_SUCCESS
})

export const refreshTokenErrorAction = (): IRefreshTokenErrorAction => ({
    type: REFRESH_TOKEN_ERROR
})


export const refreshTokenRequestAction = (): IRefreshTokenRequestAction => ({
    type: REFRESH_TOKEN_REQUEST
})


export const refreshTokenSuccessAction = (): IRefreshTokenSuccessAction => ({
    type: REFRESH_TOKEN_SUCCESS
})

export const registerErrorAction = (): IRegisterErrorAction => ({
    type: REGISTER_ERROR
})


export const registerRequestAction = (): IRegisterRequestAction => ({
    type: REGISTER_REQUEST
})


export const registerSuccessAction = (): IRegisterSuccessAction => ({
    type: REGISTER_SUCCESS
})

export const resetPassErrorAction = (): IResetPassErrorAction => ({
    type: RESET_PASS_ERROR
})


export const resetPassRequestAction = (): IResetPassRequestAction => ({
    type: RESET_PASS_REQUEST
})


export const resetPassSuccessAction = (): IResetPassSuccessAction => ({
    type: RESET_PASS_SUCCESS
})

export const updateUserInfoErrorAction = (): IUpdateUserInfoErrorAction => ({
    type: UPDATE_USER_INFO_ERROR
})


export const updateUserInfoRequestAction = (): IUpdateUserInfoRequestAction => ({
    type: UPDATE_USER_INFO_REQUEST
})


export const updateUserInfoSuccessAction = (): IUpdateUserInfoSuccessAction => ({
    type: UPDATE_USER_INFO_SUCCESS
})

export function loginUser(email: string, password: string, history) {
    return function (dispatch) {
        dispatch(loginRequestAction());
        fetch(`${baseUrl}api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "password": password,
            })
        })
            .then(res => _checkResponse(res))
            .then((res) => res.json())
            .then((res) => {
                if (res && res.success) {
                    setCookie('token', res.accessToken);
                    localStorage.setItem('token', res.refreshToken);
                    localStorage.setItem('userName', res.user.name);
                    history.goBack();
                    dispatch({
                        type: LOGIN_SUCCESS,
                        accessToken: res.accessToken,
                        refreshToken: res.refreshToken,
                        user: res.user
                    });
                } else {
                    dispatch({
                        type: LOGIN_ERROR,
                    });
                }
            })
            .catch((err) => {
                dispatch({
                    type: LOGIN_ERROR,
                });
            });
    };
}

export function registerUser(name, email, password, history) {
    return function (dispatch) {
        dispatch({
            type: REGISTER_REQUEST,
        });
        fetch(`${baseUrl}api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "password": password,
                "name": name
            })
        })
            .then(res => _checkResponse(res))
            .then((res) => res.json())
            .then((res) => {
                if (res && res.success) {
                    setCookie('token', res.accessToken);
                    localStorage.setItem('token', res.refreshToken);
                    localStorage.setItem('userName', res.user.name);
                    history.push('/');
                    dispatch({
                        type: REGISTER_SUCCESS,
                        accessToken: res.accessToken,
                        refreshToken: res.refreshToken,
                        user: res.user
                    });
                } else {
                    dispatch({
                        type: REGISTER_ERROR,
                    });
                }
            })
            .catch((err) => {
                dispatch({
                    type: REGISTER_ERROR,
                });
            });
    };
}


export function logoutUser(token, history) {
    return function (dispatch) {
        dispatch({
            type: LOGOUT_REQUEST,
        });
        fetch(`${baseUrl}api/auth/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "token": token
            })
        })
            .then(res => _checkResponse(res))
            .then((res) => res.json())
            .then((res) => {
                if (res && res.success) {
                    setCookie('token', '');
                    localStorage.removeItem('token');
                    localStorage.removeItem('userName');
                    history.push('/');
                    dispatch({
                        type: LOGOUT_SUCCESS,
                    });
                } else {
                    dispatch({
                        type: LOGOUT_ERROR,
                    });
                }
            })
            .catch((err) => {
                dispatch({
                    type: LOGOUT_ERROR,
                });
            });
    };
}

export function forgotPassword(email, history) {
    return function (dispatch) {
        dispatch({
            type: FORGOT_PASS_REQUEST,
        });
        fetch(`${baseUrl}api/password-reset`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
            })
        })
            .then(res => _checkResponse(res))
            .then((res) => res.json())
            .then((res) => {
                if (res && res.success) {
                    history.push('/reset-password');
                    dispatch({
                        type: FORGOT_PASS_SUCCESS,
                    });
                } else {
                    dispatch({
                        type: FORGOT_PASS_ERROR,
                    });
                }
            })
            .catch((err) => {
                dispatch({
                    type: FORGOT_PASS_ERROR,
                });
            });
    };
}

export function resetPassword(password, token, history) {
    return function (dispatch) {
        dispatch({
            type: RESET_PASS_REQUEST,
        });
        fetch(`${baseUrl}api/password-reset/reset`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "password": password,
                "token": token
            })
        })
            .then(res => _checkResponse(res))
            .then((res) => res.json())
            .then((res) => {
                if (res && res.success) {
                    history.push('/profile');
                    dispatch({
                        type: RESET_PASS_SUCCESS,

                    });
                } else {
                    dispatch({
                        type: RESET_PASS_ERROR
                    });
                }
            })
            .catch((err) => {
                dispatch({
                    type: RESET_PASS_ERROR,
                });
            });
    };
}

export function refreshToken(token, cb?) {
    return function (dispatch) {
        dispatch({
            type: REFRESH_TOKEN_REQUEST,
        });
        fetch(`${baseUrl}api/auth/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "token": token
            })
        })
            .then(res => _checkResponse(res))
            .then((res) => res.json())
            .then((res) => {
                if (res && res.success) {
                    localStorage.setItem('token', res.data.refreshToken)
                    setCookie('token', res.data.accessToken)
                    cb();
                    dispatch({
                        type: REFRESH_TOKEN_SUCCESS,
                        token: res.data,
                    });
                } else {
                    dispatch({
                        type: REFRESH_TOKEN_ERROR,
                    });
                }
            })
            .catch((err) => {
                dispatch({
                    type: REFRESH_TOKEN_ERROR,
                });
            });
    };
}

export function getUserInfo() {
    return function (dispatch) {
        dispatch({
            type: GET_USER_INFO_REQUEST,
        });
        fetch(`${baseUrl}api/auth/user`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: getCookie('token') as string
                },
            }
        )
            .then(res => _checkResponse(res))
            .then((res) => res.json())
            .then((res) => {
                if (res && res.success) {
                    dispatch({
                        type: GET_USER_INFO_SUCCESS,
                        user: res.user,
                    });
                } else {
                    dispatch({
                        type: GET_USER_INFO_ERROR,
                    });
                }
            })
            .catch((err) => {
                dispatch({
                    type: GET_USER_INFO_ERROR,
                });
                if (err) {
                    dispatch(refreshToken(localStorage.getItem('token')), getUserInfo);
                }
            });
    };
}

export function updateUserInfo(name, email, password) {
    return function (dispatch) {
        dispatch({
            type: UPDATE_USER_INFO_REQUEST,
        });
        fetch(`${baseUrl}api/auth/user`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: getCookie('token') as string
            },
            body: JSON.stringify({
                "email": email,
                "password": password,
                "name": name
            })
        })
            .then(res => _checkResponse(res))
            .then((res) => res.json())
            .then((res) => {
                if (res && res.success) {
                    dispatch({
                        type: UPDATE_USER_INFO_SUCCESS,
                        user: res.user,
                    });
                } else {
                    dispatch({
                        type: UPDATE_USER_INFO_ERROR,
                    });
                }
            })
            .catch((err) => {
                dispatch({
                    type: UPDATE_USER_INFO_ERROR,
                });
            });
    };


}

function _checkResponse(res) {
    if (res.ok) {
        return res;
    }
    return Promise.reject(res);
}
