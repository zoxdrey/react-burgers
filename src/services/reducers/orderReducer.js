import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_ERROR,
} from "../actions/ingredients";
import { initialState } from "./initialState";

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
        orderError: false,
        order: {
          ...state.order,
          orderId: initialState.order.orderId,
        },
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        order: {
          ...state.order,
          orderId: action.orderId,
        },
        orderRequest: false,
      };
    }
    case GET_ORDER_ERROR: {
      return {
        ...state,
        orderError: true,
        orderRequest: false,
        order: {
          ...state.order,
          orderId: initialState.order.orderId,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default orderReducer;
