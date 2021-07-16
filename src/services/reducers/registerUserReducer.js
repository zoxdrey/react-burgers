/*
import {REGISTER_ERROR, REGISTER_REQUEST, REGISTER_SUCCESS} from "../actions/user";
import {initialUserState} from "./initialUserState";

export const registerUserReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST: {
            return {
                ...state,
                registerRequest: true,
                registerError: false,
                registerSuccess: false,
            };
        }
        case REGISTER_SUCCESS: {
            return {
                ...state,
                accessToken: action.accessToken,
                registerRequest: false,
                registerError: false,
                registerSuccess: true,
            };
        }
        case REGISTER_ERROR: {
            return {
                ...state,
                registerRequest: false,
                registerError: true,
                registerSuccess: false,
            };
        }
        default: {
            return state;
        }
    }
};

export default registerUserReducer;
*/
