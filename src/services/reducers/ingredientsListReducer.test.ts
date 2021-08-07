import {
    GET_BURGER_INGREDIENTS_ERROR,
    GET_BURGER_INGREDIENTS_REQUEST,
    GET_BURGER_INGREDIENTS_SUCCESS,
} from "../constants/ingredients";
import {initialState} from "./initialState";
import {ingredientsListReducer} from "./ingredientsListReducer";

describe('ingredientsListReducer', () => {

    it('should return the initial state', () => {
        expect(ingredientsListReducer(undefined, {})).toEqual(
            {
                ...initialState
            }
        )
    })

    it('should handle GET_BURGER_INGREDIENTS_ERROR', () => {
        expect(ingredientsListReducer(initialState, {
            type: GET_BURGER_INGREDIENTS_ERROR,
        })).toEqual(
            {
                ...initialState,
                ingredientsError: true,
                ingredientsRequest: false,
            }
        )
    })

    it('should handle GET_BURGER_INGREDIENTS_REQUEST', () => {
        expect(ingredientsListReducer(initialState, {
            type: GET_BURGER_INGREDIENTS_REQUEST,
        })).toEqual(
            {
                ...initialState,
                ingredientsRequest: true,
                ingredientsError: false,
            }
        )
    })

    it('should handle GET_BURGER_INGREDIENTS_SUCCESS', () => {
        expect(ingredientsListReducer(initialState, {
            type: GET_BURGER_INGREDIENTS_SUCCESS,
            ingredientsList: [{object: 'object'}, {object1: 'object1'}],
        })).toEqual(
            {
                ...initialState,
                ingredientsList: [{object: 'object'}, {object1: 'object1'}],
                ingredientsRequest: false,
            }
        )
    })
})