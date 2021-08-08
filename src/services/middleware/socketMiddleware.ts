import {getCookie} from "../../utils/cookie";
import {
    WS_CONNECTION_CLOSE,
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_GET_MESSAGE,
    WS_SEND_MESSAGE
} from "../constants/ingredients";
import {AnyAction, MiddlewareAPI} from "redux";


export const socketMiddleware = (wsUrl: string) => {
    return (store: MiddlewareAPI) => {
        let socket: WebSocket | null = null;

        return (next: (a: AnyAction) => void) => (action: AnyAction) => {
            const {dispatch} = store;
            const {type, payload} = action;

            if (type === WS_CONNECTION_START) {
                let token = getCookie('token') //if token exist user is auth
                if (token) {
                    token = token.split(' ')[1]
                    wsUrl = `${wsUrl}?token=${token}`
                }
                socket = new WebSocket(wsUrl);
            }

            if (type === WS_CONNECTION_CLOSE && socket) {
                // объект класса WebSocket
                socket.close(1000, 'code 1000')
            }
            if (socket) {

                // функция, которая вызывается при открытии сокета
                socket.onopen = event => {
                    dispatch({type: WS_CONNECTION_SUCCESS, payload: event});
                };

                // функция, которая вызывается при ошибке соединения
                socket.onerror = event => {
                    dispatch({type: WS_CONNECTION_ERROR, payload: event});
                };

                // функция, которая вызывается при получения события от сервера
                socket.onmessage = event => {
                    const {data} = event;
                    const parsedData = JSON.parse(data);
                    dispatch({
                        type: WS_GET_MESSAGE, payload: parsedData
                    });
                };
                // функция, которая вызывается при закрытии соединения
                socket.onclose = event => {
                    dispatch({type: WS_CONNECTION_CLOSED, payload: event});
                };

                if (type === WS_SEND_MESSAGE) {
                    // функция для отправки сообщения на сервер
                    socket.send(JSON.stringify(payload));
                }
            }

            next(action);
        };
    };
};