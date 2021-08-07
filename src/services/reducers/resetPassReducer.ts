import {RESET_PASS_ERROR, RESET_PASS_REQUEST, RESET_PASS_SUCCESS} from "../constants/user";
import {initialUserState, TInitialUserState} from "./initialUserState";
import {TUserActions} from "../actions/user";

export const resetPassReducer = (state = initialUserState, action: TUserActions): TInitialUserState => {
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
