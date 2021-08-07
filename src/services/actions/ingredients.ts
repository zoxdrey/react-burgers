import {baseUrl} from '../../utils/constants'
import {getCookie} from "../../utils/cookie";
import {
    ADD_ORDER_ERROR,
    ADD_ORDER_REQUEST,
    ADD_ORDER_SUCCESS,
    GET_BURGER_INGREDIENTS_ERROR,
    GET_BURGER_INGREDIENTS_REQUEST,
    GET_BURGER_INGREDIENTS_SUCCESS,
    GET_ORDER_ERROR,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS
} from "../constants/ingredients";


export interface IAddOrderErrorAction {
    readonly type: typeof ADD_ORDER_ERROR
}

export interface IAddOrderRequestAction {
    readonly type: typeof ADD_ORDER_REQUEST
}

export interface IAddOrderSuccessAction {
    readonly type: typeof ADD_ORDER_SUCCESS
}

export type TAddOrderActions =
    IAddOrderErrorAction
    | IAddOrderRequestAction
    | IAddOrderSuccessAction

export interface IGetBurgerIngredientsErrorAction {
    readonly type: typeof GET_BURGER_INGREDIENTS_ERROR
}

export interface IGetBurgerIngredientsRequestAction {
    readonly type: typeof GET_BURGER_INGREDIENTS_REQUEST
}

export interface IGetBurgerIngredientsSuccessAction {
    readonly type: typeof GET_BURGER_INGREDIENTS_SUCCESS
}

export type TGetBurgerIngredientsActions =
    IGetBurgerIngredientsErrorAction
    | IGetBurgerIngredientsRequestAction
    | IGetBurgerIngredientsSuccessAction

export interface IGetOrderErrorAction {
    readonly type: typeof GET_ORDER_ERROR
}

export interface IGetOrderRequestAction {
    readonly type: typeof GET_ORDER_REQUEST
}

export interface IGetOrderSuccessAction {
    readonly type: typeof GET_ORDER_SUCCESS
}

export type TGetOrderActions =
    IAddOrderErrorAction
    | IGetOrderRequestAction
    | IGetOrderSuccessAction


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
                Authorization: getCookie('token') as string,
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
