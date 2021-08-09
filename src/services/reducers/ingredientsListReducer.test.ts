import {
    GET_BURGER_INGREDIENTS_ERROR,
    GET_BURGER_INGREDIENTS_REQUEST,
    GET_BURGER_INGREDIENTS_SUCCESS,
} from "../constants/ingredients";
import {IngredientsListInitialState, ingredientsListReducer} from "./ingredientsListReducer";
import {testData} from "./constructorItemsListReducer.test";

describe('ingredientsListReducer', () => {

    it('should return the initial state', () => {
        expect(ingredientsListReducer(undefined, {type: 'for_test'})).toEqual(
            {
                ...IngredientsListInitialState
            }
        )
    })

    it('should handle GET_BURGER_INGREDIENTS_ERROR', () => {
        expect(ingredientsListReducer(IngredientsListInitialState, {
            type: GET_BURGER_INGREDIENTS_ERROR,
        })).toEqual(
            {
                ...IngredientsListInitialState,
                ingredientsError: true,
                ingredientsRequest: false,
            }
        )
    })

    it('should handle GET_BURGER_INGREDIENTS_REQUEST', () => {
        expect(ingredientsListReducer(IngredientsListInitialState, {
            type: GET_BURGER_INGREDIENTS_REQUEST,
        })).toEqual(
            {
                ...IngredientsListInitialState,
                ingredientsRequest: true,
                ingredientsError: false,
            }
        )
    })

    it('should handle GET_BURGER_INGREDIENTS_SUCCESS', () => {
        expect(ingredientsListReducer(IngredientsListInitialState, {
            type: GET_BURGER_INGREDIENTS_SUCCESS,
            ingredientsList: testData,
        })).toEqual(
            {
                ...IngredientsListInitialState,
                ingredientsList: testData,
                ingredientsRequest: false,
            }
        )
    })
})