import {RESET_PASS_ERROR, RESET_PASS_REQUEST, RESET_PASS_SUCCESS} from "../constants/user";
import {resetPassReducer, resetPasstInitialState} from "./resetPassReducer";

describe('resetPassReducer', () => {

    it('should return the initial state', () => {
        expect(resetPassReducer(undefined, {type: 'for_test'})).toEqual(
            {
                ...resetPasstInitialState
            }
        )
    })

    it('should handle RESET_PASS_ERROR', () => {
        expect(resetPassReducer(resetPasstInitialState, {
            type: RESET_PASS_ERROR,
        })).toEqual(
            {
                ...resetPasstInitialState,
                accessToken: null,
                refreshToken: null,
                resetPassRequest: false,
                resetPassError: true,
                resetPassSuccess: false,
            }
        )
    })

    it('should handle RESET_PASS_SUCCESS', () => {
        expect(resetPassReducer(resetPasstInitialState, {
            type: RESET_PASS_SUCCESS,
            accessToken: 'accessToken',
            refreshToken: 'refreshToken',
            user: {
                email: 'email',
                name: 'name'
            },
        })).toEqual(
            {
                ...resetPasstInitialState,
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
        expect(resetPassReducer(resetPasstInitialState, {
            type: RESET_PASS_REQUEST,
        })).toEqual(
            {
                ...resetPasstInitialState,
                resetPassRequest: true,
                resetPassError: false,
                resetPassSuccess: false,
            }
        )
    })
})