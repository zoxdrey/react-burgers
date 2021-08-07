import {
    ADD_BUN_CONSTRUCTOR_ITEM,
    ADD_CONSTRUCTOR_ITEM,
    MOVE_CONSTRUCTOR_ITEM,
    REMOVE_CONSTRUCTOR_ITEM,
    RESET_CONSTRUCTOR,
} from "../constants/ingredients";
import {initialState} from "./initialState";
import constructorItemsListReducer from "./constructorItemsListReducer";

describe('constructorItemsListReducer', () => {

    it('should return the initial state', () => {
        expect(constructorItemsListReducer(undefined, {})).toEqual(
            {
                ...initialState
            }
        )
    })

    it('should handle ADD_CONSTRUCTOR_ITEM', () => {
        expect(constructorItemsListReducer(initialState, {
            type: ADD_CONSTRUCTOR_ITEM,
            item: {item: 'item'},
        })).toEqual(
            {
                ...initialState,
                constructorItemsList: [{item: 'item'}],
            }
        )
    })

    it('should handle REMOVE_CONSTRUCTOR_ITEM', () => {
        expect(constructorItemsListReducer({
            ...initialState,
            constructorItemsList: [{item1: 'item1'}, {item2: 'item2'}]
        }, {
            type: REMOVE_CONSTRUCTOR_ITEM,
            index: 0
        })).toEqual(
            {
                ...initialState,
                constructorItemsList: [{item2: 'item2'}]
            }
        )
    })

    it('should handle MOVE_CONSTRUCTOR_ITEM', () => {
        expect(constructorItemsListReducer({
            ...initialState,
            constructorItemsList: [{item1: 'item1'}, {item2: 'item2'}]
        }, {
            type: MOVE_CONSTRUCTOR_ITEM,
            payload: {dragIndex: 0, hoverIndex: 0},
        })).toEqual(
            {
                ...initialState,
                constructorItemsList: [{item1: 'item1'}, {item2: 'item2'}],
            }
        )
    })

    it('should handle ADD_BUN_CONSTRUCTOR_ITEM', () => {
        expect(constructorItemsListReducer(initialState, {
            type: ADD_BUN_CONSTRUCTOR_ITEM,
            item: {item: "item"},
        })).toEqual(
            {
                ...initialState,
                constructorBun: {item: "item"},
            }
        )
    })

    it('should handle RESET_CONSTRUCTOR', () => {
        expect(constructorItemsListReducer(initialState, {
            type: RESET_CONSTRUCTOR,
        })).toEqual(
            {
                ...initialState,
            }
        )
    })
})