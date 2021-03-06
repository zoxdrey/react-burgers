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
    REGISTER_ERROR,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    UPDATE_USER_INFO_ERROR,
    UPDATE_USER_INFO_REQUEST,
    UPDATE_USER_INFO_SUCCESS
} from "../constants/user";
import {TUserActions} from "../actions/user";
import {TUser} from "../types/data";

export type TUserInitialState = {
    loginRequest: boolean,
    loginError: boolean,
    loginSuccess: boolean,
    logoutRequest: boolean,
    logoutError: boolean,
    logoutSuccess: boolean,
    accessToken?: string | null,
    refreshToken?: string | null,
    user?: TUser,
    getUserInfoRequest: boolean,
    getUserInfoError: boolean,
    getUserInfoSuccess: boolean,
    registerRequest: boolean,
    registerError: boolean,
    registerSuccess: boolean,
    updateUserInfoRequest: boolean,
    updateUserInfoInfoError: boolean,
    updateUserInfoInfoSuccess: boolean,

    forgotPassRequest: boolean,
    forgotPassError: boolean,
    forgotPassSuccess: boolean,
}

export const userInitialState: TUserInitialState = {
    loginRequest: false,
    loginError: false,
    loginSuccess: false,

    registerRequest: false,
    registerError: false,
    registerSuccess: false,

    accessToken: null,
    refreshToken: null,
    user: {
        email: '',
        name: ''
    },

    logoutRequest: false,
    logoutError: false,
    logoutSuccess: false,

    getUserInfoRequest: false,
    getUserInfoError: false,
    getUserInfoSuccess: false,

    updateUserInfoRequest: false,
    updateUserInfoInfoError: false,
    updateUserInfoInfoSuccess: false,
    forgotPassRequest: false,
    forgotPassError: false,
    forgotPassSuccess: false,


}

export const userReducer = (state = userInitialState, action: TUserActions | { type: 'for_test' }): TUserInitialState => {
        switch (action.type) {
            case LOGIN_REQUEST: {
                return {
                    ...state,
                    loginRequest: true,
                    loginError: false,
                    loginSuccess: false,
                };
            }
            case LOGIN_SUCCESS: {
                return {
                    ...state,
                    accessToken: action.accessToken,
                    refreshToken: action.refreshToken,
                    user: action.user,
                    loginRequest: false,
                    loginError: false,
                    loginSuccess: true,
                };
            }
            case LOGIN_ERROR: {
                return {
                    ...state,
                    accessToken: null,
                    refreshToken: null,
                    loginRequest: false,
                    loginError: false,
                    loginSuccess: false,
                };
            }
            case LOGOUT_REQUEST: {
                return {
                    ...state,
                    logoutRequest: true,
                    logoutError: false,
                    logoutSuccess: false,
                };
            }
            case LOGOUT_SUCCESS: {
                return {
                    ...state,
                    accessToken: null,
                    refreshToken: null,
                    user: {name: '', email: ''},
                    logoutRequest: false,
                    logoutError: false,
                };
            }
            case LOGOUT_ERROR: {
                return {
                    ...state,
                    logoutRequest: false,
                    logoutError: false,
                    logoutSuccess: false,
                };
            }
            case FORGOT_PASS_REQUEST: {
                return {
                    ...state,
                    forgotPassRequest: true,
                    forgotPassError: false,
                    forgotPassSuccess: false,
                };
            }
            case FORGOT_PASS_SUCCESS: {
                return {
                    ...state,
                    accessToken: null,
                    refreshToken: null,
                    user: {name: '', email: ''},
                    forgotPassRequest: false,
                    forgotPassError: false,
                    forgotPassSuccess: true,
                };
            }
            case FORGOT_PASS_ERROR: {
                return {
                    ...state,
                    forgotPassRequest: false,
                    forgotPassError: true,
                    forgotPassSuccess: false,
                };
            }
            case REGISTER_REQUEST: {
                return {
                    ...state,
                    registerRequest: true,
                    registerError: false,
                    registerSuccess: false,
                };
            }
            case REGISTER_SUCCESS: {
                return {
                    ...state,
                    accessToken: action.accessToken,
                    registerRequest: false,
                    registerError: false,
                    registerSuccess: true,
                };
            }
            case REGISTER_ERROR: {
                return {
                    ...state,
                    registerRequest: false,
                    registerError: true,
                    registerSuccess: false,
                };
            }
            case GET_USER_INFO_REQUEST: {
                return {
                    ...state,
                    getUserInfoRequest: true,
                    getUserInfoError: false,
                    getUserInfoSuccess: false,
                };
            }
            case GET_USER_INFO_SUCCESS: {
                return {
                    ...state,
                    accessToken: action.accessToken,
                    refreshToken: action.refreshToken,
                    user: action.user,
                    getUserInfoRequest: false,
                    getUserInfoError: false,
                    getUserInfoSuccess: true,
                };
            }
            case GET_USER_INFO_ERROR: {
                return {
                    ...state,
                    accessToken: null,
                    refreshToken: null,
                    getUserInfoRequest: false,
                    getUserInfoError: true,
                    getUserInfoSuccess: false,
                };
            }
            case UPDATE_USER_INFO_REQUEST: {
                return {
                    ...state,
                    updateUserInfoRequest: true,
                    updateUserInfoInfoError: false,
                    updateUserInfoInfoSuccess: false,
                };
            }
            case UPDATE_USER_INFO_SUCCESS: {
                return {
                    ...state,
                    accessToken: action.accessToken,
                    refreshToken: action.refreshToken,
                    user: action.user,
                    updateUserInfoRequest: false,
                    updateUserInfoInfoError: false,
                    updateUserInfoInfoSuccess: true,
                };
            }
            case UPDATE_USER_INFO_ERROR: {
                return {
                    ...state,
                    accessToken: null,
                    refreshToken: null,
                    updateUserInfoRequest: false,
                    updateUserInfoInfoError: true,
                    updateUserInfoInfoSuccess: false,
                };
            }
            default: {
                return state;
            }
        }
    }
;