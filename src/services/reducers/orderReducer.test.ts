import {
    ADD_ORDER_ERROR,
    ADD_ORDER_REQUEST,
    ADD_ORDER_SUCCESS,
    GET_ORDER_ERROR,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
} from "../constants/ingredients";
import {initialState} from "./initialState";
import {orderReducer} from "./orderReducer";

describe('orderReducer', () => {

    it('should return the initial state', () => {
        expect(orderReducer(undefined, {})).toEqual(
            {
                ...initialState
            }
        )
    })

    it('should handle GET_ORDER_REQUEST', () => {
        expect(orderReducer(initialState, {
            type: GET_ORDER_REQUEST,
        })).toEqual(
            {
                ...initialState,
                orderRequest: true,
                orderError: false,
                order: null,
            }
        )
    })

    it('should handle GET_ORDER_SUCCESS', () => {
        expect(orderReducer(initialState, {
            type: GET_ORDER_SUCCESS,
            order: {orders: [{order: 'order'}, {order2: 'order2'}]}
        })).toEqual(
            {
                ...initialState,
                order: {order: 'order'},
                orderRequest: false,
            }
        )
    })

    it('should handle GET_ORDER_ERROR', () => {
        expect(orderReducer(initialState, {
            type: GET_ORDER_ERROR,
        })).toEqual(
            {
                ...initialState,
                orderError: true,
                orderRequest: false,
                order: null,
            }
        )
    })

    it('should handle ADD_ORDER_REQUEST', () => {
        expect(orderReducer(initialState, {
            type: ADD_ORDER_REQUEST,
        })).toEqual(
            {
                ...initialState,
                orderIdRequest: true,
                orderIdError: false,
                order: null,
            }
        )
    })

    it('should handle ADD_ORDER_SUCCESS', () => {
        expect(orderReducer(initialState, {
            type: ADD_ORDER_SUCCESS,
            orderId: {number: '1'}
        })).toEqual(
            {
                ...initialState,
                orderId: '1',
                orderIdRequest: false,
            }
        )
    })

    it('should handle ADD_ORDER_ERROR', () => {
        expect(orderReducer(initialState, {
            type: ADD_ORDER_ERROR,
        })).toEqual(
            {
                ...initialState,
                orderIdError: true,
                orderIdRequest: false,
                order: null,
            }
        )
    })
})