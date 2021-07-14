import {FORGOT_PASS_ERROR, FORGOT_PASS_REQUEST, FORGOT_PASS_SUCCESS} from "../actions/user";
import {initialUserState} from "./initialUserState";

export const forgotPassReducer = (state = initialUserState, action) => {
    switch (action.type) {
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
                user: null,
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
        default: {
            return state;
        }
    }
};

export default forgotPassReducer;