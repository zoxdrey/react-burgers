import {currentIngredientReducer} from './currentIngredientReducer'
import { initialState } from "./initialState";
import {
    ADD_CURRENT_INGREDIENT,
    REMOVE_CURRENT_INGREDIENT,
} from "../actions/ingredients";

describe('wsReducer', () => {
    it('should return the initial state', () => {
        expect(currentIngredientReducer(undefined, {})).toEqual(
            {
                ingredientsList: [],
                ingredientsRequest: false,
                ingredientsError: false,
                constructorItemsList: [],
                constructorBun: {},
                currentIngredient: {},
                orders: [],
                order: null,
                orderId: 0,
                orderRequest: false,
                orderError: false,
                orderIdError: false,
                orderIdRequest: false,
            }
        )
    })

    it('should handle ADD_CURRENT_INGREDIENT', () => {
        expect(currentIngredientReducer(initialState, {
            type: ADD_CURRENT_INGREDIENT,
            currentIngredient: {}
        })).toEqual(
            {
                ingredientsList: [],
                ingredientsRequest: false,
                ingredientsError: false,
                constructorItemsList: [],
                constructorBun: {},
                currentIngredient: {},
                orders: [],
                order: null,
                orderId: 0,
                orderRequest: false,
                orderError: false,
                orderIdError: false,
                orderIdRequest: false,
            }
        )
    })

    it('should handle REMOVE_CURRENT_INGREDIENT', () => {
        expect(currentIngredientReducer(initialState, {
            type: REMOVE_CURRENT_INGREDIENT,
            wsConnected: false,
            payload: 'error',
        })).toEqual(
            {
                ingredientsList: [],
                ingredientsRequest: false,
                ingredientsError: false,
                constructorItemsList: [],
                constructorBun: {},
                currentIngredient: {},
                orders: [],
                order: null,
                orderId: 0,
                orderRequest: false,
                orderError: false,
                orderIdError: false,
                orderIdRequest: false,
            }
        )
    })

})