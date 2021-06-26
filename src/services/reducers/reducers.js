import {
  GET_BURGER_INGREDIENTS_REQUEST,
  GET_BURGER_INGREDIENTS_SUCCESS,
  GET_BURGER_INGREDIENTS_ERROR,
} from "../actions/actions";

import { combineReducers } from "redux";

const initialState = {
  ingredientsList: [],
  ingrediantsRequest: false,
  ingredientsError: false,

  constructorItemsList: [],

  currentIngredient: {},

  order: {
    orderId: 0,
  },
  orderRequest: false,
  orderError: false,
};

export const ingredientsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BURGER_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingrediantsRequest: true,
        ingredientsError: false,
      };
    }
    case GET_BURGER_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsList: action.ingredientsList,
        ingrediantsRequest: false,
      };
    }
    case GET_BURGER_INGREDIENTS_ERROR: {
      return {
        ...state,
        ingredientsError: true,
        ingrediantsRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};

const rootReducer = combineReducers({
  ingredientsListReducer,
});

export default rootReducer;
