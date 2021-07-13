import {
  ADD_CURRENT_INGREDIENT,
  REMOVE_CURRENT_INGREDIENT,
} from "../actions/actions";
import { initialState } from "./initialState";

export const currentIngredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CURRENT_INGREDIENT: {
      return {
        ...state,
        currentIngredient: action.item,
      };
    }
    case REMOVE_CURRENT_INGREDIENT: {
      return {
        ...state,
        currentIngredient: {},
      };
    }

    default: {
      return state;
    }
  }
};

export default currentIngredientReducer;
