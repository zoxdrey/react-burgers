import {LOGOUT_ERROR, LOGOUT_REQUEST, LOGOUT_SUCCESS} from "../actions/user";
import {initialUserState} from "./initialUserState";

export const logoutUserReducer = (state = initialUserState, action) => {
    switch (action.type) {
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
};

export default logoutUserReducer;