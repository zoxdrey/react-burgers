export type TinitialState = {
    ingredientsList: Array<Object>,
    ingredientsRequest: boolean,
    ingredientsError: boolean,

    constructorItemsList: Array<Object>,
    constructorBun: Object,
    currentIngredient: Object,
    orders: Array<Object>,
    order: null,
    orderId: number,
    orderRequest: boolean,
    orderError: boolean,
    orderIdError: boolean,
    orderIdRequest: boolean,
};

export const initialState: TinitialState = {
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
};
