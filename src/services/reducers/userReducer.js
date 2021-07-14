import {initialUserState} from "./initialUserState";
import {LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_ERROR, LOGOUT_REQUEST, LOGOUT_SUCCESS} from "../actions/user";

export const userReducer = (state = initialUserState, action) => {
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
                    user: null,
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
            default: {
                return state;
            }
        }
    }
;

export default userReducer;