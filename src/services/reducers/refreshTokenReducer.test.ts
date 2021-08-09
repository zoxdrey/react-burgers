import {REFRESH_TOKEN_ERROR, REFRESH_TOKEN_REQUEST, REFRESH_TOKEN_SUCCESS} from "../constants/user";
import {refreshTokenInitialState, refreshTokenReducer} from "./refreshTokenReducer";

describe('refreshTokenReducer', () => {

    it('should return the initial state', () => {
        expect(refreshTokenReducer(undefined, {type: 'for_test'})).toEqual(
            {
                ...refreshTokenInitialState
            }
        )
    })

    it('should handle REFRESH_TOKEN_REQUEST', () => {
        expect(refreshTokenReducer(refreshTokenInitialState, {
            type: REFRESH_TOKEN_REQUEST,
        })).toEqual(
            {
                ...refreshTokenInitialState,
                refreshTokenRequest: true,
                refreshTokenError: false,
                refreshTokenSuccess: false,
            }
        )
    })

    it('should handle REFRESH_TOKEN_SUCCESS', () => {
        expect(refreshTokenReducer(refreshTokenInitialState, {
            type: REFRESH_TOKEN_SUCCESS,
            accessToken: 'accessToken',
            refreshToken: 'refreshToken',
            user: {
                email: 'email',
                name: 'name'
            },
        })).toEqual(
            {
                ...refreshTokenInitialState,
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
        expect(refreshTokenReducer(refreshTokenInitialState, {
            type: REFRESH_TOKEN_ERROR,
        })).toEqual(
            {
                ...refreshTokenInitialState,
                accessToken: null,
                refreshToken: null,
                refreshTokenRequest: false,
                refreshTokenError: true,
                refreshTokenSuccess: false,
            }
        )
    })
})