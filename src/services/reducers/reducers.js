import {
  GET_BURGER_INGREDIENTS_REQUEST,
  GET_BURGER_INGREDIENTS_SUCCESS,
  GET_BURGER_INGREDIENTS_ERROR,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_ERROR,
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

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
        orderError: false,
        order: {
          ...state.order,
          orderId: initialState.order.orderId,
        },
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        order: {
          ...state.order,
          orderId: action.orderId,
        },
        orderRequest: false,
      };
    }
    case GET_ORDER_ERROR: {
      return {
        ...state,
        orderError: true,
        orderRequest: false,
        order: {
          ...state.order,
          orderId: initialState.order.orderId,
        },
      };
    }
    default: {
      return state;
    }
  }
};

const rootReducer = combineReducers({
  ingredientsListReducer,
  orderReducer,
});

export default rootReducer;
