import {
  ADD_CONSTRUCTOR_ITEM,
  REMOVE_CONSTRUCTOR_ITEM,
  MOVE_CONSTRUCTOR_ITEM,
  ADD_BUN_CONSTRUCTOR_ITEM,
  RESET_CONSTRUCTOR,
} from "../actions/ingredients";
import { initialState } from "./initialState";

export const constructorItemsListReducer = (state = initialState, action) => {
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
      const { dragIndex, hoverIndex } = action.payload;
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

export default constructorItemsListReducer;
