import {baseUrl} from '../../utils/constants'
import {getCookie, setCookie} from "../../utils/cookie";
import React from "react";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_ERROR";

export const FORGOT_PASS_REQUEST = "FORGOT_PASS_REQUEST";
export const FORGOT_PASS_SUCCESS = "FORGOT_PASS_SUCCESS";
export const FORGOT_PASS_ERROR = "FORGOT_PASS_ERROR";

export const RESET_PASS_REQUEST = "RESET_PASS_REQUEST";
export const RESET_PASS_SUCCESS = "RESET_PASS_SUCCESS";
export const RESET_PASS_ERROR = "RESET_PASS_ERROR";

export const REFRESH_TOKEN_REQUEST = "REFRESH_TOKEN_REQUEST";
export const REFRESH_TOKEN_SUCCESS = "REFRESH_TOKEN_SUCCESS";
export const REFRESH_TOKEN_ERROR = "REFRESH_TOKEN_ERROR";

export const GET_USER_INFO_REQUEST = "GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_ERROR = "GET_USER_INFO_ERROR";

export const UPDATE_USER_INFO_REQUEST = "UPDATE_USER_INFO_REQUEST";
export const UPDATE_USER_INFO_SUCCESS = "UPDATE_USER_INFO_SUCCESS";
export const UPDATE_USER_INFO_ERROR = "UPDATE_USER_INFO_ERROR";


export function loginUser(email, password, history) {
    return function (dispatch) {
        dispatch({
            type: LOGIN_REQUEST,
        });
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

export function refreshToken(token, cb) {
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
                    Authorization: getCookie('token')
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
                Authorization: getCookie('token')
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
