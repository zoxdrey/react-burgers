import {RESET_PASS_ERROR, RESET_PASS_REQUEST, RESET_PASS_SUCCESS} from "../actions/user";
import {initialUserState} from "./initialUserState";

export const resetPassReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case RESET_PASS_REQUEST: {
            return {
                ...state,
                resetPassRequest: true,
                resetPassError: false,
                resetPassSuccess: false,
            };
        }
        case RESET_PASS_SUCCESS: {
            return {
                ...state,
                accessToken: action.accessToken,
                refreshToken: action.refreshToken,
                user: action.user,
                resetPassRequest: false,
                resetPassError: false,
                resetPassSuccess: true,
            };
        }
        case RESET_PASS_ERROR: {
            return {
                ...state,
                accessToken: null,
                refreshToken: null,
                resetPassRequest: false,
                resetPassError: true,
                resetPassSuccess: false,
            };
        }
        default: {
            return state;
        }
    }
};

export default resetPassReducer;