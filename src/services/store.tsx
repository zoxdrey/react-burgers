import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './reducers'
import {socketMiddleware} from './middleware/socketMiddleware'
import thunk from "redux-thunk";

const _wsUrl = 'wss://norma.nomoreparties.space/orders/all'

const composeEnhancers =
    (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const configureStore = (initialState = {}) => {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(
                thunk,
                socketMiddleware(_wsUrl),
            )
        )
    )
}