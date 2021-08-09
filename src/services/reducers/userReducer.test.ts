import {userInitialState, userReducer} from './userReducer'
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
        expect(userReducer(undefined, {type: 'for_test'})).toEqual(
            {
                ...userInitialState
            }
        )
    })

    it('should handle FORGOT_PASS_ERROR', () => {
        expect(userReducer(userInitialState, {
            type: FORGOT_PASS_ERROR,
        })).toEqual(
            {
                ...userInitialState,
                forgotPassRequest: false,
                forgotPassError: true,
                forgotPassSuccess: false,
            }
        )
    })

    it('should handle FORGOT_PASS_SUCCESS', () => {
        expect(userReducer(userInitialState, {
            type: FORGOT_PASS_SUCCESS,
        })).toEqual(
            {
                ...userInitialState,
                accessToken: null,
                refreshToken: null,
                user: {email: "", name: ""},
                forgotPassRequest: false,
                forgotPassError: false,
                forgotPassSuccess: true,
            }
        )
    })

    it('should handle FORGOT_PASS_REQUEST', () => {
        expect(userReducer(userInitialState, {
            type: FORGOT_PASS_REQUEST,
        })).toEqual(
            {
                ...userInitialState,
                forgotPassRequest: true,
                forgotPassError: false,
                forgotPassSuccess: false,
            }
        )
    })

    it('should handle GET_USER_INFO_ERROR', () => {
        expect(userReducer(userInitialState, {
            type: GET_USER_INFO_ERROR,
        })).toEqual(
            {
                ...userInitialState,
                accessToken: null,
                refreshToken: null,
                getUserInfoRequest: false,
                getUserInfoError: true,
                getUserInfoSuccess: false,
            }
        )
    })

    it('should handle GET_USER_INFO_REQUEST', () => {
        expect(userReducer(userInitialState, {
            type: GET_USER_INFO_REQUEST,
        })).toEqual(
            {
                ...userInitialState,
                getUserInfoRequest: true,
                getUserInfoError: false,
                getUserInfoSuccess: false,
            }
        )
    })

    it('should handle GET_USER_INFO_SUCCESS', () => {
        expect(userReducer(userInitialState, {
            type: GET_USER_INFO_SUCCESS,
            accessToken: 'accessToken',
            refreshToken: 'refreshToken',
            user: {
                email: 'email',
                name: 'name'
            },
        })).toEqual(
            {
                ...userInitialState,
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
        expect(userReducer(userInitialState, {
            type: UPDATE_USER_INFO_REQUEST,
        })).toEqual(
            {
                ...userInitialState,
                updateUserInfoRequest: true,
                updateUserInfoInfoError: false,
                updateUserInfoInfoSuccess: false,
            }
        )
    })

    it('should handle UPDATE_USER_INFO_SUCCESS', () => {
        expect(userReducer(userInitialState, {
            type: UPDATE_USER_INFO_SUCCESS,
            accessToken: 'accessToken',
            refreshToken: 'refreshToken',
            user: {
                email: 'email',
                name: 'name'
            },
        })).toEqual(
            {
                ...userInitialState,
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
        expect(userReducer(userInitialState, {
            type: UPDATE_USER_INFO_ERROR,
        })).toEqual(
            {
                ...userInitialState,
                accessToken: null,
                refreshToken: null,
                updateUserInfoRequest: false,
                updateUserInfoInfoError: true,
                updateUserInfoInfoSuccess: false,
            }
        )
    })


    it('should handle LOGIN_REQUEST', () => {
        expect(userReducer(userInitialState, {
            type: LOGIN_REQUEST,
        })).toEqual(
            {
                ...userInitialState,
                loginRequest: true,
                loginError: false,
                loginSuccess: false,
            }
        )
    })

    it('should handle LOGIN_SUCCESS', () => {
        expect(userReducer(userInitialState, {
            type: LOGIN_SUCCESS,
            accessToken: 'accessToken',
            refreshToken: 'refreshToken',
            user: {
                email: 'email',
                name: 'name'
            },
        })).toEqual(
            {
                ...userInitialState,
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
        expect(userReducer(userInitialState, {
            type: LOGIN_ERROR,
        })).toEqual(
            {
                ...userInitialState,
                accessToken: null,
                refreshToken: null,
                loginRequest: false,
                loginError: false,
                loginSuccess: false,
            }
        )
    })

    it('should handle LOGOUT_REQUEST', () => {
        expect(userReducer(userInitialState, {
            type: LOGOUT_REQUEST,
        })).toEqual(
            {
                ...userInitialState,
                logoutRequest: true,
                logoutError: false,
                logoutSuccess: false,
            }
        )
    })

    it('should handle LOGOUT_SUCCESS', () => {
        expect(userReducer(userInitialState, {
            type: LOGOUT_SUCCESS,
        })).toEqual(
            {
                ...userInitialState,
                accessToken: null,
                refreshToken: null,
                user: {email: "", name: ""},
                logoutRequest: false,
                logoutError: false,
            }
        )
    })

    it('should handle LOGOUT_ERROR', () => {
        expect(userReducer(userInitialState, {
            type: LOGOUT_ERROR,
        })).toEqual(
            {
                ...userInitialState,
                logoutRequest: false,
                logoutError: false,
                logoutSuccess: false,
            }
        )
    })


    it('should handle REGISTER_REQUEST', () => {
        expect(userReducer(userInitialState, {
            type: REGISTER_REQUEST,
        })).toEqual(
            {
                ...userInitialState,
                registerRequest: true,
                registerError: false,
                registerSuccess: false,
            }
        )
    })

    it('should handle REGISTER_SUCCESS', () => {
        expect(userReducer(userInitialState, {
            type: REGISTER_SUCCESS,
            accessToken: 'accessToken',
            refreshToken: 'refreshToken',
            user: {name: '', email: ''}
        })).toEqual(
            {
                ...userInitialState,
                accessToken: 'accessToken',
                registerRequest: false,
                registerError: false,
                registerSuccess: true,
            }
        )
    })

    it('should handle REGISTER_ERROR', () => {
        expect(userReducer(userInitialState, {
            type: REGISTER_ERROR,
        })).toEqual(
            {
                ...userInitialState,
                registerRequest: false,
                registerError: true,
                registerSuccess: false,
            }
        )
    })
})