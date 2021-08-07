import {IBurgerElement, TOrderData} from "../types/data";

export type TInitialState = {
    ingredientsList: Array<IBurgerElement>,
    ingredientsRequest: boolean,
    ingredientsError: boolean,

    constructorItemsList: Array<IBurgerElement>,
    constructorBun: IBurgerElement,
    currentIngredient: Object,
    orders: Array<Object>,
    order: TOrderData,
    orderId: number,
    orderRequest: boolean,
    orderError: boolean,
    orderIdError: boolean,
    orderIdRequest: boolean,
};

export const initialState: TInitialState = {
    ingredientsList: [],
    ingredientsRequest: false,
    ingredientsError: false,

    constructorItemsList: [],
    constructorBun: undefined,
    currentIngredient: {},
    orders: [],
    order: null,
    orderId: 0,
    orderRequest: false,
    orderError: false,
    orderIdError: false,
    orderIdRequest: false,
};
