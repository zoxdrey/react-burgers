import {LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS} from "../actions/user";
import {initialUserState} from "./initialUserState";

export const registerUserReducer = (state = initialUserState, action) => {
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
        default: {
            return state;
        }
    }
};

export default registerUserReducer;