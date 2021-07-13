import { combineReducers } from "redux";

import orderReducer from "./orderReducer";
import ingredientsListReducer from "./ingredientsListReducer";
import constructorItemsListReducer from "./constructorItemsListReducer";
import currentIngredientReducer from "./currentIngredientReducer";

const rootReducer = combineReducers({
  ingredientsListReducer,
  orderReducer,
  constructorItemsListReducer,
  currentIngredientReducer,
});

export default rootReducer;
