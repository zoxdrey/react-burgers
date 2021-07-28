import {baseUrl} from '../../utils/constants'
import {getCookie} from "../../utils/cookie";

export const GET_BURGER_INGREDIENTS_REQUEST = "GET_BURGER_INGREDIENTS_REQUEST";
export const GET_BURGER_INGREDIENTS_SUCCESS = "GET_BURGER_INGREDIENTS_SUCCESS";
export const GET_BURGER_INGREDIENTS_ERROR = "GET_BURGER_INGREDIENTS_ERROR";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_ERROR = "GET_ORDER_ERROR";

export const ADD_ORDER_REQUEST = "ADD_ORDER_REQUEST";
export const ADD_ORDER_SUCCESS = "ADD_ORDER_SUCCESS";
export const ADD_ORDER_ERROR = "ADD_ORDER_ERROR";

export const ADD_CONSTRUCTOR_ITEM = "ADD_CONSTRUCTOR_ITEM";
export const REMOVE_CONSTRUCTOR_ITEM = "REMOVE_CONSTRUCTOR_ITEM";
export const MOVE_CONSTRUCTOR_ITEM = "MOVE_CONSTRUCTOR_ITEM";
export const ADD_BUN_CONSTRUCTOR_ITEM = "ADD_BUN_CONSTRUCTOR_ITEM";
export const RESET_CONSTRUCTOR = "RESET_CONSTRUCTOR";

export const ADD_CURRENT_INGREDIENT = "ADD_CURRENT_INGREDIENT";
export const REMOVE_CURRENT_INGREDIENT = "REMOVE_CURRENT_INGREDIENT";

export const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED'
export const WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR'
export const WS_CONNECTION_START = 'WS_CONNECTION_START'
export const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS'
export const WS_GET_MESSAGE = 'WS_GET_MESSAGE';
export const WS_SEND_MESSAGE = 'WS_SEND_MESSAGE'
export const WS_CONNECTION_CLOSE = 'WS_CONNECTION_CLOSE'

export function getIngredientsList() {
    return function (dispatch) {
        dispatch({
            type: GET_BURGER_INGREDIENTS_REQUEST,
        });
        fetch(`${baseUrl}api/ingredients`)
            .then((res) => (res.ok ? res : Promise.reject(res)))
            .then((res) => res.json())
            .then((res) => {
                if (res && res.success) {
                    dispatch({
                        type: GET_BURGER_INGREDIENTS_SUCCESS,
                        ingredientsList: res.data,
                    });
                } else {
                    dispatch({
                        type: GET_BURGER_INGREDIENTS_ERROR,
                    });
                }
            })
            .catch((err) => {
                dispatch({
                    type: GET_BURGER_INGREDIENTS_ERROR,
                });
            });
    };
}

export function createOrder(orderIds, openModalFunc) {
    return function (dispatch) {
        dispatch({
            type: ADD_ORDER_REQUEST,
        });
        fetch(`${baseUrl}api/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: getCookie('token'),
            },
            body: JSON.stringify({ingredients: orderIds}),
        })
            .then((res) => (res.ok ? res : Promise.reject(res)))
            .then((res) => res.json())
            .then((res) => {
                if (res && res.success) {
                    dispatch({
                        type: ADD_ORDER_SUCCESS,
                        orderId: res.order,
                    });
                    openModalFunc(true);
                } else {
                    dispatch({
                        type: ADD_ORDER_ERROR,
                    });
                }
            })
            .catch((err) => {
                dispatch({
                    type: ADD_ORDER_ERROR,
                });
            });
    };
}

export function getOrderById(id) {
    return function (dispatch) {
        dispatch({
            type: GET_ORDER_REQUEST,
        });
        fetch(`${baseUrl}api/orders/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => (res.ok ? res : Promise.reject(res)))
            .then((res) => res.json())
            .then((res) => {
                if (res && res.success) {
                    dispatch({
                        type: GET_ORDER_SUCCESS,
                        order: res,
                    });
                } else {
                    dispatch({
                        type: GET_ORDER_ERROR,
                    });
                }
            })
            .catch((err) => {
                dispatch({
                    type: GET_ORDER_ERROR,
                });
            });
    };
}
