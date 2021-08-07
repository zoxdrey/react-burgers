import {REFRESH_TOKEN_ERROR, REFRESH_TOKEN_REQUEST, REFRESH_TOKEN_SUCCESS} from "../constants/user";
import {initialUserState, TInitialUserState} from "./initialUserState";
import {TUserActions} from "../actions/user";

export const refreshTokenReducer = (state = initialUserState, action: TUserActions): TInitialUserState => {
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
