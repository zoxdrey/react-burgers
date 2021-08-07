import {
    GET_BURGER_INGREDIENTS_ERROR,
    GET_BURGER_INGREDIENTS_REQUEST,
    GET_BURGER_INGREDIENTS_SUCCESS,
} from "../constants/ingredients";
import {initialState} from "./initialState";
import {TIngredientsActions} from "../actions/ingredients";

export const ingredientsListReducer = (state = initialState, action: TIngredientsActions) => {
    switch (action.type) {
        case GET_BURGER_INGREDIENTS_REQUEST: {
            return {
                ...state,
                ingredientsRequest: true,
                ingredientsError: false,
            };
        }
        case GET_BURGER_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                ingredientsList: action.ingredientsList,
                ingredientsRequest: false,
            };
        }
        case GET_BURGER_INGREDIENTS_ERROR: {
            return {
                ...state,
                ingredientsError: true,
                ingredientsRequest: false,
            };
        }
        default: {
            return state;
        }
    }
};

export default ingredientsListReducer;
