import {getCookie} from "../../utils/cookie";

export const socketMiddleware = (wsUrl) => {
    return store => {
        let socket = null;

        return next => action => {
            const {dispatch, getState} = store;
            const {type, payload} = action;

            if (type === 'WS_CONNECTION_START') {
                let token = getCookie('token') //if token exist user is auth
                if (token) {
                    token = token.split(' ')[1]
                    wsUrl = `${wsUrl}?token=${token}`
                }
                socket = new WebSocket(wsUrl);
            }

            if (type === 'WS_CONNECTION_CLOSE' && socket) {
                // объект класса WebSocket
                socket.close(1000, 'code 1000')
            }
            if (socket) {

                // функция, которая вызывается при открытии сокета
                socket.onopen = event => {
                    dispatch({type: 'WS_CONNECTION_SUCCESS', payload: event});
                };

                // функция, которая вызывается при ошибке соединения
                socket.onerror = event => {
                    dispatch({type: 'WS_CONNECTION_ERROR', payload: event});
                };

                // функция, которая вызывается при получения события от сервера
                socket.onmessage = event => {
                    const {data} = event;
                    const parsedData = JSON.parse(data);
                    dispatch({
                        type: 'WS_GET_MESSAGE', payload: parsedData
                    });
                };
                // функция, которая вызывается при закрытии соединения
                socket.onclose = event => {
                    dispatch({type: 'WS_CONNECTION_CLOSED', payload: event});
                };

                if (type === 'WS_SEND_MESSAGE') {
                    const message = payload;
                    // функция для отправки сообщения на сервер
                    socket.send(JSON.stringify(message));
                }
            }

            next(action);
        };
    };
};