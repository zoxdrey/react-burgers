import {REFRESH_TOKEN_ERROR, REFRESH_TOKEN_REQUEST, REFRESH_TOKEN_SUCCESS} from "../actions/user";
import {initialUserState} from "./initialUserState";
import {refreshTokenReducer} from "./refreshTokenReducer";

describe('refreshTokenReducer', () => {

    it('should return the initial state', () => {
        expect(refreshTokenReducer(undefined, {})).toEqual(
            {
                ...initialUserState
            }
        )
    })

    it('should handle REFRESH_TOKEN_REQUEST', () => {
        expect(refreshTokenReducer(initialUserState, {
            type: REFRESH_TOKEN_REQUEST,
        })).toEqual(
            {
                ...initialUserState,
                refreshTokenRequest: true,
                refreshTokenError: false,
                refreshTokenSuccess: false,
            }
        )
    })

    it('should handle REFRESH_TOKEN_SUCCESS', () => {
        expect(refreshTokenReducer(initialUserState, {
            type: REFRESH_TOKEN_SUCCESS,
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
                refreshTokenRequest: false,
                refreshTokenError: false,
                refreshTokenSuccess: true,
            }
        )
    })

    it('should handle REFRESH_TOKEN_ERROR', () => {
        expect(refreshTokenReducer(initialUserState, {
            type: REFRESH_TOKEN_ERROR,
        })).toEqual(
            {
                ...initialUserState,
                accessToken: null,
                refreshToken: null,
                refreshTokenRequest: false,
                refreshTokenError: true,
                refreshTokenSuccess: false,
            }
        )
    })
})