/*
import {GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_ERROR, UPDATE_USER_INFO_REQUEST, UPDATE_USER_INFO_SUCCESS, UPDATE_USER_INFO_ERROR} from "../actions/user";
import {initialUserState} from "./initialUserState";

export const userInfoReducer = (state = initialUserState, action) => {
    switch (action.type) {
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
};

export default userInfoReducer;
*/
