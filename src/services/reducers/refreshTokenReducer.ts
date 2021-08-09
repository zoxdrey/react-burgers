import {REFRESH_TOKEN_ERROR, REFRESH_TOKEN_REQUEST, REFRESH_TOKEN_SUCCESS} from "../constants/user";

import {TUserActions} from "../actions/user";
import {TUser} from "../types/data";

export type TRefreshTokenInitialState = {
    refreshTokenRequest: boolean,
    refreshTokenError: boolean,
    refreshTokenSuccess: boolean,

    accessToken?: string | null,
    refreshToken?: string | null,
    user?: TUser
}

export const refreshTokenInitialState: TRefreshTokenInitialState = {

    refreshTokenRequest: false,
    refreshTokenError: false,
    refreshTokenSuccess: false,

    accessToken: null,
    refreshToken: null,
    user: {
        email: '',
        name: ''
    },
}

export const refreshTokenReducer = (state = refreshTokenInitialState, action: TUserActions | { type: 'for_test' }): TRefreshTokenInitialState => {
    switch (action.type) {
        case REFRESH_TOKEN_REQUEST: {
            return {
                ...state,
                refreshTokenRequest: true,
                refreshTokenError: false,
                refreshTokenSuccess: false,
            };
        }
        case REFRESH_TOKEN_SUCCESS: {
            return {
                ...state,
                accessToken: action.accessToken,
                refreshToken: action.refreshToken,
                user: action.user,
                refreshTokenRequest: false,
                refreshTokenError: false,
                refreshTokenSuccess: true,
            };
        }
        case REFRESH_TOKEN_ERROR: {
            return {
                ...state,
                accessToken: null,
                refreshToken: null,
                refreshTokenRequest: false,
                refreshTokenError: true,
                refreshTokenSuccess: false,
            };
        }
        default: {
            return state;
        }
    }
};
