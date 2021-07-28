import {combineReducers} from "redux";

import orderReducer from "./orderReducer";
import ingredientsListReducer from "./ingredientsListReducer";
import constructorItemsListReducer from "./constructorItemsListReducer";
import currentIngredientReducer from "./currentIngredientReducer";
import {refreshTokenReducer} from "./refreshTokenReducer";
import {resetPassReducer} from "./resetPassReducer";
import userReducer from "./userReducer";
import {wsReducer} from "./wsReducer";

const rootReducer = combineReducers({
    ingredientsListReducer,
    orderReducer,
    wsReducer,
    constructorItemsListReducer,
    currentIngredientReducer,
    refreshTokenReducer,
    resetPassReducer,
    userReducer
});

export default rootReducer;
