import {
    ADD_BUN_CONSTRUCTOR_ITEM,
    ADD_CONSTRUCTOR_ITEM,
    MOVE_CONSTRUCTOR_ITEM,
    REMOVE_CONSTRUCTOR_ITEM,
    RESET_CONSTRUCTOR,
} from "../constants/ingredients";
import {constructorItemsListInitialState, constructorItemsListReducer} from "./constructorItemsListReducer";

export const testData = [{
    _id: '60d3b41abdacab0026a733c6',
    name: 'Краторная булка N-200i',
    type: 'bun',
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: 'https://code.s3.yandex.net/react/code/bun-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
    __v: 0
},
    {
        _id: '60d3b41abdacab0026a733c7',
        name: 'Флюоресцентная булка R2-D3',
        type: 'bun',
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: 'https://code.s3.yandex.net/react/code/bun-01.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
        __v: 0
    }]

describe('constructorItemsListReducer', () => {

    it('should return the initial state', () => {
        expect(constructorItemsListReducer(undefined, {type: 'for_test'})).toEqual(
            {
                ...constructorItemsListInitialState
            }
        )
    })

    it('should handle ADD_CONSTRUCTOR_ITEM', () => {
        expect(constructorItemsListReducer(constructorItemsListInitialState, {
            type: ADD_CONSTRUCTOR_ITEM,
            item: testData[0],
        })).toEqual(
            {
                ...constructorItemsListInitialState,
                constructorItemsList: [testData[0]],
            }
        )
    })

    it('should handle REMOVE_CONSTRUCTOR_ITEM', () => {
        expect(constructorItemsListReducer({
            ...constructorItemsListInitialState,
            constructorItemsList: testData
        }, {
            type: REMOVE_CONSTRUCTOR_ITEM,
            index: 0
        })).toEqual(
            {
                ...constructorItemsListInitialState,
                constructorItemsList: [{
                    _id: '60d3b41abdacab0026a733c7',
                    name: 'Флюоресцентная булка R2-D3',
                    type: 'bun',
                    proteins: 44,
                    fat: 26,
                    carbohydrates: 85,
                    calories: 643,
                    price: 988,
                    image: 'https://code.s3.yandex.net/react/code/bun-01.png',
                    image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
                    image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
                    __v: 0
                }]
            }
        )
    })

    it('should handle MOVE_CONSTRUCTOR_ITEM', () => {
        expect(constructorItemsListReducer({
            ...constructorItemsListInitialState,
            constructorItemsList: testData
        }, {
            type: MOVE_CONSTRUCTOR_ITEM,
            payload: {dragIndex: 0, hoverIndex: 0},
        })).toEqual(
            {
                ...constructorItemsListInitialState,
                constructorItemsList: testData,
            }
        )
    })

    it('should handle ADD_BUN_CONSTRUCTOR_ITEM', () => {
        expect(constructorItemsListReducer(constructorItemsListInitialState, {
            type: ADD_BUN_CONSTRUCTOR_ITEM,
            item: testData[0],
        })).toEqual(
            {
                ...constructorItemsListInitialState,
                constructorBun: testData[0],
            }
        )
    })

    it('should handle RESET_CONSTRUCTOR', () => {
        expect(constructorItemsListReducer(constructorItemsListInitialState, {
            type: RESET_CONSTRUCTOR,
        })).toEqual(
            {
                ...constructorItemsListInitialState,
            }
        )
    })
})