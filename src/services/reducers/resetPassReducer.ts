import {RESET_PASS_ERROR, RESET_PASS_REQUEST, RESET_PASS_SUCCESS} from "../constants/user";
import {TUserActions} from "../actions/user";
import {TUser} from "../types/data";

export type TResetPasstInitialState = {
    accessToken?: string | null,
    refreshToken?: string | null,
    user?: TUser
    resetPassRequest: boolean,
    resetPassError: boolean,
    resetPassSuccess: boolean,
}

export const resetPasstInitialState: TResetPasstInitialState = {
    accessToken: null,
    refreshToken: null,
    user: {
        email: '',
        name: ''
    },
    resetPassRequest: false,
    resetPassError: false,
    resetPassSuccess: false,
}


export const resetPassReducer = (state = resetPasstInitialState, action: TUserActions | { type: 'for_test' }): TResetPasstInitialState => {
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
