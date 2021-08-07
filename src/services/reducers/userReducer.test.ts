import {userReducer} from './userReducer'
import {initialUserState} from './initialUserState'
import {
    FORGOT_PASS_ERROR,
    FORGOT_PASS_REQUEST,
    FORGOT_PASS_SUCCESS,
    GET_USER_INFO_ERROR,
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_ERROR,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    REGISTER_ERROR,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    UPDATE_USER_INFO_ERROR,
    UPDATE_USER_INFO_REQUEST,
    UPDATE_USER_INFO_SUCCESS,
} from "../constants/user";

describe('userReducer', () => {

    it('should return the initial state', () => {
        expect(userReducer(undefined, {})).toEqual(
            {
                ...initialUserState
            }
        )
    })

    it('should handle FORGOT_PASS_ERROR', () => {
        expect(userReducer(initialUserState, {
            type: FORGOT_PASS_ERROR,
        })).toEqual(
            {
                ...initialUserState,
                forgotPassRequest: false,
                forgotPassError: true,
                forgotPassSuccess: false,
            }
        )
    })

    it('should handle FORGOT_PASS_SUCCESS', () => {
        expect(userReducer(initialUserState, {
            type: FORGOT_PASS_SUCCESS,
        })).toEqual(
            {
                ...initialUserState,
                accessToken: null,
                refreshToken: null,
                user: null,
                forgotPassRequest: false,
                forgotPassError: false,
                forgotPassSuccess: true,
            }
        )
    })

    it('should handle FORGOT_PASS_REQUEST', () => {
        expect(userReducer(initialUserState, {
            type: FORGOT_PASS_REQUEST,
        })).toEqual(
            {
                ...initialUserState,
                forgotPassRequest: true,
                forgotPassError: false,
                forgotPassSuccess: false,
            }
        )
    })

    it('should handle GET_USER_INFO_ERROR', () => {
        expect(userReducer(initialUserState, {
            type: GET_USER_INFO_ERROR,
        })).toEqual(
            {
                ...initialUserState,
                accessToken: null,
                refreshToken: null,
                getUserInfoRequest: false,
                getUserInfoError: true,
                getUserInfoSuccess: false,
            }
        )
    })

    it('should handle GET_USER_INFO_REQUEST', () => {
        expect(userReducer(initialUserState, {
            type: GET_USER_INFO_REQUEST,
        })).toEqual(
            {
                ...initialUserState,
                getUserInfoRequest: true,
                getUserInfoError: false,
                getUserInfoSuccess: false,
            }
        )
    })

    it('should handle GET_USER_INFO_SUCCESS', () => {
        expect(userReducer(initialUserState, {
            type: GET_USER_INFO_SUCCESS,
            accessToken: 'accessToken',
            refreshToken: 'refreshToken',
            user: {
                email: 'email',
                name: 'name'
            },
        })).toEqual(
            {
                ...initialUserState,
                accessToken: 'accessToken',
                refreshToken: 'refreshToken',
                user: {
                    email: 'email',
                    name: 'name'
                },
                getUserInfoRequest: false,
                getUserInfoError: false,
                getUserInfoSuccess: true,
            }
        )
    })


    it('should handle UPDATE_USER_INFO_REQUEST', () => {
        expect(userReducer(initialUserState, {
            type: UPDATE_USER_INFO_REQUEST,
        })).toEqual(
            {
                ...initialUserState,
                updateUserInfoRequest: true,
                updateUserInfoInfoError: false,
                updateUserInfoInfoSuccess: false,
            }
        )
    })

    it('should handle UPDATE_USER_INFO_SUCCESS', () => {
        expect(userReducer(initialUserState, {
            type: UPDATE_USER_INFO_SUCCESS,
            accessToken: 'accessToken',
            refreshToken: 'refreshToken',
            user: {
                email: 'email',
                name: 'name'
            },
        })).toEqual(
            {
                ...initialUserState,
                accessToken: 'accessToken',
                refreshToken: 'refreshToken',
                user: {
                    email: 'email',
                    name: 'name'
                },
                updateUserInfoRequest: false,
                updateUserInfoInfoError: false,
                updateUserInfoInfoSuccess: true,
            }
        )
    })

    it('should handle UPDATE_USER_INFO_ERROR', () => {
        expect(userReducer(initialUserState, {
            type: UPDATE_USER_INFO_ERROR,
        })).toEqual(
            {
                ...initialUserState,
                accessToken: null,
                refreshToken: null,
                updateUserInfoRequest: false,
                updateUserInfoInfoError: true,
                updateUserInfoInfoSuccess: false,
            }
        )
    })


    it('should handle LOGIN_REQUEST', () => {
        expect(userReducer(initialUserState, {
            type: LOGIN_REQUEST,
        })).toEqual(
            {
                ...initialUserState,
                loginRequest: true,
                loginError: false,
                loginSuccess: false,
            }
        )
    })

    it('should handle LOGIN_SUCCESS', () => {
        expect(userReducer(initialUserState, {
            type: LOGIN_SUCCESS,
            accessToken: 'accessToken',
            refreshToken: 'refreshToken',
            user: {
                email: 'email',
                name: 'name'
            },
        })).toEqual(
            {
                ...initialUserState,
                accessToken: 'accessToken',
                refreshToken: 'refreshToken',
                user: {
                    email: 'email',
                    name: 'name'
                },
                loginRequest: false,
                loginError: false,
                loginSuccess: true,
            }
        )
    })

    it('should handle LOGIN_ERROR', () => {
        expect(userReducer(initialUserState, {
            type: LOGIN_ERROR,
        })).toEqual(
            {
                ...initialUserState,
                accessToken: null,
                refreshToken: null,
                loginRequest: false,
                loginError: false,
                loginSuccess: false,
            }
        )
    })

    it('should handle LOGOUT_REQUEST', () => {
        expect(userReducer(initialUserState, {
            type: LOGOUT_REQUEST,
        })).toEqual(
            {
                ...initialUserState,
                logoutRequest: true,
                logoutError: false,
                logoutSuccess: false,
            }
        )
    })

    it('should handle LOGOUT_SUCCESS', () => {
        expect(userReducer(initialUserState, {
            type: LOGOUT_SUCCESS,
        })).toEqual(
            {
                ...initialUserState,
                accessToken: null,
                refreshToken: null,
                user: null,
                logoutRequest: false,
                logoutError: false,
            }
        )
    })

    it('should handle LOGOUT_ERROR', () => {
        expect(userReducer(initialUserState, {
            type: LOGOUT_ERROR,
        })).toEqual(
            {
                ...initialUserState,
                logoutRequest: false,
                logoutError: false,
                logoutSuccess: false,
            }
        )
    })


    it('should handle REGISTER_REQUEST', () => {
        expect(userReducer(initialUserState, {
            type: REGISTER_REQUEST,
        })).toEqual(
            {
                ...initialUserState,
                registerRequest: true,
                registerError: false,
                registerSuccess: false,
            }
        )
    })

    it('should handle REGISTER_SUCCESS', () => {
        expect(userReducer(initialUserState, {
            type: REGISTER_SUCCESS,
            accessToken: 'accessToken',
        })).toEqual(
            {
                ...initialUserState,
                accessToken: 'accessToken',
                registerRequest: false,
                registerError: false,
                registerSuccess: true,
            }
        )
    })

    it('should handle REGISTER_ERROR', () => {
        expect(userReducer(initialUserState, {
            type: REGISTER_ERROR,
        })).toEqual(
            {
                ...initialUserState,
                registerRequest: false,
                registerError: true,
                registerSuccess: false,
            }
        )
    })
})