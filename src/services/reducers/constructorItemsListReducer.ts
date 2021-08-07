import {
    ADD_BUN_CONSTRUCTOR_ITEM,
    ADD_CONSTRUCTOR_ITEM,
    MOVE_CONSTRUCTOR_ITEM,
    REMOVE_CONSTRUCTOR_ITEM,
    RESET_CONSTRUCTOR,
} from "../constants/ingredients";
import {initialState, TInitialState} from "./initialState";
import {TIngredientsActions} from "../actions/ingredients";

export const constructorItemsListReducer = (state = initialState, action: TIngredientsActions): TInitialState => {
    switch (action.type) {
        case ADD_BUN_CONSTRUCTOR_ITEM: {
            return {
                ...state,
                constructorBun: action.item,
            };
        }
        case ADD_CONSTRUCTOR_ITEM: {
            return {
                ...state,
                constructorItemsList: [...state.constructorItemsList, action.item],
            };
        }
        case REMOVE_CONSTRUCTOR_ITEM: {
            return {
                ...state,
                constructorItemsList: state.constructorItemsList.filter(
                    (val, i) => i !== action.index
                ),
            };
        }
        case MOVE_CONSTRUCTOR_ITEM: {
            const {dragIndex, hoverIndex} = action.payload;
            const arr = [...state.constructorItemsList];
            const dragEl = arr[dragIndex];
            const hoverEl = arr[hoverIndex];
            arr[hoverIndex] = dragEl;
            arr[dragIndex] = hoverEl;
            return {
                ...state,
                constructorItemsList: arr,
            };
        }

        case RESET_CONSTRUCTOR: {
            return {
                ...state,
                constructorItemsList: initialState.constructorItemsList,
                constructorBun: initialState.constructorBun,
            };
        }

        default: {
            return state;
        }
    }
};

