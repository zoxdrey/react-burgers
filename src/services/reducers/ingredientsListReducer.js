import {
  GET_BURGER_INGREDIENTS_REQUEST,
  GET_BURGER_INGREDIENTS_SUCCESS,
  GET_BURGER_INGREDIENTS_ERROR,
} from "../actions/actions";
import { initialState } from "./initialState";

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

export default ingredientsListReducer;
