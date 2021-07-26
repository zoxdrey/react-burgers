import {
    WS_CONNECTION_CLOSE,
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_SUCCESS,
    WS_GET_MESSAGE
} from '../actions/ingredients';

const initialState = {
    wsConnected: false,
    messages: []
};

// Создадим редьюсер для WebSocket
export const wsReducer = (state = initialState, action) => {
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
                error: action.payload,
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

        case WS_CONNECTION_CLOSE:
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
                messages: state.messages.length
                    ? [...state.messages, action.payload]
                    : [action.payload]
            };
        default:
            return state;
    }
};