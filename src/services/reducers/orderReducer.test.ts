import {
    ADD_ORDER_ERROR,
    ADD_ORDER_REQUEST,
    ADD_ORDER_SUCCESS,
    GET_ORDER_ERROR,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
} from "../constants/ingredients";
import {OrderInitialState, orderReducer} from "./orderReducer";

describe('orderReducer', () => {

    it('should return the initial state', () => {
        expect(orderReducer(undefined, {type: 'for_test'})).toEqual(
            {
                ...OrderInitialState
            }
        )
    })

    it('should handle GET_ORDER_REQUEST', () => {
        expect(orderReducer(OrderInitialState, {
            type: GET_ORDER_REQUEST,
        })).toEqual(
            {
                ...OrderInitialState,
                orderRequest: true,
                orderError: false,
                order: null,
            }
        )
    })

    it('should handle GET_ORDER_SUCCESS', () => {
        expect(orderReducer(OrderInitialState, {
            type: GET_ORDER_SUCCESS,
            order: {orders: [{order: 'order'}, {order2: 'order2'}]}
        })).toEqual(
            {
                ...OrderInitialState,
                order: {order: 'order'},
                orderRequest: false,
            }
        )
    })

    it('should handle GET_ORDER_ERROR', () => {
        expect(orderReducer(OrderInitialState, {
            type: GET_ORDER_ERROR,
        })).toEqual(
            {
                ...OrderInitialState,
                orderError: true,
                orderRequest: false,
                order: null,
            }
        )
    })

    it('should handle ADD_ORDER_REQUEST', () => {
        expect(orderReducer(OrderInitialState, {
            type: ADD_ORDER_REQUEST,
        })).toEqual(
            {
                ...OrderInitialState,
                orderIdRequest: true,
                orderIdError: false,
                order: null,
            }
        )
    })

    it('should handle ADD_ORDER_SUCCESS', () => {
        expect(orderReducer(OrderInitialState, {
            type: ADD_ORDER_SUCCESS,
            orderId: {number: '1'}
        })).toEqual(
            {
                ...OrderInitialState,
                orderId: '1',
                orderIdRequest: false,
            }
        )
    })

    it('should handle ADD_ORDER_ERROR', () => {
        expect(orderReducer(OrderInitialState, {
            type: ADD_ORDER_ERROR,
        })).toEqual(
            {
                ...OrderInitialState,
                orderIdError: true,
                orderIdRequest: false,
                order: null,
            }
        )
    })
})