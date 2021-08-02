import {initialState, wsReducer} from './wsReducer'
import {WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_SUCCESS} from "../actions/ingredients";

describe('wsReducer', () => {
    it('should return the initial state', () => {
        expect(wsReducer(undefined, {})).toEqual(
            {
                wsConnected: false,
                orders: [],
                error: null,
                total: 0,
                totalToday: 0,
            }
        )
    })

    it('should handle WS_CONNECTION_SUCCESS', () => {
        expect(wsReducer(initialState, {
            type: WS_CONNECTION_SUCCESS,
            wsConnected: true,
            error: null,
        })).toEqual(
            {
                wsConnected: true,
                orders: [],
                error: null,
                total: 0,
                totalToday: 0,
            }
        )
    })

    it('should handle WS_CONNECTION_ERROR', () => {
        expect(wsReducer(initialState, {
            type: WS_CONNECTION_ERROR,
            wsConnected: false,
            payload: 'error',
        })).toEqual(
            {
                wsConnected: false,
                orders: [],
                error: 'error',
                total: 0,
                totalToday: 0,
            }
        )
    })

    it('should handle WS_CONNECTION_CLOSED', () => {
        expect(wsReducer(initialState, {
            type: WS_CONNECTION_CLOSED,
            wsConnected: false,
            error: null,
        })).toEqual(
            {
                wsConnected: false,
                orders: [],
                error: null,
                total: 0,
                totalToday: 0,
            }
        )
    })

})