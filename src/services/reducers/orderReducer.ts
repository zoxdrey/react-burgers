import {
    ADD_ORDER_ERROR,
    ADD_ORDER_REQUEST,
    ADD_ORDER_SUCCESS,
    GET_ORDER_ERROR,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
} from "../constants/ingredients";
import {TIngredientsActions} from "../actions/ingredients";
import {TOrderData} from "../types/data";

export type TOrderInitialState = {
    order?: TOrderData | null,
    orderId: number,
    orderRequest: boolean,
    orderError: boolean,
    orderIdError: boolean,
    orderIdRequest: boolean,
}

export const OrderInitialState: TOrderInitialState = {
    order: null,
    orderId: 0,
    orderRequest: false,
    orderError: false,
    orderIdError: false,
    orderIdRequest: false,
}


export const orderReducer = (state = OrderInitialState, action: TIngredientsActions | { type: 'for_test' }): TOrderInitialState => {
    switch (action.type) {
        case GET_ORDER_REQUEST: {
            return {
                ...state,
                orderRequest: true,
                orderError: false,
                order: null,
            };
        }
        case GET_ORDER_SUCCESS: {
            return {
                ...state,
                order: action.order.orders[0],
                orderRequest: false,
            };
        }
        case GET_ORDER_ERROR: {
            return {
                ...state,
                orderError: true,
                orderRequest: false,
                order: null,
            };
        }
        case ADD_ORDER_REQUEST: {
            return {
                ...state,
                orderIdRequest: true,
                orderIdError: false,
                order: null,
            };
        }
        case ADD_ORDER_SUCCESS: {
            return {
                ...state,
                orderId: action.orderId.number,
                orderIdRequest: false,
            };
        }
        case ADD_ORDER_ERROR: {
            return {
                ...state,
                orderIdError: true,
                orderIdRequest: false,
                order: null,
            };
        }
        default: {
            return state;
        }
    }
};
