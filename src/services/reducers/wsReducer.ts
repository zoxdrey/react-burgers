import {
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_SUCCESS,
    WS_GET_MESSAGE
} from '../constants/ingredients';
import {TIngredientsActions} from "../actions/ingredients";
import {TOrderData} from "../types/data";

export type TWSInitialState = {
    wsConnected: boolean,
    orders: Array<TOrderData>,
    error: null | string,
    total: number,
    totalToday: number,
};

export const initialState: TWSInitialState = {
    wsConnected: false,
    orders: [],
    error: null,
    total: 0,
    totalToday: 0,
};

// Создадим редьюсер для WebSocket
export const wsReducer = (state = initialState, action: TIngredientsActions | { type: 'for_test' }): TWSInitialState => {
        switch (action.type) {
            // Опишем обработку экшена с типом WS_CONNECTION_SUCCESS
            // Установим флаг wsConnected в состояние true
            case WS_CONNECTION_SUCCESS:
                return {
                    ...state,
                    error: null,
                    wsConnected: true
                };

            // Опишем обработку экшена с типом WS_CONNECTION_ERROR
            // Установим флаг wsConnected в состояние false и передадим ошибку из action.payload
            case WS_CONNECTION_ERROR:
                return {
                    ...state,
                    error: action.error,
                    wsConnected: false
                };

            // Опишем обработку экшена с типом WS_CONNECTION_CLOSED, когда соединение закрывается
            // Установим флаг wsConnected в состояние false
            case WS_CONNECTION_CLOSED:
                return {
                    ...state,
                    error: null,
                    wsConnected: false
                };


            // Опишем обработку экшена с типом WS_GET_MESSAGE
            // Обработка происходит, когда с сервера возвращаются данные
            // В messages передадим данные, которые пришли с сервера
            case WS_GET_MESSAGE:
                return {
                    ...state,
                    error: null,
                    orders: action.payload.orders,
                    total: action.payload.total,
                    totalToday: action.payload.totalToday,
                };
            default:
                return state;
        }
    }
;