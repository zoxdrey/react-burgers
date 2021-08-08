import {
    GET_BURGER_INGREDIENTS_ERROR,
    GET_BURGER_INGREDIENTS_REQUEST,
    GET_BURGER_INGREDIENTS_SUCCESS,
} from "../constants/ingredients";
import {TIngredientsActions} from "../actions/ingredients";
import {IBurgerElement} from "../types/data";

export type TingredientsListInitialState = {
    ingredientsList: Array<IBurgerElement>,
    ingredientsRequest: boolean,
    ingredientsError: boolean,
}

export const IngredientsListInitialState: TingredientsListInitialState = {
    ingredientsList: [],
    ingredientsRequest: false,
    ingredientsError: false,
}

export const ingredientsListReducer = (state = IngredientsListInitialState, action: TIngredientsActions| {type: 'for_test'}): TingredientsListInitialState => {
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
