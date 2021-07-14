import {combineReducers} from "redux";

import orderReducer from "./orderReducer";
import ingredientsListReducer from "./ingredientsListReducer";
import constructorItemsListReducer from "./constructorItemsListReducer";
import currentIngredientReducer from "./currentIngredientReducer";
import registerUserReducer from "./registerUserReducer";
import loginReducer from "./loginReducer";
import logoutUserReducer from "./logoutReducer";
import forgotPassReducer from "./forgotPassReducer";
import {refreshTokenReducer} from "./refreshTokenReducer";
import {resetPassReducer} from "./resetPassReducer";
import {userInfoReducer} from "./userInfoReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    ingredientsListReducer,
    orderReducer,
    constructorItemsListReducer,
    currentIngredientReducer,
    registerUserReducer,
    loginReducer,
    logoutUserReducer,
    forgotPassReducer,
    refreshTokenReducer,
    resetPassReducer,
    userInfoReducer,
    userReducer
});

export default rootReducer;
