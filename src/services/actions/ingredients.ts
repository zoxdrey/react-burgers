import {baseUrl} from '../../utils/constants'
import {getCookie} from "../../utils/cookie";
import {
    ADD_BUN_CONSTRUCTOR_ITEM,
    ADD_CONSTRUCTOR_ITEM,
    ADD_CURRENT_INGREDIENT,
    ADD_ORDER_ERROR,
    ADD_ORDER_REQUEST,
    ADD_ORDER_SUCCESS,
    GET_BURGER_INGREDIENTS_ERROR,
    GET_BURGER_INGREDIENTS_REQUEST,
    GET_BURGER_INGREDIENTS_SUCCESS,
    GET_ORDER_ERROR,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    MOVE_CONSTRUCTOR_ITEM,
    REMOVE_CONSTRUCTOR_ITEM,
    REMOVE_CURRENT_INGREDIENT,
    RESET_CONSTRUCTOR,
    WS_CONNECTION_CLOSE,
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_GET_MESSAGE,
    WS_SEND_MESSAGE
} from "../constants/ingredients";
import {REFRESH_TOKEN_REQUEST} from "../constants/user";
import {IRefreshTokenRequestAction} from "./user";


export interface IAddOrderErrorAction {
    readonly type: typeof ADD_ORDER_ERROR
}

export interface IAddOrderRequestAction {
    readonly type: typeof ADD_ORDER_REQUEST
}

export interface IAddOrderSuccessAction {
    orderId: any;
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
    ingredientsList: Array<Object>;
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
    order: any;
    readonly type: typeof GET_ORDER_SUCCESS
}

export type TGetOrderActions =
    IGetOrderErrorAction
    | IGetOrderRequestAction
    | IGetOrderSuccessAction

export interface IAddConstructorItemAction {
    item: Array<Object> | Object[] | Object;
    readonly type: typeof ADD_CONSTRUCTOR_ITEM
}

export interface IRemoveConstructorItemAction {
    index: number;
    readonly type: typeof REMOVE_CONSTRUCTOR_ITEM
}

export interface IMoveConstructorItemAction {
    payload: any;
    readonly type: typeof MOVE_CONSTRUCTOR_ITEM
}

export interface IAddBunConstructorItemAction {
    item: Object
    readonly type: typeof ADD_BUN_CONSTRUCTOR_ITEM
}

export interface IResetConstructorAction {
    readonly type: typeof RESET_CONSTRUCTOR
}

export type TConstructorActions =
    IAddConstructorItemAction
    | IRemoveConstructorItemAction
    | IMoveConstructorItemAction
    | IAddBunConstructorItemAction
    | IResetConstructorAction


export interface IAddCurrentIngredientAction {
    readonly type: typeof ADD_CURRENT_INGREDIENT
}

export interface IRemoveCurrentIngredientAction {
    readonly type: typeof REMOVE_CURRENT_INGREDIENT
}

export type TCurrentIngredientActions =
    IAddCurrentIngredientAction
    | IRemoveCurrentIngredientAction

export interface IWSConnectionClosedAction {
    readonly type: typeof WS_CONNECTION_CLOSED
}

export interface IWSConnectionErrorAction {
    error: null;
    readonly type: typeof WS_CONNECTION_ERROR
}

export interface IWSConnectionStartAction {
    readonly type: typeof WS_CONNECTION_START
}

export interface IWSConnectionSuccessAction {
    readonly type: typeof WS_CONNECTION_SUCCESS
}

export interface IWSGetMessageAction {
    payload: any;
    readonly type: typeof WS_GET_MESSAGE
}

export interface IWSSendMessageAction {
    readonly type: typeof WS_SEND_MESSAGE
}

export interface IWSConnectionCloseAction {
    readonly type: typeof WS_CONNECTION_CLOSE
}

export type TWSAction =
    IWSConnectionClosedAction
    | IWSConnectionErrorAction
    | IWSConnectionStartAction
    | IWSConnectionSuccessAction
    | IWSGetMessageAction
    | IWSSendMessageAction
    | IWSConnectionCloseAction

export type TIngredientsActions =
    TAddOrderActions
    | TGetBurgerIngredientsActions
    | TGetOrderActions
    | TConstructorActions
    | TCurrentIngredientActions
    | TWSAction

export const addBunConstructorItemAction = (item): IAddBunConstructorItemAction => ({
    type: ADD_BUN_CONSTRUCTOR_ITEM,
    item
})


export const addConstructorItemAction = (item): IAddConstructorItemAction => ({
    type: ADD_CONSTRUCTOR_ITEM,
    item
})

export const addCurrentIngredientAction = (): IAddCurrentIngredientAction => ({
    type: ADD_CURRENT_INGREDIENT
})

export const addOrderErrorAction = (): IAddOrderErrorAction => ({
    type: ADD_ORDER_ERROR
})

export const addOrderRequestAction = (): IAddOrderRequestAction => ({
    type: ADD_ORDER_REQUEST
})

export const addOrderSuccessAction = (orderId): IAddOrderSuccessAction => ({
    type: ADD_ORDER_SUCCESS,
    orderId
})

export const getBurgerIngredientsErrorAction = (): IGetBurgerIngredientsErrorAction => ({
    type: GET_BURGER_INGREDIENTS_ERROR
})

export const getBurgerIngredientsRequestAction = (): IGetBurgerIngredientsRequestAction => ({
    type: GET_BURGER_INGREDIENTS_REQUEST
})

export const getBurgerIngredientsSuccessAction = (ingredientsList): IGetBurgerIngredientsSuccessAction => ({
    type: GET_BURGER_INGREDIENTS_SUCCESS,
    ingredientsList
})

export const getOrderErrorAction = (): IGetOrderErrorAction => ({
    type: GET_ORDER_ERROR
})

export const getOrderRequestAction = (): IGetOrderRequestAction => ({
    type: GET_ORDER_REQUEST
})

export const getOrderSuccessAction = (order): IGetOrderSuccessAction => ({
    type: GET_ORDER_SUCCESS,
    order
})

export const moveConstructorItemAction = (payload): IMoveConstructorItemAction => ({
    type: MOVE_CONSTRUCTOR_ITEM,
    payload
})

export const removeConstructorItemAction = (index): IRemoveConstructorItemAction => ({
    type: REMOVE_CONSTRUCTOR_ITEM,
    index
})

export const removeCurrentIngredientAction = (): IRemoveCurrentIngredientAction => ({
    type: REMOVE_CURRENT_INGREDIENT
})

export const resetConstructorAction = (): IResetConstructorAction => ({
    type: RESET_CONSTRUCTOR
})

export const wsConnectionCloseAction = (): IWSConnectionCloseAction => ({
    type: WS_CONNECTION_CLOSE
})

export const wsConnectionClosedAction = (): IWSConnectionClosedAction => ({
    type: WS_CONNECTION_CLOSED
})

export const wsConnectionErrorAction = (error): IWSConnectionErrorAction => ({
    type: WS_CONNECTION_ERROR,
    error
})

export const wsConnectionStartAction = (): IWSConnectionStartAction => ({
    type: WS_CONNECTION_START
})

export const wsConnectionSuccessAction = (): IWSConnectionSuccessAction => ({
    type: WS_CONNECTION_SUCCESS
})

export const wsGetMessageAction = (payload): IWSGetMessageAction => ({
    type: WS_GET_MESSAGE,
    payload
})

export const wsSendMessageAction = (): IWSSendMessageAction => ({
    type: WS_SEND_MESSAGE
})


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
