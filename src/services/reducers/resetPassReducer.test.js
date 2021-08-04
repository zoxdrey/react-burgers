import {RESET_PASS_ERROR, RESET_PASS_REQUEST, RESET_PASS_SUCCESS} from "../actions/user";
import {initialUserState} from "./initialUserState";
import {resetPassReducer} from "./resetPassReducer";

describe('userReducer', () => {

    it('should return the initial state', () => {
        expect(resetPassReducer(undefined, {})).toEqual(
            {
                ...initialUserState
            }
        )
    })

    it('should handle RESET_PASS_ERROR', () => {
        expect(resetPassReducer(initialUserState, {
            type: RESET_PASS_ERROR,
        })).toEqual(
            {
                ...initialUserState,
                accessToken: null,
                refreshToken: null,
                resetPassRequest: false,
                resetPassError: true,
                resetPassSuccess: false,
            }
        )
    })

    it('should handle RESET_PASS_SUCCESS', () => {
        expect(resetPassReducer(initialUserState, {
            type: RESET_PASS_SUCCESS,
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
                resetPassRequest: false,
                resetPassError: false,
                resetPassSuccess: true,
            }
        )
    })

    it('should handle RESET_PASS_REQUEST', () => {
        expect(resetPassReducer(initialUserState, {
            type: RESET_PASS_REQUEST,
        })).toEqual(
            {
                ...initialUserState,
                resetPassRequest: true,
                resetPassError: false,
                resetPassSuccess: false,
            }
        )
    })
})