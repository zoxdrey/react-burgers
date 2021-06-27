export const GET_BURGER_INGREDIENTS_REQUEST = "GET_BURGER_INGREDIENTS_REQUEST";
export const GET_BURGER_INGREDIENTS_SUCCESS = "GET_BURGER_INGREDIENTS_SUCCESS";
export const GET_BURGER_INGREDIENTS_ERROR = "GET_BURGER_INGREDIENTS_ERROR";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_ERROR = "GET_ORDER_ERROR";

export const ADD_CONSTRUCTOR_ITEM = "ADD_CONSTRUCTOR_ITEM";
export const REMOVE_CONSTRUCTOR_ITEM = "REMOVE_CONSTRUCTOR_ITEM";
export const MOVE_CONSTRUCTOR_ITEM = "MOVE_CONSTRUCTOR_ITEM";
export const ADD_BUN_CONSTRUCTOR_ITEM = "ADD_BUN_CONSTRUCTOR_ITEM";
export const RESET_CONSTRUCTOR = "RESET_CONSTRUCTOR";

export const ADD_CURRENT_INGREDIENT = "ADD_CURRENT_INGREDIENT";
export const REMOVE_CURRENT_INGREDIENT = "REMOVE_CURRENT_INGREDIENT";

export function getIngredientsList() {
  return function (dispatch) {
    dispatch({
      type: GET_BURGER_INGREDIENTS_REQUEST,
    });
    fetch("https://norma.nomoreparties.space/api/ingredients")
      .then((res) => (res.ok ? res : Promise.reject(res)))
      .then((res) => res.json())
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_BURGER_INGREDIENTS_SUCCESS,
            ingredientsList: res.data,
          });
        } else {
          dispatch({
            type: GET_BURGER_INGREDIENTS_ERROR,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_BURGER_INGREDIENTS_ERROR,
        });
      });
  };
}

export function getOrder(orderIds, openModalFunc) {
  return function (dispatch) {
    dispatch({
      type: GET_ORDER_REQUEST,
    });
    fetch("https://norma.nomoreparties.space/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredients: orderIds }),
    })
      .then((res) => (res.ok ? res : Promise.reject(res)))
      .then((res) => res.json())
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_ORDER_SUCCESS,
            orderId: res.order.number,
          });
          openModalFunc(true);
        } else {
          dispatch({
            type: GET_BURGER_INGREDIENTS_ERROR,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_BURGER_INGREDIENTS_ERROR,
        });
      });
  };
}
